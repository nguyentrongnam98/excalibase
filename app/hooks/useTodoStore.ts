"use client";

import { useState, useCallback } from "react";
import type { Todo, TodoCategory } from "@/app/types";
import { INITIAL_TODOS } from "@/app/constants";
import { generateId, formatDate } from "@/app/utils";

export function useTodoStore(setCompleteValue: boolean) {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);
  const [lastAction, setLastAction] = useState("");

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo._id !== id) return todo;

          if (todo.completed) {
            setLastAction(`setIncomplete("${id}") → completed: false`);
            return { ...todo, completed: false };
          }

          setLastAction(
            `setComplete("${id}") → completed: ${setCompleteValue}`
          );
          return { ...todo, completed: setCompleteValue };
        })
      );
    },
    [setCompleteValue]
  );

  const addTodo = useCallback(
    (text: string, category: TodoCategory) => {
      const newTodo: Todo = {
        _id: generateId(),
        text,
        category,
        completed: false,
        _creationTime: formatDate(),
      };
      setTodos((prev) => [newTodo, ...prev]);
      setLastAction(`add("${text}", "${category}")`);
    },
    []
  );

  return { todos, lastAction, setLastAction, toggleTodo, addTodo };
}
