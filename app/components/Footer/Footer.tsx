/**
 * Footer - Multi-column layout with logo, nav links, social, and compliance badges
 */

const ExternalIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="none"
    className="inline-block ml-0.5 opacity-40"
  >
    <path
      d="M3.5 1.5H10.5V8.5M10.5 1.5L1.5 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8.5L6.5 12L13 4"
      stroke="#22c55e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ---- Social icons ----
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LumaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 6v6l8 4 8-4V6l-8-4zm0 2.18L18 8l-6 3-6-3 6-3.82z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// ---- Footer data ----
interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Sync", href: "#" },
      { label: "Realtime", href: "#" },
      { label: "Auth", href: "#" },
      { label: "Open source", href: "#" },
      { label: "AI coding", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Chef", href: "#", external: true },
      { label: "Merch", href: "#", external: true },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Docs", href: "#", external: true },
      { label: "Blog", href: "#", external: true },
      { label: "Components", href: "#" },
      { label: "Templates", href: "#" },
      { label: "Excalibase for Startups", href: "#" },
      { label: "Excalibase for Open Source", href: "#" },
      { label: "Excalibase for Claw", href: "#" },
      { label: "Champions", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "LLMs.txt", href: "#", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Brand", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Become a partner", href: "#" },
      { label: "Jobs", href: "#" },
      { label: "News", href: "#", external: true },
      { label: "Events", href: "#" },
      { label: "Security", href: "#" },
      { label: "Legal", href: "#" },
    ],
  },
];

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

const socialLinks: SocialLink[] = [
  { label: "Twitter", href: "#", icon: <TwitterIcon />, external: true },
  { label: "Discord", href: "#", icon: <DiscordIcon />, external: true },
  { label: "YouTube", href: "#", icon: <YouTubeIcon />, external: true },
  { label: "Luma", href: "#", icon: <LumaIcon />, external: true },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon />, external: true },
  { label: "GitHub", href: "#", icon: <GitHubIcon />, external: true },
];

const complianceBadges = [
  { bold: "SOC 2", text: "Type II Compliant" },
  { bold: "HIPAA", text: "Compliant" },
  { bold: "GDPR", text: "Verified" },
];

// ---- Main Footer ----
export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Top section: Logo + Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Logo */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-6 lg:mb-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">E</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                excalibase
              </span>
            </a>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white/40 text-sm font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors inline-flex items-center"
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {link.label}
                      {link.external && <ExternalIcon />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + Compliance */}
          <div className="col-span-2 sm:col-span-1">
            {/* Social */}
            <h4 className="text-white/40 text-sm font-medium mb-4">Social</h4>
            <ul className="space-y-2.5 mb-8">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-white/50">{link.icon}</span>
                    {link.label}
                    {link.external && <ExternalIcon />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Compliance */}
            <h4 className="text-white/40 text-sm font-medium mb-4">
              A Trusted Solution
            </h4>
            <ul className="space-y-2.5">
              {complianceBadges.map((badge) => (
                <li
                  key={badge.bold}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <CheckIcon />
                  <span>
                    <strong className="text-white font-semibold">
                      {badge.bold}
                    </strong>{" "}
                    {badge.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/40 text-sm">
            ©2026 Excalibase, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
