"use client";

import { useState, useEffect, useCallback } from "react";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-light-surface dark:border-dark-surface bg-light-bg/90 dark:bg-dark-bg/90 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="relative z-50 text-xl font-bold tracking-tight">
          Sanjiv
          <span className="text-dark-accent">rajah</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="/wishes"
            className="px-4 py-2 text-sm font-medium transition-colors rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-accent"
          >
            Wishes
          </a>

          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="px-4 py-2 text-sm font-medium transition-colors rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-accent"
            >
              {label}
            </a>
          ))}

          <div className="ml-2 pl-2 border-l border-light-surface dark:border-dark-surface">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiXMark size={22} /> : <HiOutlineBars3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-200 ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={`absolute left-1/2 top-1/2 w-[min(90vw,22rem)] -translate-x-1/2 rounded-2xl border border-light-surface/70 bg-light-bg/80 p-5 shadow-2xl backdrop-blur-xl dark:border-dark-surface/70 dark:bg-dark-surface/75 transition-all duration-200 ${
            mobileOpen
              ? "-translate-y-1/2 scale-100 opacity-100"
              : "-translate-y-[46%] scale-95 opacity-0"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold tracking-wide text-light-text dark:text-dark-text">
              Navigation
            </p>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-light-surface dark:bg-dark-bg text-light-text dark:text-dark-text"
              aria-label="Close menu"
            >
              <HiXMark size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="/wishes"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-light-muted dark:text-dark-muted hover:bg-light-surface dark:hover:bg-dark-surface hover:text-light-text dark:hover:text-dark-text"
            >
              Wishes
            </a>

            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="rounded-lg px-4 py-3 text-base font-medium text-light-muted dark:text-dark-muted hover:bg-light-surface dark:hover:bg-dark-surface hover:text-light-text dark:hover:text-dark-text"
              >
                {label}
              </a>
            ))}

            <div className="mt-4 border-t border-light-surface dark:border-dark-surface pt-4">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-dark-accent py-3 text-center text-sm font-semibold text-dark-accent transition-colors hover:bg-dark-accent/10"
              >
                Download Resume
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
