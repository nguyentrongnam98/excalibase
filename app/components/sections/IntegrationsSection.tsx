export default function IntegrationsSection() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block border border-[#333] text-[#333] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm mb-6">
              Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
              Excalibase{" "}
              <span className="inline-block align-middle">
                <HeartPixel />
              </span>{" "}
              your favorite frameworks
            </h2>
            <p className="text-[#555] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Connect your backend to your client libraries and frameworks
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#1a1a1a] hover:bg-[#333] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Learn more
            </a>
          </div>

          {/* Right: Frameworks grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {frameworks.map((fw) => (
              <a
                key={fw.name}
                href={fw.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#e8e3da] transition-colors group"
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  {fw.icon}
                </div>
                <span className="text-[#1a1a1a] font-semibold text-sm sm:text-base group-hover:text-[#000] transition-colors">
                  {fw.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Heart Pixel Icon ----
function HeartPixel() {
  return (
    <svg width="40" height="36" viewBox="0 0 20 18" fill="none">
      <path
        d="M2 2H4V0H8V2H12V0H16V2H18V4H20V10H18V12H16V14H14V16H12V18H8V16H6V14H4V12H2V10H0V4H2V2Z"
        fill="#e74c3c"
      />
    </svg>
  );
}

// ---- Framework data ----
const frameworks = [
  {
    name: "React",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="3" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  {
    name: "React Native",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <path d="M16 6L28 24H4z" fill="none" stroke="#61DAFB" strokeWidth="2" />
        <path d="M16 6L28 24" stroke="#61DAFB" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Python",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <path d="M15.9 2c-7.2 0-6.7 3.1-6.7 3.1v3.3h6.8v1H5.6S2 8.7 2 16s3.1 7.1 3.1 7.1h1.9v-3.4s-.1-3.1 3.1-3.1h5.3s3 0 3-2.9V7s.5-5-2.5-5zm-3.7 2.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB" />
        <path d="M16.1 30c7.2 0 6.7-3.1 6.7-3.1v-3.3h-6.8v-1h10.4s3.6.7 3.6-6.6-3.1-7.1-3.1-7.1h-1.9v3.4s.1 3.1-3.1 3.1h-5.3s-3 0-3 2.9V25s-.5 5 2.5 5zm3.7-2.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="14" fill="#000" />
        <path d="M13 10v12l9-12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "TanStack Start",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="14" fill="#1a1a1a" />
        <text x="16" y="21" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">T</text>
      </svg>
    ),
  },
  {
    name: "Rust",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="14" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        <text x="16" y="21" textAnchor="middle" fill="#1a1a1a" fontSize="13" fontWeight="bold">R</text>
      </svg>
    ),
  },
  {
    name: "Remix",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect x="2" y="2" width="28" height="28" rx="4" fill="#1a1a1a" />
        <text x="16" y="22" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">R</text>
      </svg>
    ),
  },
  {
    name: "Vue",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <polygon points="16,4 28,28 22,28 16,16 10,28 4,28" fill="none" stroke="#42b883" strokeWidth="2" />
        <polygon points="16,10 22,28 10,28" fill="none" stroke="#35495e" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Svelte",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <path d="M24.5 6.5C21.5 2 15 2.5 12 5.5L7 11c-2.5 3-.5 7.5 3 8.5" fill="none" stroke="#FF3E00" strokeWidth="2" strokeLinecap="round" />
        <path d="M7.5 25.5C10.5 30 17 29.5 20 26.5L25 21c2.5-3 .5-7.5-3-8.5" fill="none" stroke="#FF3E00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];
