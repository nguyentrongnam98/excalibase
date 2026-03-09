"use client";

import { useState, useCallback } from "react";
import type { AddTodoInputProps, TodoCategory } from "@/app/types";
import { CATEGORIES } from "@/app/constants";

export default function AddTodoInput({ onAdd }: AddTodoInputProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState<TodoCategory>("Other");
  const [showPicker, setShowPicker] = useState(false);

  const handleAdd = useCallback(() => {
    if (text.trim()) {
      onAdd(text.trim(), category);
      setText("");
    }
  }, [text, category, onAdd]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleAdd();
    },
    [handleAdd]
  );

  return (
    <div className="p-4 border-t border-[#2a2a3e]">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Watch football game with friends"
          className="flex-1 bg-[#2a2a3e] text-white text-sm px-4 py-2.5 rounded-lg border border-[#3a3a4e] focus:outline-none focus:border-purple-500 placeholder-[#555]"
        />

        {/* Category picker */}
        <div className="relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="p-2.5 bg-[#2a2a3e] rounded-lg border border-[#3a3a4e] hover:border-[#555] transition-colors cursor-pointer"
            title="Select category"
          >
            <svg
              className="w-4 h-4 text-[#888]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>

          {showPicker && (
            <div className="absolute bottom-12 right-0 bg-[#2a2a3e] border border-[#3a3a4e] rounded-lg shadow-xl py-1 z-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setShowPicker(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#3a3a4e] cursor-pointer ${
                    category === cat ? "text-purple-400" : "text-[#ccc]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Add button */}
        <button
          onClick={handleAdd}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}
