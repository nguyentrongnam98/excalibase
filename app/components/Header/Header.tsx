"use client";

import { useState, useRef, useEffect } from "react";

// ---- Types ----
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownContent?: DropdownItem[];
  featured?: FeaturedItem;
}

interface DropdownItem {
  icon: React.ReactNode;
  label: string;
  description: string;
  href: string;
  external?: boolean;
}

interface FeaturedItem {
  icon: React.ReactNode;
  label: string;
  description: string;
  href: string;
  cta: string;
}

// ---- Icons ----
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="none"
    className="ml-0.5 opacity-50"
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

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const DocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const TemplateIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CommunityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const StackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ---- Navigation Data ----
const navItems: NavItem[] = [
  {
    label: "Product",
    hasDropdown: true,
    dropdownContent: [
      {
        icon: <DocIcon />,
        label: "Database",
        description: "Powerful reactive database for your apps",
        href: "#",
      },
      {
        icon: <RocketIcon />,
        label: "Functions",
        description: "Server-side logic with TypeScript",
        href: "#",
      },
      {
        icon: <TemplateIcon />,
        label: "File Storage",
        description: "Store and serve files at scale",
        href: "#",
      },
      {
        icon: <SearchIcon />,
        label: "Scheduling",
        description: "Cron jobs and scheduled functions",
        href: "#",
      },
    ],
  },
  {
    label: "Developers",
    hasDropdown: true,
    dropdownContent: [
      {
        icon: <DocIcon />,
        label: "Documentation",
        description: "Get started with your favorite frameworks",
        href: "#",
        external: true,
      },
      {
        icon: <SearchIcon />,
        label: "Search",
        description: "Search across Docs, Stack, and Discord",
        href: "#",
        external: true,
      },
      {
        icon: <TemplateIcon />,
        label: "Templates",
        description: "Use a recipe to get started quickly",
        href: "#",
      },
      {
        icon: <StarIcon />,
        label: "Champions",
        description: "Ambassadors that support our thriving community",
        href: "#",
      },
      {
        icon: <RocketIcon />,
        label: "For Startups",
        description: "Start and scale your company with Excalibase",
        href: "#",
      },
      {
        icon: <HeartIcon />,
        label: "For Open Source",
        description: "Support for open source projects",
        href: "#",
      },
      {
        icon: <ChatIcon />,
        label: "Community",
        description: "Share ideas and ask for help in our community Discord",
        href: "#",
      },
    ],
    featured: {
      icon: <StackIcon />,
      label: "Stack",
      description:
        "Stack is the Excalibase developer portal and blog, sharing bright ideas and techniques for building with Excalibase.",
      href: "#",
      cta: "Explore Stack →",
    },
  },
  { label: "Blog", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
];

// ---- Dropdown Component ----
function MegaDropdown({
  items,
  featured,
  isOpen,
}: {
  items: DropdownItem[];
  featured?: FeaturedItem;
  isOpen: boolean;
}) {
  if (!isOpen) return null;

  // Split items into two columns for the featured layout
  const hasFeature = !!featured;
  const midpoint = Math.ceil(items.length / 2);
  const col1 = hasFeature ? items.slice(0, midpoint) : items;
  const col2 = hasFeature ? items.slice(midpoint) : [];

  return (
    <div className="absolute top-full left-0 pt-3 z-50">
      <div className="bg-[#1a1a2e] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
        {hasFeature ? (
          /* Layout with featured: 2 item columns + featured sidebar */
          <div className="flex">
            <div className="flex p-4 gap-2">
              {/* Column 1 */}
              <div className="flex flex-col gap-1 w-[230px]">
                {col1.map((item) => (
                  <DropdownLink key={item.label} item={item} />
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-1 w-[230px]">
                {col2.map((item) => (
                  <DropdownLink key={item.label} item={item} />
                ))}
              </div>
            </div>

            {/* Featured section */}
            <div className="bg-white/[0.03] border-l border-white/10 p-5 flex flex-col justify-center w-[250px] shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  {featured.icon}
                </div>
                <span className="text-white font-semibold text-sm">
                  {featured.label}
                </span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                {featured.description}
              </p>
              <a
                href={featured.href}
                className="text-sm text-white/80 hover:text-white transition-colors font-medium"
              >
                {featured.cta}
              </a>
            </div>
          </div>
        ) : (
          /* Simple layout without featured: 2 fixed-width columns */
          <div className="flex p-4 gap-2">
            <div className="flex flex-col gap-1 w-[230px]">
              {items.slice(0, Math.ceil(items.length / 2)).map((item) => (
                <DropdownLink key={item.label} item={item} />
              ))}
            </div>
            <div className="flex flex-col gap-1 w-[230px]">
              {items.slice(Math.ceil(items.length / 2)).map((item) => (
                <DropdownLink key={item.label} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DropdownLink({ item }: { item: DropdownItem }) {
  return (
    <a
      href={item.href}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
    >
      <span className="text-white/60 mt-0.5 shrink-0 group-hover:text-white/80 transition-colors">
        {item.icon}
      </span>
      <div className="min-w-0">
        <div className="text-sm font-medium text-white flex items-center gap-1">
          {item.label}
          {item.external && <ExternalIcon />}
        </div>
        <div className="text-xs text-white/50 mt-0.5 leading-relaxed">
          {item.description}
        </div>
      </div>
    </a>
  );
}

// ---- Mobile Menu Item with Accordion ----
function MobileNavItem({ item }: { item: NavItem }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.hasDropdown) {
    return (
      <a
        href={item.href || "#"}
        className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
      >
        {item.label}
        <ChevronDown
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && item.dropdownContent && (
        <div className="ml-3 pl-3 border-l border-white/10 mt-1 space-y-0.5">
          {item.dropdownContent.map((sub) => (
            <a
              key={sub.label}
              href={sub.href}
              className="flex items-center gap-3 px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
            >
              <span className="opacity-60 shrink-0">{sub.icon}</span>
              <div className="min-w-0">
                <span className="block">{sub.label}</span>
                <span className="block text-xs text-white/40 mt-0.5 leading-snug">
                  {sub.description}
                </span>
              </div>
            </a>
          ))}
          {item.featured && (
            <div className="mx-3 my-2 p-3 bg-white/[0.03] rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  {item.featured.icon}
                </div>
                <span className="text-white font-semibold text-sm">
                  {item.featured.label}
                </span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed mb-2">
                {item.featured.description}
              </p>
              <a
                href={item.featured.href}
                className="text-xs text-white/70 hover:text-white font-medium"
              >
                {item.featured.cta}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---- Mobile Menu ----
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-[340px] bg-[#1a1a2e] border-l border-white/10 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <span className="text-white font-bold text-lg">excalibase</span>
          </a>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="p-3 space-y-0.5">
          {navItems.map((item) => (
            <MobileNavItem key={item.label} item={item} />
          ))}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-3">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white/[0.06] hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white/80 text-sm font-medium"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="#"
            className="block px-3 py-2.5 text-center text-white/80 hover:text-white text-sm font-medium"
          >
            Log in
          </a>
          <a
            href="#"
            className="block px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full text-center transition-colors shadow-lg shadow-orange-500/20"
          >
            Start building
          </a>
        </div>
      </div>
    </div>
  );
}

// ---- Main Header ----
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0f0f1a]/80 backdrop-blur-xl border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                excalibase
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 ml-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <a
                    href={item.href || "#"}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      openDropdown === item.label
                        ? "text-white bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        );
                      }
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {item.hasDropdown && item.dropdownContent && (
                    <MegaDropdown
                      items={item.dropdownContent}
                      featured={item.featured}
                      isOpen={openDropdown === item.label}
                    />
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* GitHub Stars */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.06] hover:bg-white/10 border border-white/10 rounded-full transition-colors"
              >
                <GitHubIcon />
                <span className="text-white/80 text-xs font-medium">
                  GitHub
                </span>
              </a>

              {/* Log in */}
              <a
                href="#"
                className="text-sm text-white/70 hover:text-white font-medium transition-colors px-3 py-2"
              >
                Log in
              </a>

              {/* CTA Button */}
              <a
                href="#"
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors shadow-lg shadow-orange-500/20"
              >
                Start building
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
