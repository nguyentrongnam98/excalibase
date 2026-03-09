import type { WindowChromeProps } from "@/app/types";

/**
 * Shared macOS-style window title bar with traffic light dots.
 */
export default function WindowChrome({
  title,
  statusColor,
  children,
}: WindowChromeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-3">
      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <div className="w-3 h-3 rounded-full bg-[#28c840]" />

      {statusColor && (
        <div className="ml-4 flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: statusColor }}
          />
          {title && (
            <span className="text-xs text-[#888] font-mono">{title}</span>
          )}
        </div>
      )}

      {!statusColor && title && (
        <span className="ml-auto text-xs text-[#666] font-mono">{title}</span>
      )}

      {children}
    </div>
  );
}
