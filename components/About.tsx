import Image from "next/image";

const stats = [
  { emoji: "\u{1F3C6}", label: "5+ Hackathon Awards" },
  { emoji: "\u{1F4BC}", label: "Sales Cloud Engineer @ Hilti" },
  { emoji: "\u{1F393}", label: "Dean's List Graduate" },
  { emoji: "\u{1F680}", label: "Co-Founder, Iconix Inc & 6reen" },
];

export function About() {
  return (
    <section
      id="about"
      aria-label="About section"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-dark-accent">01.</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-dark-accent" />
        </div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Left — Photo placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Accent offset border */}
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-dark-accent/40" />
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-dark-accent bg-dark-surface sm:h-80 sm:w-80">
                <Image
                  src="/assets/profile-placeholder.svg"
                  alt="Profile placeholder"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, 320px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right — Bio content */}
          <div className="flex flex-col justify-center">
            {/* Open to Opportunities badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-dark-accent/30 bg-dark-accent/10 px-4 py-1.5 text-xs font-semibold text-dark-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dark-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-dark-accent" />
                </span>
                Open to Opportunities
              </span>
            </div>

            <p className="mb-4 leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
              I&apos;m a Software Engineer at Hilti Asia IT Services, working
              primarily on the Salesforce Sales Cloud platform where I build
              and improve solutions for real business needs. I also enjoy
              developing full-stack applications and exploring how systems can
              scale effectively.
            </p>

            <p className="mb-4 leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
              I graduated with a Bachelor of Computer Science in Data Science
              &amp; AI from Taylor&apos;s University, with a dual degree from
              the University of the West of England, and was fortunate to be on
              the Dean&apos;s List.
            </p>

            <p className="mb-8 leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
              Outside of work, I&apos;m actively building a few side projects
              and enjoy exploring the tech industry - especially in areas like
              AI and emerging technologies. I&apos;m always looking for
              opportunities to learn, experiment, and create solutions that
              make a meaningful impact.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {stats.map(({ emoji, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-light-surface dark:border-dark-surface bg-light-surface/50 dark:bg-dark-surface/50 px-4 py-3 transition-colors hover:border-dark-accent/30"
                >
                  <span className="text-xl">{emoji}</span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
