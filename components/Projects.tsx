"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, type Project } from "@/data/projects";

type Filter = "All" | "Web" | "Mobile" | "Salesforce";

const filters: Filter[] = ["All", "Web", "Mobile", "Salesforce"];

function ActionIcon({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}) {
  const disabled = !href;

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-lg border border-light-surface dark:border-dark-surface text-light-muted/50 dark:text-dark-muted/50"
      >
        <Icon size={16} />
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-light-surface dark:border-dark-surface text-light-muted dark:text-dark-muted transition-colors hover:border-dark-accent/40 hover:text-dark-accent"
    >
      <Icon size={16} />
    </a>
  );
}

function AwardBadge({ award }: { award: string }) {
  if (!award) return null;

  return (
    <span className="inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
      {award}
    </span>
  );
}

function TechStack({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-dark-accent/30 bg-dark-accent/10 px-2.5 py-1 text-xs font-medium text-dark-accent"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-light-surface dark:border-dark-surface bg-light-surface/40 dark:bg-dark-surface/40">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[260px] overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-dark-accent/40 bg-dark-accent/15 px-3 py-1 text-xs font-semibold text-dark-accent">
            {project.tag}
          </span>
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
            {project.title}
          </h3>

          <div className="mt-3">
            <AwardBadge award={project.award} />
          </div>

          <p className="mt-4 leading-relaxed text-light-muted dark:text-dark-muted">
            {project.description}
          </p>

          <TechStack items={project.techStack} />

          <div className="mt-5 flex items-center gap-2">
            <ActionIcon href={project.githubUrl} label="GitHub" icon={FiGithub} />
            <ActionIcon
              href={project.liveUrl}
              label="Live Demo"
              icon={FiExternalLink}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectGridCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-light-surface dark:border-dark-surface bg-light-surface/40 dark:bg-dark-surface/40">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-dark-accent/40 bg-dark-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-dark-accent">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>

        <div className="mt-2 min-h-[24px]">
          <AwardBadge award={project.award} />
        </div>

        <p className="mt-3 line-clamp-4 leading-relaxed text-light-muted dark:text-dark-muted">
          {project.description}
        </p>

        <TechStack items={project.techStack} />

        <div className="mt-5 flex items-center gap-2">
          <ActionIcon href={project.githubUrl} label="GitHub" icon={FiGithub} />
          <ActionIcon href={project.liveUrl} label="Live Demo" icon={FiExternalLink} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tag === activeFilter);
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const regularProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-label="Projects section"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="mb-2 font-mono text-sm text-dark-accent">03.</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve Built
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-dark-accent" />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-dark-accent text-dark-bg"
                    : "border border-light-surface dark:border-dark-surface text-light-muted dark:text-dark-muted hover:border-dark-accent/40 hover:text-dark-accent"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div key={activeFilter + "-featured"} className="space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>

        {regularProjects.length > 0 && (
          <div
            key={activeFilter + "-regular"}
            className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {regularProjects.map((project) => (
              <ProjectGridCard key={project.title} project={project} />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <p className="mt-8 text-sm text-light-muted dark:text-dark-muted">
            No projects found for this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
