import type { Todo, FileTab, EditableRange } from "@/app/types";
import { INITIAL_TODOS_CODE, INITIAL_SCHEMA_CODE } from "./defaultCode";
import { formatDate } from "@/app/utils";


export const INITIAL_TODOS: Todo[] = [
  {
    _id: "24gnyehdsc",
    text: "Play basketball",
    category: "Other",
    completed: false,
    _creationTime: formatDate(),
  },
  {
    _id: "24ivzlrwcl",
    text: "Talk to my boss",
    category: "Work",
    completed: false,
    _creationTime: formatDate(),
  },
  {
    _id: "24tkdsspgt",
    text: "Buy groceries",
    category: "Chores",
    completed: false,
    _creationTime: formatDate(),
  },
];


export const INITIAL_FILES: FileTab[] = [
  {
    name: "todos.ts",
    path: "convex/todos.ts",
    content: INITIAL_TODOS_CODE,
    language: "typescript",
  },
  {
    name: "schema.ts",
    path: "convex/schema.ts",
    content: INITIAL_SCHEMA_CODE,
    language: "typescript",
  },
];


export const EDITABLE_RANGES: Record<string, EditableRange[]> = {
  "todos.ts": [
    {
      lineNumber: 11,
      startColumn: 18,
      endColumn: 22,
    },
  ],
};
