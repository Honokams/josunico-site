
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
  const [reducedMotion, setReducedMotion] = useState(false);

  // Vérifier les préférences d'accessibilité
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);

    update();

    media.addEventListener?.("change", update);

    return () => {
      media.removeEventListener?.("change", update);
    };
  }, []);

  // Défilement automatique
  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div
      className="
        pointer-events-none absolute inset-0
        hidden overflow-hidden lg:block
      "
      aria-label="Illustrations des activités de JOSUNICO"
    >
      {/* IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden="true"
          className={`
            absolute inset-0
            transition-opacity duration-[1400ms] ease-in-out
            ${
              active === index
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="
              object-cover object-center
            "
          />
        </div>
      ))}

      {/* DÉGRADÉ BLEU LÉGER */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#092D5A]/70
          via-[#092D5A]/35
          to-transparent
        "
      />

      {/* INDICATEURS */}
      <div
        className="
          pointer-events-auto absolute
          bottom-6 right-8 z-20
          flex items-center gap-2
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Afficher l'image ${index + 1}`}
            aria-current={active === index ? "true" : undefined}
            className={`
              h-2 rounded-full
              transition-all duration-300
              ${
                active === index
                  ? "w-8 bg-[#B71932]"
                  : "w-3 bg-white/70 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
