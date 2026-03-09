import type { TodoCategory } from "@/app/types";

// ─── Category Display Config ─────────────────────────────────

export const CATEGORIES: TodoCategory[] = ["Work", "Chores", "Other"];

export const CATEGORY_COLORS: Record<TodoCategory, string> = {
  Work: "bg-purple-600",
  Chores: "bg-green-600",
  Other: "bg-blue-600",
};

// ─── Monaco Editor Options ───────────────────────────────────

export const MONACO_EDITOR_OPTIONS = {
  fontSize: 14,
  fontFamily:
    "'Geist Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  lineNumbers: "on" as const,
  glyphMargin: false,
  folding: true,
  lineDecorationsWidth: 10,
  lineNumbersMinChars: 3,
  renderLineHighlight: "line" as const,
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
  },
  overviewRulerLanes: 0,
  hideCursorInOverviewRuler: true,
  overviewRulerBorder: false,
  padding: { top: 12 },
  wordWrap: "on" as const,
  tabSize: 2,
  automaticLayout: true,
} as const;
