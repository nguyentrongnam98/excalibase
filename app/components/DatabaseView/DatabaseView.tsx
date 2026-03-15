"use client";

import type { DatabaseViewProps } from "@/app/types";
import { truncate } from "@/app/utils";
import WindowChrome from "../WindowChrome";

export default function DatabaseView({ todos }: DatabaseViewProps) {
  return (
    <div className="flex flex-col h-full bg-[#1a1a2e] rounded-xl overflow-hidden border border-[#333]">
      <WindowChrome title="dashboard.convex.dev" statusColor="#eab308" />

      {/* Table header */}
      <div className="px-4 py-2">
        <h3 className="text-white font-semibold text-sm">
          todos{" "}
          <span className="text-[#888] font-normal text-xs">
            database table with {todos.length} documents
          </span>
        </h3>
      </div>

      {/* Data table */}
      <div className="flex-1 overflow-auto px-2">
        <table className="w-full text-[10px] sm:text-xs whitespace-nowrap">
          <thead>
            <tr className="text-[#888] border-b border-[#2a2a3e]">
              <th className="text-left py-2 px-1.5 sm:px-2 font-medium">_id</th>
              <th className="text-left py-2 px-1.5 sm:px-2 font-medium">text</th>
              <th className="text-left py-2 px-1.5 sm:px-2 font-medium hidden sm:table-cell">category</th>
              <th className="text-left py-2 px-1.5 sm:px-2 font-medium">completed</th>
              <th className="text-left py-2 px-1.5 sm:px-2 font-medium hidden md:table-cell">_creationTime</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr
                key={todo._id}
                className="border-b border-[#2a2a3e] hover:bg-[#2a2a3e]/50 transition-colors"
              >
                <td className="py-2 sm:py-2.5 px-1.5 sm:px-2 text-[#888] font-mono">
                  {truncate(todo._id, 8)}
                </td>
                <td className="py-2 sm:py-2.5 px-1.5 sm:px-2 text-[#e0e0e0] max-w-[100px] sm:max-w-none truncate">
                  &quot;{truncate(todo.text, 12)}&quot;
                </td>
                <td className="py-2 sm:py-2.5 px-1.5 sm:px-2 text-orange-300 hidden sm:table-cell">
                  &quot;{todo.category}&quot;
                </td>
                <td
                  className={`py-2 sm:py-2.5 px-1.5 sm:px-2 font-mono ${
                    todo.completed ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {todo.completed.toString()}
                </td>
                <td className="py-2 sm:py-2.5 px-1.5 sm:px-2 text-[#888] font-mono hidden md:table-cell">
                  {todo._creationTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
