
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
  Images,
  Play,
  Pause,
} from "lucide-react";

// ==========================================
// CONFIGURATION DES IMAGES SUPPLÉMENTAIRES
// ==========================================

const extraImages = {
  "aqua-life": [
    "aqua-life-re1.webp",
    "aqua-life-re2.webp",
    "aqua-life-re3.webp",
    "aqua-life.webp",
  ],

  assainissement: ["amenagement-assainissement.webp"],
  "genie-civil": ["genie-civil-btp.webp"],
  "forage-minier": ["forage-minier.webp"],
  "forage-eau": ["forage-eau-potable.webp"],
  logistique: ["logistique-transport.webp"],
  informatique: ["support-informatique.webp"],
  fournitures: ["fourniture-biens-services.webp"],
};

// Vitesse du défilement en pixels par seconde
const SCROLL_SPEED = 35;

export default function ServiceGallery({ service, language }) {
  const en = language === "en";

  const photos = [
    ...new Set(
      [
        service.image,
        service.detailImage,
        ...(extraImages[service.id] ?? []).map(
          (name) => `/images/realisations/${name}`
        ),
      ].filter(Boolean)
    ),
  ];

  // Références
  const track = useRef(null);
  const firstGroup = useRef(null);
  const dialog = useRef(null);
  const opener = useRef(null);

  // États
  const [index, setIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [canLoop, setCanLoop] = useState(false);

  // ==========================================
  // VÉRIFIER LA LARGEUR DE LA GALERIE
  // ==========================================

  useEffect(() => {
    const container = track.current;
    const group = firstGroup.current;

    if (!container || !group) return;

    function measure() {
      setCanLoop(
        photos.length > 1 &&
        group.scrollWidth > container.clientWidth
      );
    }

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(container);
    observer.observe(group);

    return () => observer.disconnect();
  }, [service.id, photos.length]);

  // ==========================================
  // RÉINITIALISER LA GALERIE
  // ==========================================

  useEffect(() => {
    if (track.current) {
      track.current.scrollLeft = 0;
    }

    if (dialog.current?.open) {
      dialog.current.close();
    }

    setIndex(null);
    setIsTouching(false);
  }, [service.id]);

  // ==========================================
  // DÉFILEMENT CONTINU ET FLUIDE
  // ==========================================

  useEffect(() => {
    if (
      !canLoop ||
      isHovered ||
      isFocused ||
      isPaused ||
      isTouching ||
      index !== null
    ) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    let animationFrame;
    let previousTime = null;
    let position = track.current?.scrollLeft ?? 0;

    function animate(currentTime) {
      const container = track.current;
      const group = firstGroup.current;

      if (!container || !group) return;

      if (previousTime === null) {
        previousTime = currentTime;
      }

      const deltaTime = Math.min(
        (currentTime - previousTime) / 1000,
        0.05
      );

      previousTime = currentTime;

      position += SCROLL_SPEED * deltaTime;

      // Retour invisible au début de la boucle
      const loopWidth = group.offsetWidth;

      if (loopWidth > 0 && position >= loopWidth) {
        position %= loopWidth;
      }

      container.scrollLeft = position;

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [
    canLoop,
    isHovered,
    isFocused,
    isPaused,
    isTouching,
    index,
    service.id,
  ]);

  // ==========================================
  // NAVIGATION MANUELLE
  // ==========================================

  function scroll(direction) {
    const container = track.current;

    if (!container) return;

    const firstPhoto =
      firstGroup.current?.firstElementChild;

    const distance =
      (firstPhoto?.offsetWidth ?? 224) + 12;

    setIsPaused(true);

    container.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  }

  // ==========================================
  // VISIONNEUSE PLEIN ÉCRAN
  // ==========================================

  function move(direction) {
    setIndex((current) =>
      current === null
        ? null
        : (current + direction + photos.length) %
          photos.length
    );
  }

  function open(i, event) {
    opener.current = event.currentTarget;

    setIndex(i);

    dialog.current?.showModal();
  }

  function close() {
    dialog.current?.close();
  }

  useEffect(() => {
    if (index === null) return;

    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [index === null]);

  function label(i) {
    return `${service.title} — Photo ${i + 1}`;
  }

  // ==========================================
  // STYLES DES BOUTONS
  // ==========================================

  const arrow =
    "flex h-9 w-9 shrink-0 items-center justify-center " +
    "rounded-full border border-white/20 bg-white/10 " +
    "text-white backdrop-blur-sm transition-all " +
    "duration-300 hover:border-[#B71932] " +
    "hover:bg-[#B71932] active:scale-95";

  if (!photos.length) return null;

  // ==========================================
  // AFFICHAGE D'UNE PHOTOGRAPHIE
  // ==========================================

  function renderPhoto(src, i, duplicate = false) {
    return (
      <button
        key={`${duplicate ? "copy" : "original"}-${src}`}
        type="button"
        tabIndex={duplicate ? -1 : 0}
        aria-hidden={duplicate ? true : undefined}
        onClick={(event) => open(i, event)}
        aria-label={`${
          en ? "Enlarge" : "Agrandir"
        } : ${label(i)}`}
        className="
          group relative h-32 w-44 shrink-0
          overflow-hidden rounded-xl
          border border-white/15 bg-white/5
          shadow-lg transition-colors duration-300
          hover:border-white/50
          sm:h-36 sm:w-56
        "
      >
        <Image
          src={src}
          alt={duplicate ? "" : label(i)}
          fill
          sizes="(max-width: 640px) 176px, 224px"
          className="
            object-cover transition-transform
            duration-700 ease-out
            group-hover:scale-110
            motion-reduce:transform-none
          "
        />

        {/* Dégradé sur la photographie */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/40 to-transparent
            opacity-0 transition-opacity
            duration-300 group-hover:opacity-100
          "
        />

        {/* Icône d'agrandissement */}
        <span
          className="
            absolute bottom-2 right-2
            flex h-8 w-8 items-center justify-center
            rounded-full border border-white/20
            bg-black/40 text-white backdrop-blur-sm
            transition-colors duration-300
            group-hover:bg-[#B71932]
          "
        >
          <Expand size={15} />
        </span>
      </button>
    );
  }

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          setIsFocused(false);
        }
      }}
      className="
        relative isolate min-w-0 overflow-hidden
        border-t border-white/10
        bg-gradient-to-br
        from-[#092D5A] via-[#08264B] to-[#061B36]
        px-4 py-6 sm:px-9
      "
    >
      {/* Lueur décorative discrète */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24
          -top-32 -z-10 h-72 w-72 rounded-full
          bg-blue-400/10 blur-[100px]
        "
      />

      {/* ======================================
          EN-TÊTE DE LA GALERIE
      ====================================== */}

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="mb-2 h-0.5 w-8 rounded-full bg-[#B71932]" />

          <h3 className="flex items-center gap-2 text-base font-extrabold text-white sm:text-lg">
            <Images
              size={20}
              className="text-[#FF9DA9]"
            />

            {en
              ? "Service gallery"
              : "Le service en images"}
          </h3>

          <p className="mt-1 text-xs text-white/50">
            {photos.length}{" "}
            {photos.length === 1 ? "photo" : "photos"}
          </p>
        </div>

        {/* Boutons de contrôle */}
        {canLoop && (
          <div className="flex gap-2">
            <button
              type="button"
              className={arrow}
              onClick={() =>
                setIsPaused((previous) => !previous)
              }
              aria-label={
                isPaused
                  ? en
                    ? "Resume slideshow"
                    : "Reprendre le défilement"
                  : en
                    ? "Pause slideshow"
                    : "Mettre en pause"
              }
            >
              {isPaused ? (
                <Play size={16} />
              ) : (
                <Pause size={16} />
              )}
            </button>

            <button
              type="button"
              className={arrow}
              onClick={() => scroll(-1)}
              aria-label={
                en
                  ? "Scroll left"
                  : "Défiler à gauche"
              }
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className={arrow}
              onClick={() => scroll(1)}
              aria-label={
                en
                  ? "Scroll right"
                  : "Défiler à droite"
              }
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* ======================================
          GALERIE À DÉFILEMENT CONTINU
      ====================================== */}

      <div className="relative min-w-0">
        <div
          ref={track}
          onTouchStart={() => setIsTouching(true)}
          onTouchEnd={() => setIsTouching(false)}
          onTouchCancel={() => setIsTouching(false)}
          className="
            flex min-w-0 overflow-x-auto pb-2
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* Groupe original */}
          <div
            ref={firstGroup}
            className="flex w-max shrink-0 gap-3 pr-3"
          >
            {photos.map((src, i) =>
              renderPhoto(src, i)
            )}
          </div>

          {/* Copie pour assurer la boucle infinie */}
          {canLoop && (
            <div className="flex w-max shrink-0 gap-3 pr-3">
              {photos.map((src, i) =>
                renderPhoto(src, i, true)
              )}
            </div>
          )}
        </div>

        {/* Fondu discret sur les extrémités */}
        {canLoop && (
          <>
            <div
              className="
                pointer-events-none absolute
                inset-y-0 left-0 w-5
                bg-gradient-to-r
                from-[#092D5A]/80 to-transparent
              "
            />

            <div
              className="
                pointer-events-none absolute
                inset-y-0 right-0 w-5
                bg-gradient-to-l
                from-[#061B36]/80 to-transparent
              "
            />
          </>
        )}
      </div>

      {/* Note informative */}
      <p className="mt-3 text-xs leading-5 text-white/60">
        {en
          ? "Illustrative photos — scroll or click to enlarge."
          : "Photos d’illustration — faites défiler ou cliquez pour agrandir."}
      </p>

      {/* ======================================
          VISIONNEUSE PLEIN ÉCRAN
      ====================================== */}

      <dialog
        ref={dialog}
        aria-label={
          en ? "Photo viewer" : "Visionneuse de photos"
        }
        onClose={() => {
          setIndex(null);
          opener.current?.focus();
        }}
        onKeyDown={(event) => {
          if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
          ) {
            event.preventDefault();

            move(
              event.key === "ArrowLeft" ? -1 : 1
            );
          }
        }}
        className="
          fixed inset-0 m-0 h-dvh max-h-none
          w-screen max-w-none bg-black/95
          p-0 text-white backdrop:bg-black/90
        "
      >
        {index !== null && photos[index] && (
          <div className="flex h-full flex-col">

            {/* Barre supérieure */}
            <div className="flex items-center justify-between gap-3 p-4 sm:p-6">
              <div>
                <p className="text-xs text-white/70">
                  {index + 1} / {photos.length}
                </p>

                <h3 className="mt-1 font-bold">
                  {service.title}
                </h3>
              </div>

              <button
                type="button"
                autoFocus
                onClick={close}
                aria-label={en ? "Close" : "Fermer"}
                className="
                  rounded-full bg-white/10 p-3
                  transition-colors
                  hover:bg-[#B71932]
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* Photographie agrandie */}
            <div className="relative min-h-0 flex-1">
              <Image
                key={photos[index]}
                src={photos[index]}
                alt={label(index)}
                fill
                sizes="100vw"
                className="object-contain"
              />

              <button
                type="button"
                onClick={() => move(-1)}
                aria-label={
                  en
                    ? "Previous photo"
                    : "Photo précédente"
                }
                className="
                  absolute left-3 top-1/2
                  -translate-y-1/2 rounded-full
                  bg-black/60 p-3 transition-colors
                  hover:bg-[#B71932]
                "
              >
                <ChevronLeft />
              </button>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label={
                  en
                    ? "Next photo"
                    : "Photo suivante"
                }
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2 rounded-full
                  bg-black/60 p-3 transition-colors
                  hover:bg-[#B71932]
                "
              >
                <ChevronRight />
              </button>
            </div>

            {/* Instructions */}
            <p className="p-4 text-center text-xs text-white/70">
              {en
                ? "Use arrow keys to navigate. Escape to close."
                : "Flèches du clavier pour naviguer. Échap pour fermer."}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
