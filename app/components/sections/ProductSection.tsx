export default function ProductSection() {
  return (
    <section className="relative bg-[#0f0f1a] overflow-hidden">
      {/* Top rounded overlay to blend from beige section */}
      <div className="bg-[#f5f0e8]">
        <div className="bg-[#0f0f1a] rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 relative">
          {/* Subtle vertical line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge */}
            <span className="inline-block border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm mb-6">
              Product
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Not just a database
            </h2>

            {/* Description */}
            <p className="text-white/60 text-base sm:text-lg max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
              Everything your product deserves to build, launch, and scale.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold rounded-full transition-colors shadow-lg shadow-cyan-500/20"
            >
              Learn more
            </a>

            {/* Feature cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20 text-left">
              <FeatureCard
                icon={<DatabaseIcon />}
                title="Database"
                description="Fully ACID-compliant relational database with real-time subscriptions built in."
              />
              <FeatureCard
                icon={<FunctionIcon />}
                title="Server Functions"
                description="Write your backend logic in TypeScript with queries, mutations, and actions."
              />
              <FeatureCard
                icon={<FileIcon />}
                title="File Storage"
                description="Store and serve files of any size with built-in CDN and access controls."
              />
              <FeatureCard
                icon={<ScheduleIcon />}
                title="Scheduling"
                description="Cron jobs, delayed jobs, and durable functions that run reliably."
              />
              <FeatureCard
                icon={<SearchFeatureIcon />}
                title="Full-Text Search"
                description="Built-in full-text search with automatic indexing — no external service required."
              />
              <FeatureCard
                icon={<AuthIcon />}
                title="Authentication"
                description="Integrate with any auth provider. Built-in user management and access control."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Feature Card ----
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-5 sm:p-6 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-xl transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-cyan-400 mb-4 transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
        {title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// ---- Icons ----
const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const FunctionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const ScheduleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SearchFeatureIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const AuthIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
