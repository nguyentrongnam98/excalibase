"use client";

import type { AppPreviewProps } from "@/app/types";
import WindowChrome from "../WindowChrome";
import TodoItem from "./TodoItem";
import AddTodoInput from "./AddTodoInput";

export default function AppPreview({
  todos,
  onToggleTodo,
  onAddTodo,
  lastAction,
  notification,
}: AppPreviewProps) {
  return (
    <div className="flex flex-col h-full bg-[#1a1a2e] rounded-xl overflow-hidden border border-[#333]">
      <WindowChrome title="my-amazing-project.app" />

      {/* Header info */}
      <div className="px-3 sm:px-4 pb-2 flex items-center justify-between gap-2">
        <span className="text-[10px] sm:text-xs text-[#888] shrink-0">Last categorized: 0s ago</span>
        {notification && (
          <span className="bg-[#2a2a3e] text-[#f0a050] text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full flex items-center gap-1.5 sm:gap-2 truncate max-w-[200px] sm:max-w-none">
            <span className="truncate">{notification}</span>
            <span className="text-[#888] cursor-pointer shrink-0">×</span>
          </span>
        )}
      </div>

      {/* Todo list */}
      <div className="flex-1 px-3 sm:px-4 overflow-y-auto space-y-1">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onToggle={onToggleTodo} />
        ))}
      </div>

      <AddTodoInput onAdd={onAddTodo} />

      {/* Last action */}
      {lastAction && (
        <div className="px-3 sm:px-4 pb-2 text-[10px] sm:text-xs text-[#666] font-mono truncate">
          {lastAction}
        </div>
      )}
    </div>
  );
}
