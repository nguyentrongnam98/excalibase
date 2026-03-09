"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";
import { AppPreview } from "@/app/components/AppPreview";
import { DatabaseView } from "@/app/components/DatabaseView";
import { EDITABLE_RANGES } from "@/app/constants";
import { useTodoStore, useEditorFiles, useDeployment } from "@/app/hooks";

// Dynamic import Monaco to avoid SSR issues
const CodeEditor = dynamic(
  () => import("@/app/components/CodeEditor/CodeEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-[#1e1e1e] rounded-xl border border-[#333]">
        <div className="flex items-center gap-3 text-[#888]">
          <div className="w-5 h-5 border-2 border-[#888] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm">Loading editor...</span>
        </div>
      </div>
    ),
  }
);

export default function InteractiveDemo() {

  const { isDeployed, notification, setCompleteValue, markCodeChanged, deploy } =
    useDeployment();

  const { todos, lastAction, setLastAction, toggleTodo, addTodo } =
    useTodoStore(setCompleteValue);

  const { files, activeFile, setActiveFile, updateFileContent } =
    useEditorFiles();


  const handleCodeChange = useCallback(
    (fileName: string, code: string) => {
      updateFileContent(fileName, code);
      if (fileName === "todos.ts") {
        markCodeChanged(code);
      }
    },
    [updateFileContent, markCodeChanged]
  );

  const handleRun = useCallback(() => {
    const todosContent = files.find((f) => f.name === "todos.ts")?.content;
    if (!todosContent) return;

    const result = deploy(todosContent);
    setLastAction(result.message);
  }, [files, deploy, setLastAction]);


  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Everything is code
        </h2>
        <p className="text-[#888] max-w-xl mx-auto text-sm md:text-base">
          Edit the code on the left and watch the app update in real-time. Try
          fixing the bug in{" "}
          <code className="text-orange-400">setComplete</code> — change{" "}
          <code className="text-red-400">false</code> to{" "}
          <code className="text-green-400">true</code>!
        </p>
      </div>

      {/* Try it out badge */}
      <div className="flex justify-center mb-4">
        <div className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
          ✨ Try it out!
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[700px]">
        {/* Left: Code Editor */}
        <div className="h-full min-h-[350px]">
          <CodeEditor
            files={files}
            activeFile={activeFile}
            onFileChange={setActiveFile}
            onCodeChange={handleCodeChange}
            editableRanges={EDITABLE_RANGES}
            showRunButton
            onRun={handleRun}
            isDeployed={isDeployed}
          />
        </div>

        {/* Right: App Preview + Database View */}
        <div className="flex flex-col gap-4 h-full">
          <div className="flex-1 min-h-0">
            <AppPreview
              todos={todos}
              onToggleTodo={toggleTodo}
              onAddTodo={addTodo}
              lastAction={lastAction}
              notification={notification}
            />
          </div>
          <div className="flex-1 min-h-0">
            <DatabaseView todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
}
