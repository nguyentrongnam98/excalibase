
export default function AIToolsSection() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block border border-[#333] text-[#333] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm mb-6">
              AI Tools
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
              LLMs love Excalibase
            </h2>
            <p className="text-[#555] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              With Excalibase, everything is just TypeScript. This means your
              favorite AI tools are pre-equipped to generate high quality code.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#1a1a1a] hover:bg-[#333] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Learn more
            </a>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-[#ebe6dd] rounded-2xl overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="absolute top-[10%] right-[15%] w-16 h-4 bg-[#1a1a1a] rounded-sm" />
              <div className="absolute top-[20%] right-[5%] w-8 h-8 bg-[#c8956b] rounded-sm" />
              <div className="absolute top-[15%] left-[60%] w-12 h-12 bg-[#1a1a1a] rounded-sm" />
              <div className="absolute bottom-[30%] left-[55%] w-6 h-3 bg-[#e74c3c] rounded-sm" />
              <div className="absolute bottom-[15%] right-[10%] w-10 h-4 bg-[#c8956b] rounded-sm" />

              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[85%] sm:w-[80%]">
                <div className="bg-[#1a1a2e] rounded-xl p-4 sm:p-5 shadow-2xl border border-white/10">
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                    Build an app like Slack. It should have a sidebar with
                    channels and direct messages where users can...
                  </p>
                  <div className="flex justify-end">
                    <button className="flex items-center gap-2 bg-[#2a2a3e] hover:bg-[#3a3a4e] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-white/10 transition-colors">
                      Try Excalibase with
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-2 py-0.5 rounded text-xs">
                        Chef
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
