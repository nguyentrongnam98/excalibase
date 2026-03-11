import type { EditorTabsProps } from "@/app/types";

export default function EditorTabs({
  files,
  activeFile,
  onFileChange,
}: EditorTabsProps) {
  return (
    <div className="flex items-center gap-0 px-1 sm:px-2 pt-2 overflow-x-auto scrollbar-hide">
      {files.map((file) => (
        <button
          key={file.name}
          onClick={() => onFileChange(file.name)}
          className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-t-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
            activeFile === file.name
              ? "bg-[#1e1e1e] text-white border-t border-x border-[#444]"
              : "bg-[#2d2d2d] text-[#888] hover:text-[#ccc]"
          }`}
        >
          <span className="text-blue-400 text-[10px] sm:text-xs font-bold">TS</span>
          <span className="truncate max-w-[120px] sm:max-w-none">{file.path}</span>
        </button>
      ))}
    </div>
  );
}
