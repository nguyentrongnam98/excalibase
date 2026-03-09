import type { TodoItemProps } from "@/app/types";
import { CATEGORY_COLORS } from "@/app/constants";

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-[#2a2a3e] group">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo._id)}
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
            todo.completed
              ? "bg-purple-600 border-purple-600"
              : "border-[#555] hover:border-[#888]"
          }`}
        >
          {todo.completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>
        <span
          className={`text-sm ${
            todo.completed ? "line-through text-[#666]" : "text-[#e0e0e0]"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <span
        className={`text-xs px-2.5 py-1 rounded-full text-white font-medium ${
          CATEGORY_COLORS[todo.category]
        }`}
      >
        {todo.category}
      </span>
    </div>
  );
}
