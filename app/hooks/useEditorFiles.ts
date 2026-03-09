"use client";

import { useState, useCallback } from "react";
import type { FileTab } from "@/app/types";
import { INITIAL_FILES } from "@/app/constants";
import { parseSetCompleteValue } from "@/app/utils";

export function useEditorFiles() {
  const [files, setFiles] = useState<FileTab[]>(INITIAL_FILES);
  const [activeFile, setActiveFile] = useState("todos.ts");

  const updateFileContent = useCallback(
    (fileName: string, content: string) => {
      setFiles((prev) =>
        prev.map((f) => (f.name === fileName ? { ...f, content } : f))
      );
    },
    []
  );

  const getFileContent = useCallback(
    (fileName: string): string | undefined => {
      return files.find((f) => f.name === fileName)?.content;
    },
    [files]
  );

  /** Parse the setComplete value from the current todos.ts content. */
  const parseCurrentValue = useCallback((): boolean | null => {
    const todosContent = files.find((f) => f.name === "todos.ts")?.content;
    return todosContent ? parseSetCompleteValue(todosContent) : null;
  }, [files]);

  return {
    files,
    activeFile,
    setActiveFile,
    updateFileContent,
    getFileContent,
    parseCurrentValue,
  };
}
