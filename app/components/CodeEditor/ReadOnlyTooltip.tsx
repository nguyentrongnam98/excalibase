import type { ReadOnlyTooltipProps } from "@/app/types";

export default function ReadOnlyTooltip({
  visible,
  top,
  left,
}: ReadOnlyTooltipProps) {
  if (!visible) return null;

  return (
    <div
      className="fixed z-50 bg-[#3a3a4e] text-[#e0e0e0] text-xs px-3 py-1.5 rounded-lg shadow-xl border border-[#555] pointer-events-none flex items-center gap-2"
      style={{ top, left }}
    >
      <svg
        className="w-3.5 h-3.5 text-yellow-400 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v.01M12 12V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
      This line is read-only.
    </div>
  );
}
