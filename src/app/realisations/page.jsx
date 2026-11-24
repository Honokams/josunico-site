
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  X,
} from "lucide-react";

const categories = [
  "Tous",
  "Génie civil & BTP",
  "Forage",
  "Industrie",
  "Aménagement",
  "Logistique",
  "Autres",
];

// Photographies temporaires déjà disponibles dans le projet.
const gallery = [
  {
    id: 1,
    title: "Construction et génie civil",
    category: "Génie civil & BTP",
    image: "/images/services/genie-civil.webp",
    shape: "large",
  },
  {
    id: 2,
    title: "Travaux de forage minier",
    category: "Forage",
    image: "/images/services/forage-minier.webp",
    shape: "normal",
  },
  {
    id: 3,
    title: "Aménagement et assainissement",
    category: "Aménagement",
    image: "/images/services/assainissement.webp",
    shape: "tall",
  },
  {
    id: 4,
    title: "Production d'eau Aqua-Life",
    category: "Industrie",
    image: "/images/realisations/aqua-life.webp",
    shape: "normal",
  },
  {
    id: 5,
    title: "Logistique et transport",
    category: "Logistique",
    image: "/images/services/logistique.webp",
    shape: "wide",
  },
  {
    id: 6,
    title: "Forage d'eau potable",
    category: "Forage",
    image: "/images/services/forage-eau.webp",
    shape: "normal",
  },
  {
    id: 7,
    title: "Fournitures et équipements",
    category: "Autres",
    image: "/images/services/fournitures.webp",
    shape: "normal",
  },
  {
    id: 8,
    title: "Support et maintenance informatique",
    category: "Autres",
    image: "/images/services/informatique.webp",
    shape: "normal",
  },
  {
    id: 9,
    title: "Gestion du personnel",
    category: "Autres",
    image: "/images/services/personnel.webp",
    shape: "wide",
  },
  {
    id: 10,
    title: "Production d'eau Aqua-Life",
    category: "Industrie",
    image: "/images/realisations/aqua-life-re2.webp",
    shape: "tall",
  },
  {
    id: 11,
    title: "Production d'eau Aqua-Life",
    category: "Industrie",
    image: "/images/realisations/aqua-life-re3.webp",
    shape: "tall",
  },
];

const shapes = {
  large: "md:col-span-2 md:row-span-2",
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  normal: "",
};
// Images du carrousel du Hero
const heroSlides = [
  {
    id: 1,
    image: "/images/realisations/amenagement-assainissement.webp",
    alt: "Amenagement et assainissement",
  },
  {
    id: 2,
    image: "/images/realisations/aqua-life.webp",
    alt: "Production d'eau minerale",
  },
  {
    id: 3,
    image: "/images/realisations/forage-eau-potable.webp",
    alt: "forage d'eau potable",
  },
  {
    id: 4,
    image: "/images/realisations/logistique-transport.webp",
    alt: "Logistique et transport",
  },
  {
    id: 5,
    image: "/images/realisations/fourniture-biens-services.webp",
    alt: "Fourniture de biens et services",
  },
  {
    id: 6,
    image: "/images/realisations/genie-civil-btp.webp",
    alt: "Genie civil & btp",
  },
  {
    id: 7,
    image: "/images/realisations/support-informatique.webp",
    alt: "Support informatique",
  },
  {
    id: 8,
    image: "/images/realisations/forage-minier.webp",
    alt: "Forage minier",
  },
];

