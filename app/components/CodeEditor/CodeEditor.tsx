"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import type { CodeEditorProps, EditableRange } from "@/app/types";
import { MONACO_EDITOR_OPTIONS } from "@/app/constants";
import WindowChrome from "../WindowChrome";
import EditorTabs from "./EditorTabs";
import RunButton from "./RunButton";
import ReadOnlyTooltip from "./ReadOnlyTooltip";

type MonacoEditor = Parameters<OnMount>[0];
type Monaco = Parameters<OnMount>[1];

export default function CodeEditor({
  files,
  activeFile,
  onFileChange,
  onCodeChange,
  editableRanges,
  showRunButton,
  onRun,
  isDeployed,
}: CodeEditorProps) {
  const editorRef = useRef<MonacoEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const isUndoingRef = useRef(false);
  const decorationsRef = useRef<string[]>([]);
  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [tooltip, setTooltip] = useState({ visible: false, top: 0, left: 0 });

  const currentFile = files.find((f) => f.name === activeFile);
  const ranges: EditableRange[] = editableRanges?.[activeFile] ?? [];
  const hasRestrictions = ranges.length > 0;


  const applyDecorations = useCallback(() => {
    const editor = editorRef.current;
    const monaco = monacoRef.current;
    if (!editor || !monaco || !hasRestrictions) return;
    if (!editor.getModel()) return;

    const newDecorations = ranges.map((r) => ({
      range: new monaco.Range(
        r.lineNumber,
        r.startColumn,
        r.lineNumber,
        r.endColumn + 1
      ),
      options: {
        inlineClassName: "editable-highlight",
        className: "editable-line-highlight",
        isWholeLine: false,
        stickiness:
          monaco.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
      },
    }));

    decorationsRef.current = editor.deltaDecorations(
      decorationsRef.current,
      newDecorations
    );
  }, [ranges, hasRestrictions]);


  const showTooltipAt = useCallback((lineNumber: number, column: number) => {
    const editor = editorRef.current;
    if (!editor) return;

    if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);

    const domNode = editor.getDomNode();
    if (!domNode) return;

    const pos = editor.getScrolledVisiblePosition({ lineNumber, column });
    if (!pos) return;

    const rect = domNode.getBoundingClientRect();
    setTooltip({
      visible: true,
      top: pos.top + rect.top - 35,
      left: pos.left + rect.left,
    });

    tooltipTimerRef.current = setTimeout(
      () => setTooltip((prev) => ({ ...prev, visible: false })),
      2000
    );
  }, []);


  const isChangeAllowed = useCallback(
    (startLine: number, startCol: number, endLine: number, endCol: number) => {
      if (!hasRestrictions) return true;
      return ranges.some(
        (r) =>
          startLine === r.lineNumber &&
          endLine === r.lineNumber &&
          startCol >= r.startColumn &&
          endCol <= r.endColumn + 1
      );
    },
    [ranges, hasRestrictions]
  );


  const handleMount: OnMount = useCallback(
    (editor, monaco) => {
      editorRef.current = editor;
      monacoRef.current = monaco;

      editor.onDidChangeModelContent((e) => {
        if (isUndoingRef.current || !hasRestrictions) return;

        for (const change of e.changes) {
          if (
            !isChangeAllowed(
              change.range.startLineNumber,
              change.range.startColumn,
              change.range.endLineNumber,
              change.range.endColumn
            )
          ) {
            isUndoingRef.current = true;
            editor.trigger("restrictedEdit", "undo", null);
            isUndoingRef.current = false;
            showTooltipAt(
              change.range.startLineNumber,
              change.range.startColumn
            );
            return;
          }
        }
        applyDecorations();
      });

      editor.onDidChangeCursorPosition(() => {
        if (hasRestrictions) applyDecorations();
      });

      setTimeout(() => applyDecorations(), 100);
    },
    [hasRestrictions, isChangeAllowed, showTooltipAt, applyDecorations]
  );

  // Re-apply decorations on file switch
  useEffect(() => {
    const timer = setTimeout(() => applyDecorations(), 150);
    return () => clearTimeout(timer);
  }, [activeFile, applyDecorations]);


  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-[#333] relative">
      <WindowChrome />

      <EditorTabs
        files={files}
        activeFile={activeFile}
        onFileChange={onFileChange}
      />

      <div className="flex-1 min-h-0">
        {currentFile && (
          <Editor
            height="100%"
            language={currentFile.language}
            value={currentFile.content}
            theme="vs-dark"
            onChange={(value) => {
              if (value !== undefined) onCodeChange(currentFile.name, value);
            }}
            onMount={handleMount}
            options={MONACO_EDITOR_OPTIONS}
          />
        )}
      </div>

      {showRunButton && onRun && (
        <RunButton isDeployed={!!isDeployed} onRun={onRun} />
      )}

      <ReadOnlyTooltip
        visible={tooltip.visible}
        top={tooltip.top}
        left={tooltip.left}
      />
    </div>
  );
}
