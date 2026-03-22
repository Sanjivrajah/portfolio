import { skills, type SkillCategory } from "@/data/skills";
import Image from "next/image";

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border border-light-surface dark:border-dark-surface bg-light-surface/50 dark:bg-dark-surface/50 px-4 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-dark-accent/40 hover:shadow-[0_8px_30px_rgba(0,255,171,0.12)]">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-110 dark:brightness-90 dark:contrast-125"
          unoptimized
        />
      </div>
      <span className="text-center text-xs font-medium text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors">
        {name}
      </span>
    </div>
  );
}

function CategoryGroup({
  category,
}: {
  category: SkillCategory;
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-accent">
        {category.category}
      </h3>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {category.items.map((skill) => (
          <SkillCard key={skill.name + category.category} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills section"
      className="relative py-24 sm:py-32"
    >
      {/* Subtle background tint */}
      <div className="absolute inset-0 bg-light-surface/30 dark:bg-dark-surface/20" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-dark-accent">02.</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-dark-accent" />
        </div>

        {/* Skill groups */}
        <div className="space-y-12">
          {skills.map((category) => (
            <CategoryGroup key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
