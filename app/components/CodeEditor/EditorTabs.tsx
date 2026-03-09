import type { EditorTabsProps } from "@/app/types";

export default function EditorTabs({
  files,
  activeFile,
  onFileChange,
}: EditorTabsProps) {
  return (
    <div className="flex items-center gap-0 px-2 pt-2">
      {files.map((file) => (
        <button
          key={file.name}
          onClick={() => onFileChange(file.name)}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-t-lg transition-colors cursor-pointer ${
            activeFile === file.name
              ? "bg-[#1e1e1e] text-white border-t border-x border-[#444]"
              : "bg-[#2d2d2d] text-[#888] hover:text-[#ccc]"
          }`}
        >
          <span className="text-blue-400 text-xs font-bold">TS</span>
          <span>{file.path}</span>
        </button>
      ))}
    </div>
  );
}
