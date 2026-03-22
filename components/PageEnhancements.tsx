"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export function PageEnhancements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      const nextProgress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

      setProgress(nextProgress);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] bg-dark-accent transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark-accent/40 bg-dark-surface/90 text-dark-accent shadow-lg shadow-black/30 transition-all hover:bg-dark-accent hover:text-dark-bg ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <FiArrowUp size={18} />
      </button>
    </>
  );
}
