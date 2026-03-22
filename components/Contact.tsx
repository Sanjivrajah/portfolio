"use client";

import { FormEvent } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactCards = [
  {
    label: "Email",
    value: "sanjiv@sanjivrajah.com",
    href: "mailto:sanjiv@sanjivrajah.com",
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sanjivrajah-m-3b285b209",
    href: "https://www.linkedin.com/in/sanjivrajah-m-3b285b209/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/sanjivrajah",
    href: "https://github.com/sanjivrajah",
    icon: FiGithub,
  },
];

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    // TODO: Connect to Supabase or EmailJS in Phase 2
    console.log("Contact form submitted:", payload);
  };

  return (
    <section
      id="contact"
      aria-label="Contact section"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-dark-accent">05.</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-dark-accent" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            aria-label="Contact form"
            className="rounded-2xl border border-light-surface dark:border-dark-surface bg-light-surface/40 dark:bg-dark-surface/40 p-6 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-light-text dark:text-dark-text">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  className="rounded-lg border border-light-surface dark:border-dark-surface bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-dark-accent"
                  placeholder="Your name"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-light-text dark:text-dark-text">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border border-light-surface dark:border-dark-surface bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-dark-accent"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2 text-sm">
              <span className="font-medium text-light-text dark:text-dark-text">
                Subject
              </span>
              <input
                name="subject"
                type="text"
                required
                className="rounded-lg border border-light-surface dark:border-dark-surface bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-dark-accent"
                placeholder="Project inquiry"
              />
            </label>

            <label className="mt-4 flex flex-col gap-2 text-sm">
              <span className="font-medium text-light-text dark:text-dark-text">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={6}
                className="resize-none rounded-lg border border-light-surface dark:border-dark-surface bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-dark-accent"
                placeholder="Tell me about your project..."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-dark-accent px-6 py-2.5 text-sm font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-dark-accent/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            {contactCards.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 rounded-xl border border-light-surface dark:border-dark-surface bg-light-surface/40 dark:bg-dark-surface/40 p-4 transition-colors hover:border-dark-accent/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-accent/10 text-dark-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-light-muted dark:text-dark-muted">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-light-text dark:text-dark-text">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
