

export type TodoCategory = "Work" | "Chores" | "Other";

export interface Todo {
  _id: string;
  text: string;
  category: TodoCategory;
  completed: boolean;
  _creationTime: string;
}

export interface FileTab {
  name: string;
  path: string;
  content: string;
  language: string;
}

/** Defines a region within a file that the user is allowed to edit. */
export interface EditableRange {
  /** 1-based line number */
  lineNumber: number;
  /** 1-based start column (inclusive) */
  startColumn: number;
  /** 1-based end column (inclusive) */
  endColumn: number;
}


export interface CodeEditorProps {
  files: FileTab[];
  activeFile: string;
  onFileChange: (fileName: string) => void;
  onCodeChange: (fileName: string, code: string) => void;
  editableRanges?: Record<string, EditableRange[]>;
  showRunButton?: boolean;
  onRun?: () => void;
  isDeployed?: boolean;
}

export interface AppPreviewProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onAddTodo: (text: string, category: TodoCategory) => void;
  lastAction: string;
  notification: string;
}

export interface DatabaseViewProps {
  todos: Todo[];
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export interface AddTodoInputProps {
  onAdd: (text: string, category: TodoCategory) => void;
}

export interface EditorTabsProps {
  files: FileTab[];
  activeFile: string;
  onFileChange: (fileName: string) => void;
}

export interface RunButtonProps {
  isDeployed: boolean;
  onRun: () => void;
}

export interface ReadOnlyTooltipProps {
  visible: boolean;
  top: number;
  left: number;
}

export interface WindowChromeProps {
  title?: string;
  statusColor?: string;
  children?: React.ReactNode;
}
