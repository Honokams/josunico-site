"use client";

import useJosunicoMotion from "@/components/useJosunicoMotion";

import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Target,
  Eye,
  Gem,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function AboutContent() {
  const motionRef = useJosunicoMotion();
  const { t } = useLanguage();
  const about = t.about;
  return (
    <main ref={motionRef} className="bg-[#F5F7FA] text-[#102D50]">

        {/* ======================================
            1. HERO — MOBILE ET ORDINATEUR
            ====================================== */}

        <section
        aria-labelledby="about-hero-title"
        className="relative isolate overflow-hidden bg-[#092D5A] text-white"
        >
        {/* VERSION MOBILE */}
        <div className="relative min-h-[490px] overflow-hidden sm:min-h-[560px] lg:hidden">

            <Image
            src="/images/hero/josunico-about-mobile.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            />

            {/* TEXTES POSITIONNÉS DANS LA ZONE BLEUE */}
            <div className="relative z-10 mx-auto max-w-lg px-6 pt-12 sm:px-9 sm:pt-16">

            <p data-jos-enter="enter" className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">
                {about.discoverCompany}
            </p>

            <h1 data-jos-enter="enter" data-jos-delay="100"
                id="about-hero-title"
                className="max-w-[350px] text-[clamp(2rem,8vw,3rem)] font-extrabold leading-[1.12] tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]"
            >
                {about.aboutOf}
                <span className="mt-1 block text-white">
                JOSUNICO
                </span>
            </h1>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#B71932]" />

            <p data-jos-enter="enter" data-jos-delay="200" className="mt-5 max-w-[310px] text-[14px] font-medium leading-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-base">
                {about.heroDescription}
            </p>

            </div>
        </div>

        {/* VERSION ORDINATEUR — INCHANGÉE */}
        <div className="relative hidden min-h-[330px] items-center lg:flex">

            <Image
            src="/images/hero/josunico-about-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-14">

            <p data-jos-enter="enter" className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF9AA3]">
                {about.discoverCompany}
            </p>

            <h2 data-jos-enter="enter" data-jos-delay="100" className="max-w-3xl text-5xl font-bold leading-tight tracking-tight drop-shadow-md">
                {about.aboutOf} JOSUNICO
            </h2>

            <p data-jos-enter="enter" data-jos-delay="200" className="mt-4 max-w-xl text-base leading-7 text-white drop-shadow-md">
                {about.heroDescription}
            </p>

            </div>
        </div>
        </section>


      {/* ======================================
          2. QUI SOMMES-NOUS ?
          ====================================== */}

      <section
        className="px-6 py-10 sm:py-12 lg:px-8 lg:py-14"
        aria-labelledby="about-title"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* TEXTE */}
          <div data-jos-reveal="up">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B71932]">
              {about.identityLabel}
            </p>

            <h2
              id="about-title"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              {about.whoTitle}
            </h2>

            <div className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
              <p>
                <strong className="text-[#102D50]">
                  Jospie Universal Investments in Congo SARL
                  (JOSUNICO)
                </strong>{" "}
                {about.identityParagraph1}
              </p>

              <p>
                {about.identityParagraph2}
              </p>

              <p>
                {about.identityParagraph3}
              </p>
            </div>

            {/* SIÈGE SOCIAL */}
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5">
              <MapPin
                size={19}
                className="mt-0.5 shrink-0 text-[#B71932]"
              />

              <div>
                <p className="text-sm font-semibold">
                  {about.headOffice}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {about.address}
                </p>
              </div>
            </div>

            <Link
              href="/services"
              className="
                mt-5 inline-flex items-center gap-2
                text-sm font-bold text-[#B71932]
                transition hover:text-[#092D5A]
              "
            >
              {about.discoverServices}
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* IMAGE */}
          <div data-jos-reveal="up" data-jos-delay="120" className="relative pb-4">
            <div className="relative h-[280px] overflow-hidden rounded-xl shadow-lg sm:h-[360px] lg:h-[390px]">
              <Image
                src="/images/services/a-propos-chantier.webp"
                alt={about.constructionAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div
              className="
                absolute bottom-0 left-4 right-4
                rounded-lg bg-[#092D5A]
                px-4 py-3 text-white shadow-lg
                sm:left-auto sm:right-3
                sm:max-w-[250px]
              "
            >
              <p className="text-sm font-bold">
                {about.multisectorTitle}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-200">
                {about.multisectorDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          3. CE QUI NOUS ANIME
          ====================================== */}

      <section
        className="bg-white px-6 py-11 sm:py-12 lg:px-8 lg:py-14"
        aria-labelledby="purpose-title"
      >
        <div className="mx-auto max-w-7xl">

          {/* TITRE */}
          <div data-jos-reveal="up" className="mb-7 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B71932]">
              {about.purposeLabel}
            </p>

            <h2
              id="purpose-title"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              {about.purposeTitle}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {about.purposeDescription}
            </p>
          </div>

          {/* CARTES */}
          <div className="grid gap-4 lg:grid-cols-3">

            {/* MISSION */}
            <article data-jos-reveal="up"
              className="
                group rounded-xl border border-slate-200
                bg-[#F7F9FC] px-6 py-7
                text-center shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#B71932]/30
                hover:shadow-lg
              "
            >
              <div
                className="
                  mx-auto mb-5 flex h-[76px] w-[76px]
                  items-center justify-center
                  rounded-2xl bg-white
                  text-[#B71932] shadow-sm
                  transition-colors duration-300
                  group-hover:bg-[#B71932]
                  group-hover:text-white
                "
              >
                <Target size={40} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-bold text-[#102D50]">
                {about.missionTitle}
              </h3>

              <div className="mx-auto mt-3 h-[3px] w-9 rounded-full bg-[#B71932]" />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {about.missionDescription}
              </p>
            </article>

            {/* VISION */}
            <article data-jos-reveal="up" data-jos-delay="100"
              className="
                group rounded-xl border border-slate-200
                bg-[#F7F9FC] px-6 py-7
                text-center shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#B71932]/30
                hover:shadow-lg
              "
            >
              <div
                className="
                  mx-auto mb-5 flex h-[76px] w-[76px]
                  items-center justify-center
                  rounded-2xl bg-white
                  text-[#B71932] shadow-sm
                  transition-colors duration-300
                  group-hover:bg-[#B71932]
                  group-hover:text-white
                "
              >
                <Eye size={40} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-bold text-[#102D50]">
                {about.visionTitle}
              </h3>

              <div className="mx-auto mt-3 h-[3px] w-9 rounded-full bg-[#B71932]" />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {about.visionDescription}
              </p>
            </article>

            {/* VALEURS */}
            <article data-jos-reveal="up" data-jos-delay="200"
              className="
                group rounded-xl border border-slate-200
                bg-[#F7F9FC] px-6 py-7
                text-center shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#B71932]/30
                hover:shadow-lg
              "
            >
              <div
                className="
                  mx-auto mb-5 flex h-[76px] w-[76px]
                  items-center justify-center
                  rounded-2xl bg-white
                  text-[#B71932] shadow-sm
                  transition-colors duration-300
                  group-hover:bg-[#B71932]
                  group-hover:text-white
                "
              >
                <Gem size={40} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-bold text-[#102D50]">
                {about.valuesTitle}
              </h3>

              <div className="mx-auto mt-3 h-[3px] w-9 rounded-full bg-[#B71932]" />

              <ul className="mx-auto mt-4 max-w-[230px] space-y-2 text-left">
                {about.values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-[#B71932]"
                    />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </article>

          </div>
        </div>
      </section>

    </main>
  );
}