export default function RealisationsPage() {
  const { t } = useLanguage();
  const tr = t.realisations;
  const translatedGallery = gallery.map((item) => ({
    ...item,
    title: tr.gallery[item.id],
  }));
  const categoryLabel = (category) => tr.categories[category] ?? category;

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setActiveHeroSlide((current) =>
        (current + 1) % heroSlides.length
        );
    }, 6000);

    return () => clearInterval(interval);
    }, []);
  const filtered =
    activeCategory === "Tous"
      ? translatedGallery
      : translatedGallery.filter((item) => item.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, 6);
  const selected = selectedIndex === null ? null : filtered[selectedIndex];

  function changeCategory(category) {
    setActiveCategory(category);
    setShowAll(false);
    setSelectedIndex(null);
  }

  function navigate(direction) {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + filtered.length) % filtered.length;
    });
  }

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          (current + 1) % filtered.length
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          (current - 1 + filtered.length) % filtered.length
        );
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, filtered.length]);

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      
    {/* HERO CARROUSEL */}
    <section className="relative isolate overflow-hidden bg-[#092D5A] text-white">

    {/* IMAGES DU CARROUSEL */}
    <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
        <div
            key={slide.id}
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            activeHeroSlide === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
        >
            <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-transform duration-[7000ms] ease-linear motion-reduce:transform-none ${
                activeHeroSlide === index
                ? "scale-[1.06]"
                : "scale-100"
            }`}
            />
        </div>
        ))}

        {/* OVERLAY BLEU POUR LA LISIBILITÉ */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#092D5A]/95 via-[#092D5A]/80 to-[#092D5A]/30" />
    </div>

    {/* CONTENU FIXE DU HERO */}
    <div className="relative z-30 mx-auto flex min-h-[230px] max-w-7xl items-center px-5 py-12 sm:px-8 lg:min-h-[280px]">

        <div className="max-w-2xl">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FFB4BC]">
            {tr.heroEyebrow}
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {tr.heroTitle}
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
            {tr.heroDescription}
        </p>

        </div>
    </div>

    {/* INDICATEURS DU CARROUSEL */}
    <div className="absolute bottom-4 right-5 z-30 flex items-center gap-2 sm:right-8">

        {heroSlides.map((slide, index) => (
        <button
            key={slide.id}
            type="button"
            onClick={() => setActiveHeroSlide(index)}
            aria-label={`${tr.showImage} ${index + 1}`}
            aria-current={activeHeroSlide === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-500 ${
            activeHeroSlide === index
                ? "w-8 bg-[#B71932]"
                : "w-3 bg-white/60 hover:bg-white"
            }`}
        />
        ))}

    </div>

    {/* LIGNE ROUGE DÉCORATIVE */}
    <div className="absolute bottom-0 left-0 z-30 h-1 w-28 bg-[#B71932]" />

    </section>


      {/* GALERIE */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-6 w-1.5 -skew-x-12 bg-[#B71932]" />
              <span className="h-6 w-1.5 -skew-x-12 bg-[#B71932]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B71932]">
                {tr.galleryEyebrow}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#092D5A] sm:text-3xl">
              {tr.galleryTitle}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              {tr.galleryDescription}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <Images size={18} className="text-[#B71932]" />
            {filtered.length} {filtered.length > 1 ? tr.photosPlural : tr.photoSingular}
          </div>
        </div>

        {/* FILTRES */}
        <div className="mb-7 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                activeCategory === category
                  ? "border-[#B71932] bg-[#B71932] text-white shadow-sm"
                  : "border-slate-200 bg-white text-[#092D5A] hover:border-[#B71932] hover:text-[#B71932]"
              }`}
            >
              {categoryLabel(category)}
            </button>
          ))}
        </div>

        {/* MOSAÏQUE PHOTOGRAPHIQUE */}
        <div className="grid auto-rows-[175px] grid-cols-2 gap-3 sm:auto-rows-[205px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[220px]">

          {visible.map((item, index) => {
            const isLargeLayout = activeCategory === "Tous";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`${tr.enlarge}: ${item.title}`}
                className={`group relative isolate overflow-hidden rounded-xl bg-slate-200 text-left shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B71932] sm:rounded-2xl ${
                  isLargeLayout
                    ? shapes[item.shape]
                    : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dégradé inférieur */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B36]/90 via-[#061B36]/10 to-transparent" />

                {/* Informations */}
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
                  <span className="mb-2 inline-block rounded-full bg-[#B71932] px-2.5 py-1 text-[10px] font-bold sm:text-xs">
                    {categoryLabel(item.category)}
                  </span>

                  <div className="flex items-end justify-between gap-2">
                    <h3 className="text-sm font-extrabold leading-snug sm:text-lg">
                      {item.title}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-sm transition-colors group-hover:bg-[#B71932]">
                      <Expand size={17} />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* AFFICHER PLUS */}
        {!showAll && filtered.length > 6 && (
          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#092D5A] bg-white px-7 py-3 text-sm font-bold text-[#092D5A] transition-colors hover:bg-[#092D5A] hover:text-white"
            >
              {tr.showAll}
              <ArrowRight size={17} />
            </button>
          </div>
        )}

        {/* INDICATION TEMPORAIRE */}
        <p className="mt-7 text-center text-xs text-slate-500">
          {tr.galleryNotice}
        </p>
      </section>


      {/* APPEL À L'ACTION */}
      <section className="bg-[#092D5A] px-5 py-11 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              {tr.ctaTitle}
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">
              {tr.ctaDescription}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#B71932] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#99142A]"
          >
            {tr.contactUs}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* VISIONNEUSE PLEIN ÉCRAN */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 text-white"
          role="dialog"
          aria-modal="true"
          aria-label={`${tr.photoSingular}: ${selected.title}`}
        >
          {/* BARRE SUPÉRIEURE */}
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-7">
            <div className="min-w-0">
              <p className="text-xs text-white/60">
                {selectedIndex + 1} / {filtered.length}
              </p>
              <h3 className="truncate text-sm font-bold sm:text-base">
                {selected.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label={tr.closeViewer}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#B71932]"
            >
              <X size={22} />
            </button>
          </div>

          {/* IMAGE ENTIÈRE */}
          <div className="relative min-h-0 flex-1">
            <Image
              key={selected.id}
              src={selected.image}
              alt={selected.title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />

            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label={tr.previousPhoto}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-[#B71932] sm:left-6"
            >
              <ChevronLeft size={25} />
            </button>

            <button
              type="button"
              onClick={() => navigate(1)}
              aria-label={tr.nextPhoto}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-[#B71932] sm:right-6"
            >
              <ChevronRight size={25} />
            </button>
          </div>

          {/* BARRE INFÉRIEURE */}
          <div className="px-5 py-4 text-center">
            <p className="text-sm font-semibold">{categoryLabel(selected.category)}</p>
            <p className="mt-1 text-xs text-white/50">
              {tr.keyboardHint}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
