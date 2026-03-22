import { experiences } from "@/data/experience";

function CompanyInitials({ company }: { company: string }) {
  const initials = company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-accent/40 bg-dark-accent/10 text-sm font-bold text-dark-accent">
      {initials}
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience section"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-dark-accent">04.</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-dark-accent" />
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-dark-surface md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const isRight = index % 2 !== 0;

              return (
                <article
                  key={item.role + item.company}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`pl-16 md:pl-0 ${
                      isRight ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  >
                    <div className="rounded-2xl border border-light-surface dark:border-dark-surface bg-light-surface/40 dark:bg-dark-surface/40 p-5 sm:p-6">
                      <div className="mb-4 flex items-start gap-3">
                        <CompanyInitials company={item.company} />
                        <div>
                          <h3 className="text-lg font-bold tracking-tight">
                            {item.role}
                          </h3>
                          <p className="text-sm font-medium text-dark-accent">
                            {item.company}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-wide text-light-muted dark:text-dark-muted">
                            {item.duration}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {item.responsibilities.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2 text-sm leading-relaxed text-light-muted dark:text-dark-muted"
                          >
                            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-dark-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute left-5 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-dark-accent bg-dark-bg md:left-1/2" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
