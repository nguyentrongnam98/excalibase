"use client";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block border border-[#333] text-[#333] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm mb-6">
            Customer Love
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
            Loved by developers
          </h2>
          <p className="text-[#555] text-base sm:text-lg max-w-lg mx-auto">
            What people building their business on Excalibase are saying.
          </p>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Fade masks top & bottom */}
          <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-[#f5f0e8] to-transparent z-10 pointer-events-none rounded-t-2xl" />
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[#f5f0e8] to-transparent z-10 pointer-events-none rounded-b-2xl" />

          {/* Dark box — pause all marquees on hover */}
          <div className="group/slider bg-[#1a1a2e] rounded-2xl sm:rounded-3xl overflow-hidden h-[500px] sm:h-[580px] lg:h-[650px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 h-full p-4 sm:p-5 lg:p-6">
              <MarqueeColumn items={column1} direction="down" duration={35} />
              <MarqueeColumn
                items={column2}
                direction="up"
                duration={40}
                className="hidden sm:flex"
              />
              <MarqueeColumn
                items={column3}
                direction="down"
                duration={38}
                className="hidden lg:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Marquee Column ----
function MarqueeColumn({
  items,
  direction,
  duration,
  className = "",
}: {
  items: Testimonial[];
  direction: "up" | "down";
  duration: number;
  className?: string;
}) {
  const animName = direction === "up" ? "marqueeUp" : "marqueeDown";

  return (
    <div
      className={`flex flex-col overflow-hidden relative ${className}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex flex-col gap-4 shrink-0 group-hover/slider:[animation-play-state:paused]"
        style={{
          animation: `${animName} ${duration}s linear infinite`,
        }}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.handle}-${i}`} testimonial={t} index={i} />
        ))}
      </div>
    </div>
  );
}

// ---- Testimonial Card ----
interface Testimonial {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
}

function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <div
      className="shrink-0 testimonial-card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="bg-white/[0.04] hover:bg-white/[0.08] rounded-xl p-4 sm:p-5 border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/[0.03]">
        <p className="text-white/80 text-sm leading-relaxed mb-4 whitespace-pre-line">
          {testimonial.quote}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white/70 text-xs font-bold shrink-0 transition-transform duration-300 group-hover/slider:hover:scale-110">
            {testimonial.avatar}
          </div>
          <div className="min-w-0">
            <div className="text-white font-semibold text-sm truncate">
              {testimonial.name}
            </div>
            <div className="text-white/40 text-xs truncate">
              {testimonial.handle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Column Data ----
const column1: Testimonial[] = [
  {
    quote:
      "It's magical. I don't say that lightly. I think it's time to do a video on the channel.",
    name: "James Perkins",
    handle: "@james_r_perkins",
    avatar: "JP",
  },
  {
    quote:
      "@excalibase is everything I wanted Firebase to be. Such a great tool. Feels illegal to know about this before others.",
    name: "Timothy Stepro",
    handle: "@tim_stepro",
    avatar: "TS",
  },
  {
    quote: "I think @excalibase might be the best DB I've ever used",
    name: "Robin",
    handle: "@robinxpfp",
    avatar: "R",
  },
  {
    quote:
      "#dailytip if you are a #react developer and want an alternative to Firebase, you might want to give @excalibase a try. It has amazing ReactHooks with samples in #Javascript and #typescript and the price isn't bad.",
    name: "Dev Community",
    handle: "@devcommunity",
    avatar: "DC",
  },
];

const column2: Testimonial[] = [
  {
    quote:
      "- DB schema defined in TS - end-to-end types (like if tRPC also set up your DB) - real-time updates Just Work™",
    name: "Jason Lengstorf",
    handle: "@jlengstorf",
    avatar: "JL",
  },
  {
    quote:
      "@excalibase feels like what I wanted Firebase and MongoDB Realm to be and more. Really enjoying the DX so far!",
    name: "David Kim",
    handle: "@dvddkkim",
    avatar: "DK",
  },
  {
    quote:
      "🤯 @excalibase is the gift that keeps on giving\n\nCheck it out in combination with @nextjs docs.excalibase.dev",
    name: "Guillermo Rauch",
    handle: "@rauchg",
    avatar: "GR",
  },
  {
    quote: "Happy to see more first-class clerk x excalibase integration",
    name: "Community Dev",
    handle: "@communitydev",
    avatar: "CD",
  },
  {
    quote:
      "There's such a major architecture shift around Serverless + real-time that Excalibase enables. It changes how you think about building.",
    name: "Tech Lead",
    handle: "@techlead_dev",
    avatar: "TL",
  },
];

const column3: Testimonial[] = [
  {
    quote: "Console - Devtools, devtools, devtools",
    name: "consoledotdev",
    handle: "@consoledotdev",
    avatar: "CD",
  },
  {
    quote:
      "Next + Excalibase (all in typescript)\n\nVs\n\nAngular (typescript) + Django (python) + Postgres + S3 + Websocket DIY + SQS + IaC + DIY e2e type safety",
    name: "WebDevCody",
    handle: "@webdevcody",
    avatar: "WC",
  },
  {
    quote: "@excalibase Simple. Fast. Realtime.",
    name: "AndyOz",
    handle: "@andy_austin_dev",
    avatar: "AO",
  },
  {
    quote:
      "Managing an application's state has become easier, but the backend has remained complex. Excalibase changes that completely.",
    name: "Sarah Chen",
    handle: "@sarah_codes",
    avatar: "SC",
  },
  {
    quote:
      "The DX is unmatched. TypeScript end-to-end with real-time built in. What more could you ask for?",
    name: "Alex Rivera",
    handle: "@alex_dev",
    avatar: "AR",
  },
];
