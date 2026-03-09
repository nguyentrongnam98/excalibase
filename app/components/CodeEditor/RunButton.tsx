import type { RunButtonProps } from "@/app/types";

export default function RunButton({ isDeployed, onRun }: RunButtonProps) {
  return (
    <div className="px-4 py-3 border-t border-[#333] flex items-center justify-between">
      {/* Status indicator */}
      <div className="flex items-center gap-2 text-xs text-[#888]">
        {isDeployed ? (
          <>
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-green-400">
              Deployed — changes are live
            </span>
          </>
        ) : (
          <>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-yellow-400">Unsaved changes</span>
          </>
        )}
      </div>

      {/* Run / Deploy button */}
      <button
        onClick={onRun}
        disabled={isDeployed}
        className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
          isDeployed
            ? "bg-[#2a2a3e] text-[#666] cursor-default"
            : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-900/30 active:scale-95"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3l14 9-14 9V3z"
          />
        </svg>
        {isDeployed ? "Deployed" : "Run"}
      </button>
    </div>
  );
}
