
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

// Images et identifiants techniques inchangés
const slides = [
  {
    image: "/images/hero/mobile-genie-civil.webp",
    slug: "genie-civil",
  },
  {
    image: "/images/hero/mobile-forage-eau.webp",
    slug: "forage-eau",
  },
  {
    image: "/images/hero/mobile-logistique.webp",
    slug: "logistique",
  },
  {
    image: "/images/hero/mobile-construction.webp",
    slug: "genie-civil",
  },
  {
    image: "/images/hero/mobile-informatique.webp",
    slug: "informatique",
  },
];

export default function MobileHeroCarousel() {
  const { t } = useLanguage();
  const carousel = t.home?.mobileCarousel;

  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const touchStart = useRef(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReducedMotion(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing || reducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [playing, reducedMotion]);

  const previous = () => {
    setActive((current) =>
      (current - 1 + slides.length) % slides.length
    );
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const slide = slides[active];
  const slideText = carousel?.slides?.[active] ?? {
  title: "",
  subtitle: "",
};

  return (
    <div
      className="relative overflow-hidden bg-[#061D3C]"
      role="region"
      aria-roledescription="carrousel"
      aria-label={carousel.ariaLabel}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;

        const difference =
          touchStart.current -
          event.changedTouches[0].clientX;

        if (Math.abs(difference) > 45) {
          if (difference > 0) next();
          else previous();
        }

        touchStart.current = null;
      }}
    >
      {/* PHOTOGRAPHIES ET INFORMATIONS */}
      <div className="relative">

        {/* IMAGE */}
        <div className="relative h-[220px] overflow-hidden sm:h-[310px]">
          {slides.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                active === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={active !== index}
            >
              <Image
                src={item.image}
                alt={`${carousel.illustration} : ${carousel.slides[index].title}`}
                fill
                sizes="(max-width: 1023px) 100vw, 1px"
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}

          {/* OMBRE DISCRÈTE */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#061D3C]/50 to-transparent" />

          {/* FLÈCHE PRÉCÉDENTE */}
          <button
            type="button"
            onClick={previous}
            aria-label={carousel.previous}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#061D3C]/70 text-white shadow-lg backdrop-blur-sm transition hover:bg-[#061D3C]"
          >
            <ChevronLeft size={21} />
          </button>

          {/* FLÈCHE SUIVANTE */}
          <button
            type="button"
            onClick={next}
            aria-label={carousel.next}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#061D3C]/70 text-white shadow-lg backdrop-blur-sm transition hover:bg-[#061D3C]"
          >
            <ChevronRight size={21} />
          </button>
        </div>

        {/* BLOC TEXTE */}
        <div className="relative min-h-[205px] bg-[#061D3C] px-6 pb-14 pt-5 text-white sm:min-h-[190px]">

          <div className="mb-3 h-[3px] w-10 rounded-full bg-[#E42C42]" />

          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF8995]">
            {carousel.expertise}
          </p>

          <h3
            key={`${slide.slug}-${active}`}
            className="text-[22px] font-bold leading-tight tracking-tight text-white sm:text-2xl"
          >
            {slideText.title}
          </h3>

          <p className="mt-2 max-w-[350px] text-[13px] leading-6 text-[#E7EDF6] sm:text-sm">
            {slideText.subtitle}
          </p>

          <Link
            href={`/services?service=${slide.slug}`}
            className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-white underline decoration-[#FF6575] underline-offset-4 transition hover:text-[#FF8995]"
          >
            {carousel.discover}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* INDICATEURS ET PAUSE */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {slides.map((item, index) => (
          <button
            key={`${item.slug}-${index}`}
            type="button"
            aria-label={`${carousel.show} ${carousel.slides[index].title}`}
            aria-current={active === index ? "true" : undefined}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              active === index
                ? "w-7 bg-[#FF6575]"
                : "w-2 bg-white/65"
            }`}
          />
        ))}

        <button
          type="button"
          onClick={() => setPlaying((value) => !value)}
          aria-label={
            playing ? carousel.pause : carousel.play
          }
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>
    </div>
  );
}
