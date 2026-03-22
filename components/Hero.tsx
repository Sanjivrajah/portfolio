"use client";

import { useState, useEffect, useCallback } from "react";
import { FiArrowDown, FiDownload, FiArrowRight } from "react-icons/fi";

const titles = [
  "Full-Stack Engineer",
  "Salesforce Developer",
  "AWS Cloud Enthusiast",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setText(currentWord.slice(0, text.length + 1));
      if (text.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
        return;
      }
    } else {
      setText(currentWord.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTimeout(() => {}, PAUSE_AFTER_DELETING);
        return;
      }
    }
  }, [text, isDeleting, wordIndex, words]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return text;
}

const codeLines = [
  { indent: 0, tokens: [{ text: "const ", color: "text-purple-400" }, { text: "developer", color: "text-dark-text" }, { text: " = {", color: "text-dark-muted" }] },
  { indent: 1, tokens: [{ text: "name", color: "text-dark-accent" }, { text: ": ", color: "text-dark-muted" }, { text: '"Sanjivrajah Murali"', color: "text-amber-300" }, { text: ",", color: "text-dark-muted" }] },
  { indent: 1, tokens: [{ text: "role", color: "text-dark-accent" }, { text: ": ", color: "text-dark-muted" }, { text: '"Full-Stack Engineer"', color: "text-amber-300" }, { text: ",", color: "text-dark-muted" }] },
  { indent: 1, tokens: [{ text: "location", color: "text-dark-accent" }, { text: ": ", color: "text-dark-muted" }, { text: '"Malaysia 🇲🇾"', color: "text-amber-300" }, { text: ",", color: "text-dark-muted" }] },
  { indent: 1, tokens: [{ text: "skills", color: "text-dark-accent" }, { text: ": [", color: "text-dark-muted" }] },
  { indent: 2, tokens: [{ text: '"React"', color: "text-amber-300" }, { text: ", ", color: "text-dark-muted" }, { text: '"Next.js"', color: "text-amber-300" }, { text: ", ", color: "text-dark-muted" }, { text: '"Node.js"', color: "text-amber-300" }, { text: ",", color: "text-dark-muted" }] },
  { indent: 2, tokens: [{ text: '"Salesforce"', color: "text-amber-300" }, { text: ", ", color: "text-dark-muted" }, { text: '"AWS"', color: "text-amber-300" }, { text: ", ", color: "text-dark-muted" }, { text: '"TypeScript"', color: "text-amber-300" }] },
  { indent: 1, tokens: [{ text: "],", color: "text-dark-muted" }] },
  { indent: 1, tokens: [{ text: "passion", color: "text-dark-accent" }, { text: ": ", color: "text-dark-muted" }, { text: '"Building things that matter"', color: "text-amber-300" }] },
  { indent: 0, tokens: [{ text: "};", color: "text-dark-muted" }] },
];

export function Hero() {
  const typedText = useTypewriter(titles);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Hero section"
      className="hero-dots relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-dark-accent/5 blur-[80px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[320px] w-[320px] rounded-full bg-purple-500/5 blur-[80px]" />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-32 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-0">
        {/* Left — Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 font-mono text-sm tracking-wide text-dark-accent">
            Hi, I&apos;m
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Sanjivrajah{" "}
            <span className="accent-gradient">Murali</span>
          </h1>

          <div className="mb-6 flex items-center gap-2">
            <span className="text-xl font-semibold text-light-muted dark:text-dark-muted sm:text-2xl lg:text-3xl">
              {typedText}
            </span>
            <span className="inline-block h-7 w-[3px] animate-blink rounded-full bg-dark-accent sm:h-8" />
          </div>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
            Designing and building systems that grow with ambition.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-dark-accent px-7 py-3 text-sm font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-dark-accent/25 hover:scale-[1.03] active:scale-[0.98]"
            >
              View My Work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-dark-accent/40 px-7 py-3 text-sm font-semibold text-dark-accent transition-all hover:border-dark-accent hover:bg-dark-accent/10 hover:scale-[1.03] active:scale-[0.98]"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right — Terminal card */}
        <div className="hidden lg:flex items-center">
          <div className="relative w-[420px]">
            {/* Ambient glow behind the card */}
            <div className="absolute -inset-2 rounded-2xl bg-dark-accent/10 blur-xl" />

            <div className="relative overflow-hidden rounded-xl border border-dark-surface bg-[#0D0D0D] shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-dark-surface px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="ml-2 font-mono text-xs text-dark-muted">
                  ~/sanjivrajah.ts
                </span>
              </div>

              {/* Code lines */}
              <div className="px-4 py-4 font-mono text-[13px] leading-6">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-4 w-5 select-none text-right text-dark-muted/40">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 20}px` }}>
                      {line.tokens.map((token, j) => (
                        <span key={j} className={token.color}>
                          {token.text}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-dark-muted hover:text-dark-accent transition-colors animate-bounce"
        >
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <FiArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
