
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/mobile-construction.png",
    alt: "Ingénieurs sur un chantier de construction",
  },
  {
    src: "/images/hero/mobile-genie-civil.png",
    alt: "Illustration du génie civil",
  },
  {
    src: "/images/hero/mobile-forage-eau.png",
    alt: "Illustration du forage d'eau potable",
  },
  {
    src: "/images/hero/mobile-logistique.png",
    alt: "Illustration du transport et de la logistique",
  },
  {
    src: "/images/hero/mobile-informatique.png",
    alt: "Illustration du support informatique",
  },
];

export default function DesktopHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const interval = window.setInterval(() => {
      setActive((previous) => (previous + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  return (
    <div
      className="absolute inset-0 hidden overflow-hidden lg:block"
      aria-label="Illustrations des activités de JOSUNICO"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* IMAGES AVEC FONDU PROGRESSIF */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`
            absolute inset-0
            transition-opacity duration-[1600ms] ease-in-out
            ${
              active === index
                ? "opacity-100"
                : "opacity-0"
            }
          `}
          aria-hidden="true"
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`
              object-cover object-center
              motion-safe:transition-transform
              motion-safe:duration-[7000ms]
              motion-safe:ease-linear
              ${
                active === index && !reducedMotion
                  ? "scale-[1.05]"
                  : "scale-100"
              }
            `}
          />
        </div>
      ))}

      {/* PROTECTION DU TEXTE :
          bleu plus dense à gauche,
          photographie visible à droite */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-r
          from-[#061D3C]/95
          via-[#061D3C]/85
          to-[#061D3C]/20
        "
      />

      {/* OMBRE DISCRÈTE EN BAS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          h-32 bg-gradient-to-t
          from-[#061D3C]/35 to-transparent
        "
      />

      {/* INDICATEURS DISCRETS */}
      <div className="absolute bottom-7 right-8 z-10 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Afficher l'image ${index + 1}`}
            aria-current={active === index ? "true" : undefined}
            onClick={() => setActive(index)}
            className={`
              h-1.5 rounded-full transition-all
              ${
                active === index
                  ? "w-8 bg-[#B71932]"
                  : "w-3 bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
