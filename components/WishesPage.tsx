"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Amiri, Lato, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const amiri = Amiri({ subsets: ["arabic", "latin"], weight: ["400", "700"] });

type BurstParticle = {
  id: number;
  angle: number;
  distance: number;
  size: number;
  duration: number;
  delay: number;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  particles: BurstParticle[];
};

const seeded = (seed: number) => {
  const x = Math.sin(seed * 999.123) * 10000;
  return x - Math.floor(x);
};

export function WishesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [isRayaDay, setIsRayaDay] = useState(false);
  const [countdownText, setCountdownText] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rayaStart = useMemo(() => new Date(2026, 2, 21, 0, 0, 0, 0), []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      if (now >= rayaStart) {
        setIsRayaDay(true);
        setCountdownText("");
        return;
      }

      const diff = rayaStart.getTime() - now.getTime();
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setIsRayaDay(false);
      setCountdownText(
        `${days}d ${hours.toString().padStart(2, "0")}h ${minutes
          .toString()
          .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`
      );
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, [rayaStart]);

  const stars = useMemo(() => {
    const count = isMobile ? 32 : 70;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${seeded(i + 4) * 100}%`,
      top: `${seeded(i + 10) * 75}%`,
      size: 1 + seeded(i + 18) * 2,
      delay: seeded(i + 24) * 6,
      duration: 2.5 + seeded(i + 35) * 4,
      opacity: 0.3 + seeded(i + 44) * 0.7,
    }));
  }, [isMobile]);

  const lanterns = useMemo(() => {
    const count = isMobile ? 2 : 5;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${10 + seeded(i + 88) * 80}%`,
      top: `${14 + seeded(i + 102) * 48}%`,
      delay: seeded(i + 120) * 2,
      duration: 4 + seeded(i + 140) * 3.5,
      scale: 0.78 + seeded(i + 164) * 0.5,
    }));
  }, [isMobile]);

  const ketupats = useMemo(() => {
    const count = isMobile ? 10 : 20;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${seeded(i + 210) * 100}%`,
      size: 10 + seeded(i + 240) * 18,
      duration: 9 + seeded(i + 270) * 14,
      delay: seeded(i + 300) * 10,
      drift: -60 + seeded(i + 330) * 120,
      opacity: 0.18 + seeded(i + 360) * 0.5,
      hue: seeded(i + 390) > 0.4 ? "#D4AF37" : "#2D6A4F",
    }));
  }, [isMobile]);

  const fireflies = useMemo(() => {
    const count = isMobile ? 8 : 16;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${seeded(i + 500) * 100}%`,
      top: `${12 + seeded(i + 540) * 78}%`,
      size: 2 + seeded(i + 580) * 3.5,
      duration: 8 + seeded(i + 620) * 12,
      delay: seeded(i + 660) * 6,
      xDrift: -140 + seeded(i + 700) * 280,
      yDrift: -50 + seeded(i + 740) * 100,
    }));
  }, [isMobile]);

  const spawnBurst = (x: number, y: number) => {
    const burstId = Date.now() + Math.floor(Math.random() * 1000);
    const particles: BurstParticle[] = Array.from({ length: 26 }, (_, i) => {
      const angle = (360 / 26) * i + seeded(i + burstId) * 16;
      return {
        id: i,
        angle,
        distance: 40 + seeded(i + burstId + 4) * 70,
        size: 4 + seeded(i + burstId + 8) * 5,
        duration: 560 + seeded(i + burstId + 12) * 420,
        delay: seeded(i + burstId + 16) * 120,
      };
    });

    const nextBurst: Burst = { id: burstId, x, y, particles };
    setBursts((prev) => [...prev, nextBurst]);

    window.setTimeout(() => {
      setBursts((prev) => prev.filter((burst) => burst.id !== burstId));
    }, 1200);
  };

  const showWishesToast = () => {
    setShowToast(true);
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    toastTimer.current = setTimeout(() => {
      setShowToast(false);
    }, 2100);
  };

  return (
    <section
      onClick={(event) => spawnBurst(event.clientX, event.clientY)}
      className={`${lato.className} relative min-h-screen overflow-hidden bg-[#08170f] text-[#FFF8E7]`}
      aria-label="Hari Raya Aidilfitri wishes page"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#1B4332_0%,#0c1d15_45%,#050806_100%)]" />

      <div className="pointer-events-none absolute inset-0">
        {stars.map((star) => (
          <span
            key={`star-${star.id}`}
            className="wishes-star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {fireflies.map((firefly) => (
          <span
            key={`firefly-${firefly.id}`}
            className="wishes-firefly"
            style={{
              left: firefly.left,
              top: firefly.top,
              width: `${firefly.size}px`,
              height: `${firefly.size}px`,
              animationDuration: `${firefly.duration}s`,
              animationDelay: `${firefly.delay}s`,
              ["--drift-x" as string]: `${firefly.xDrift}px`,
              ["--drift-y" as string]: `${firefly.yDrift}px`,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {ketupats.map((ketupat) => (
          <span
            key={`ketupat-${ketupat.id}`}
            className="wishes-ketupat"
            style={{
              left: ketupat.left,
              width: `${ketupat.size}px`,
              height: `${ketupat.size}px`,
              opacity: ketupat.opacity,
              backgroundColor: ketupat.hue,
              animationDuration: `${ketupat.duration}s`,
              animationDelay: `${ketupat.delay}s`,
              ["--drift" as string]: `${ketupat.drift}px`,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {lanterns.map((lantern) => (
          <div
            key={`lantern-${lantern.id}`}
            className="wishes-lantern"
            style={{
              left: lantern.left,
              top: lantern.top,
              ["--scale" as string]: lantern.scale,
              animationDelay: `${lantern.delay}s`,
              animationDuration: `${lantern.duration}s`,
            }}
          >
            <span className="wishes-lantern-string" />
            <span className="wishes-lantern-cap" />
            <span className="wishes-lantern-body" />
            <span className="wishes-lantern-flame" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-14 z-20 -translate-x-1/2 sm:top-16">
        <div className="wishes-crescent-wrap">
          <span className="wishes-crescent" />
          <span className="wishes-moon-cut" />
          <span className="wishes-star-icon" />
        </div>
      </div>

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6">
        <p className="mb-5 rounded-full border border-[#D4AF37]/45 bg-[#1B4332]/55 px-4 py-2 text-xs font-semibold tracking-wide text-[#FFF8E7] shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md sm:text-sm">
          {isRayaDay ? "Hari Raya is here! 🎉" : `Hari Raya starts in ${countdownText}`}
        </p>
        <article
          className="wishes-card wishes-card-entrance w-full max-w-3xl rounded-3xl border border-[#D4AF37]/40 p-6 text-center shadow-2xl backdrop-blur-xl sm:p-10"
        >
          <p className={`${amiri.className} text-4xl text-[#FFF8E7] sm:text-5xl`}>
            عيد مبارك
          </p>
          <h1
            className={`${playfair.className} mt-4 font-bold leading-tight text-[#FFF8E7]`}
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Selamat Hari Raya Aidilfitri
          </h1>
          <p className="mt-3 text-sm font-semibold tracking-wide text-[#D4AF37] sm:text-base">
            1 Syawal 1447H • 21 March 2026
          </p>

          <div className="mx-auto my-6 h-px w-4/5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="text-lg font-light tracking-wide text-[#FFF8E7]/95 sm:text-xl">
            Maaf Zahir &amp; Batin 🌙
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm text-[#FFF8E7]/80 sm:text-base">
            Wishing you peace, joy, and blessings this festive season
          </p>

          <button
            type="button"
            className="mt-8 rounded-full border border-[#D4AF37]/70 bg-[#D4AF37]/10 px-5 py-2.5 text-sm font-semibold text-[#FFF8E7] transition duration-300 hover:scale-105 hover:bg-[#D4AF37]/20 active:scale-100"
            onClick={showWishesToast}
          >
            Send Wishes ✨
          </button>
        </article>
      </div>

      <div className="pointer-events-none absolute inset-0 z-40">
        {bursts.map((burst) => (
          <div
            key={`burst-${burst.id}`}
            className="absolute"
            style={{ left: burst.x, top: burst.y }}
          >
            {burst.particles.map((particle) => (
              <span
                key={`burst-${burst.id}-particle-${particle.id}`}
                className="wishes-sparkle"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDuration: `${particle.duration}ms`,
                  animationDelay: `${particle.delay}ms`,
                  ["--angle" as string]: `${particle.angle}deg`,
                  ["--distance" as string]: `${particle.distance}px`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div
        className={`pointer-events-none fixed left-1/2 top-7 z-50 -translate-x-1/2 rounded-full border border-[#D4AF37]/55 bg-[#1B4332]/85 px-4 py-2 text-sm text-[#FFF8E7] shadow-[0_0_24px_rgba(212,175,55,0.35)] backdrop-blur-md transition-all duration-400 ${
          showToast ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        Selamat Hari Raya! 🌙✨
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[33vh] min-h-[180px]">
        <div className="wishes-ground" />
        <div className="wishes-minaret wishes-minaret-left" />
        <div className="wishes-minaret wishes-minaret-right" />
        <div className="wishes-mosque-main" />
        <div className="wishes-dome wishes-dome-center" />
        <div className="wishes-dome wishes-dome-left" />
        <div className="wishes-dome wishes-dome-right" />
      </div>

      <style jsx>{`
        .wishes-card {
          background: linear-gradient(
            135deg,
            rgba(255, 248, 231, 0.12),
            rgba(45, 106, 79, 0.12)
          );
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.2),
            0 20px 80px rgba(0, 0, 0, 0.45),
            0 0 35px rgba(212, 175, 55, 0.25);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .wishes-card:hover {
          transform: scale(1.02);
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.35),
            0 24px 90px rgba(0, 0, 0, 0.5), 0 0 46px rgba(212, 175, 55, 0.28);
        }

        .wishes-card-entrance {
          animation: cardEntrance 900ms ease-out both;
        }

        .wishes-star {
          position: absolute;
          border-radius: 999px;
          background: #fff8e7;
          box-shadow: 0 0 8px rgba(255, 248, 231, 0.85);
          animation: twinkle ease-in-out infinite alternate;
        }

        .wishes-firefly {
          position: absolute;
          border-radius: 999px;
          background: radial-gradient(circle, #fff8e7 0%, #d4af37 60%, transparent 100%);
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.7);
          animation: fireflyDrift linear infinite;
          opacity: 0.7;
        }

        .wishes-ketupat {
          position: absolute;
          top: -8%;
          transform: rotate(45deg);
          border: 1px solid rgba(255, 248, 231, 0.35);
          animation: ketupatFall linear infinite;
          filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.25));
        }

        .wishes-lantern {
          position: absolute;
          width: 42px;
          transform-origin: top center;
          animation-name: lanternFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .wishes-lantern-string {
          position: absolute;
          left: 50%;
          top: -30px;
          width: 2px;
          height: 30px;
          transform: translateX(-50%);
          background: rgba(255, 248, 231, 0.5);
        }

        .wishes-lantern-cap {
          position: absolute;
          top: 0;
          left: 50%;
          width: 24px;
          height: 8px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: #d4af37;
        }

        .wishes-lantern-body {
          position: absolute;
          top: 8px;
          left: 50%;
          width: 30px;
          height: 34px;
          transform: translateX(-50%);
          border-radius: 8px;
          background: linear-gradient(180deg, #f4c95d 0%, #e2832f 70%, #b35a1e 100%);
          box-shadow: 0 0 28px rgba(242, 157, 56, 0.6);
        }

        .wishes-lantern-flame {
          position: absolute;
          left: 50%;
          top: 18px;
          width: 8px;
          height: 12px;
          transform: translateX(-50%);
          border-radius: 8px 8px 8px 2px;
          background: radial-gradient(circle, #fff8e7 0%, #ffcc5f 45%, #ff922b 100%);
          animation: flameFlicker 1.4s ease-in-out infinite;
        }

        .wishes-crescent-wrap {
          position: relative;
          width: 88px;
          height: 68px;
          animation: moonPulse 3.8s ease-in-out infinite;
          filter: drop-shadow(0 0 24px rgba(212, 175, 55, 0.45));
        }

        .wishes-crescent {
          position: absolute;
          left: 22px;
          top: 8px;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #d4af37;
        }

        .wishes-moon-cut {
          position: absolute;
          left: 35px;
          top: 8px;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #0c1d15;
        }

        .wishes-star-icon {
          position: absolute;
          left: 63px;
          top: 17px;
          width: 12px;
          height: 12px;
          background: #fff8e7;
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          filter: drop-shadow(0 0 10px rgba(255, 248, 231, 0.9));
        }

        .wishes-sparkle {
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 999px;
          background: radial-gradient(circle, #fff8e7 0%, #d4af37 55%, #c18f1a 100%);
          animation: sparkleBurst ease-out forwards;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.8);
        }

        .wishes-ground {
          position: absolute;
          inset: auto 0 0;
          height: 38%;
          background: #070f0b;
        }

        .wishes-mosque-main {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: min(80vw, 560px);
          height: min(24vh, 180px);
          transform: translateX(-50%);
          background: #000;
          border-radius: 18px 18px 0 0;
        }

        .wishes-dome {
          position: absolute;
          bottom: calc(min(24vh, 180px) - 10px);
          background: #000;
          border-radius: 50% 50% 0 0;
        }

        .wishes-dome-center {
          left: 50%;
          width: min(26vw, 130px);
          height: min(16vh, 95px);
          transform: translateX(-50%);
        }

        .wishes-dome-left,
        .wishes-dome-right {
          width: min(18vw, 90px);
          height: min(12vh, 74px);
        }

        .wishes-dome-left {
          left: calc(50% - min(32vw, 210px));
        }

        .wishes-dome-right {
          left: calc(50% + min(14vw, 120px));
        }

        .wishes-minaret {
          position: absolute;
          bottom: 0;
          width: min(8vw, 44px);
          height: min(30vh, 210px);
          background: #000;
          border-radius: 12px 12px 0 0;
        }

        .wishes-minaret::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -22px;
          width: min(12vw, 56px);
          height: 26px;
          transform: translateX(-50%);
          background: #000;
          border-radius: 999px 999px 0 0;
        }

        .wishes-minaret-left {
          left: 12%;
        }

        .wishes-minaret-right {
          right: 12%;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        @keyframes moonPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes lanternFloat {
          0%,
          100% {
            transform: translateY(0) scale(var(--scale, 1));
          }
          50% {
            transform: translateY(-14px) scale(var(--scale, 1));
          }
        }

        @keyframes flameFlicker {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-50%) scale(1.18);
            opacity: 1;
          }
        }

        @keyframes ketupatFall {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(45deg);
          }
          100% {
            transform: translate3d(var(--drift), 120vh, 0) rotate(405deg);
          }
        }

        @keyframes fireflyDrift {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          15% {
            opacity: 0.95;
          }
          60% {
            opacity: 0.75;
          }
          100% {
            transform: translate3d(var(--drift-x), var(--drift-y), 0);
            opacity: 0;
          }
        }

        @keyframes sparkleBurst {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0)
              scale(0.6);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle))
              translateX(var(--distance)) scale(0.2);
            opacity: 0;
          }
        }

        @keyframes cardEntrance {
          0% {
            transform: translateY(28px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .wishes-minaret {
            height: 24vh;
          }

          .wishes-minaret-left {
            left: 6%;
          }

          .wishes-minaret-right {
            right: 6%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wishes-star,
          .wishes-firefly,
          .wishes-ketupat,
          .wishes-lantern,
          .wishes-lantern-flame,
          .wishes-crescent-wrap,
          .wishes-card-entrance,
          .wishes-sparkle {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}