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
      <div className="px-4 pb-2 flex items-center justify-between">
        <span className="text-xs text-[#888]">Last categorized: 0s ago</span>
        {notification && (
          <span className="bg-[#2a2a3e] text-[#f0a050] text-xs px-3 py-1 rounded-full flex items-center gap-2">
            {notification}
            <span className="text-[#888] cursor-pointer">×</span>
          </span>
        )}
      </div>

      {/* Todo list */}
      <div className="flex-1 px-4 overflow-y-auto space-y-1">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onToggle={onToggleTodo} />
        ))}
      </div>

      <AddTodoInput onAdd={onAddTodo} />

      {/* Last action */}
      {lastAction && (
        <div className="px-4 pb-2 text-xs text-[#666] font-mono truncate">
          {lastAction}
        </div>
      )}
    </div>
  );
}
