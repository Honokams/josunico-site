
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

const values = [
  "Intégrité et transparence",
  "Professionnalisme",
  "Amélioration continue",
  "Respect mutuel",
  "Esprit d'équipe",
  "Satisfaction client",
];

export const metadata = {
  title: "À propos de JOSUNICO SARL",
  description:
    "Découvrez JOSUNICO SARL, entreprise congolaise multiservices basée à Lubumbashi, sa mission, ses valeurs et ses engagements.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F5F7FA] text-[#102D50]">

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

            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">
                Découvrir notre entreprise
            </p>

            <h1
                id="about-hero-title"
                className="max-w-[350px] text-[clamp(2rem,8vw,3rem)] font-extrabold leading-[1.12] tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]"
            >
                À propos de
                <span className="mt-1 block text-white">
                JOSUNICO
                </span>
            </h1>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#B71932]" />

            <p className="mt-5 max-w-[310px] text-[14px] font-medium leading-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-base">
                Une entreprise congolaise dynamique,
                émergente et innovante, au service
                de vos projets.
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

            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF9AA3]">
                Découvrir notre entreprise
            </p>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight drop-shadow-md">
                À propos de JOSUNICO
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-white drop-shadow-md">
                Une entreprise congolaise dynamique,
                émergente et innovante, au service de vos projets.
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
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B71932]">
              Notre identité
            </p>

            <h2
              id="about-title"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Qui sommes-nous ?
            </h2>

            <div className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
              <p>
                <strong className="text-[#102D50]">
                  Jospie Universal Investments in Congo SARL
                  (JOSUNICO)
                </strong>{" "}
                est une entreprise de droit congolais
                implantée à Lubumbashi, dans la province
                du Haut-Katanga, en République
                démocratique du Congo.
              </p>

              <p>
                Entreprise multiservices, JOSUNICO
                intervient notamment dans la construction
                générale, la consultance en génie civil,
                les études techniques, la fourniture
                d'équipements, l'informatique, le commerce
                général et diverses prestations de services.
              </p>

              <p>
                Jeune entreprise dynamique et innovante,
                JOSUNICO place le professionnalisme,
                l'éthique du travail et la satisfaction
                de ses clients au cœur de son approche.
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
                  Siège social
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  5, avenue Lumumba, quartier Lumumba,
                  entre les avenues Kimbangu et Mayenge,
                  Lubumbashi, Haut-Katanga, RDC.
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
              Découvrir nos services
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* IMAGE */}
          <div className="relative pb-4">
            <div className="relative h-[280px] overflow-hidden rounded-xl shadow-lg sm:h-[360px] lg:h-[390px]">
              <Image
                src="/images/services/a-propos-chantier.webp"
                alt="Illustration d'un chantier de génie civil"
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
                Une expertise multisectorielle
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-200">
                Des solutions adaptées aux besoins
                de chaque projet.
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
          <div className="mb-7 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B71932]">
              Ce qui nous anime
            </p>

            <h2
              id="purpose-title"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Notre mission, notre vision et nos valeurs
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Des principes qui orientent notre travail,
              nos relations et notre engagement envers
              les clients.
            </p>
          </div>

          {/* CARTES */}
          <div className="grid gap-4 lg:grid-cols-3">

            {/* MISSION */}
            <article
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
                Notre mission
              </h3>

              <div className="mx-auto mt-3 h-[3px] w-9 rounded-full bg-[#B71932]" />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Nous ambitionnons de devenir un acteur
                majeur, différent et compétitif dans
                le bâtiment, le génie civil,
                la fourniture d'équipements,
                l'informatique, le commerce général
                et les prestations multiservices.
              </p>
            </article>

            {/* VISION */}
            <article
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
                Notre vision
              </h3>

              <div className="mx-auto mt-3 h-[3px] w-9 rounded-full bg-[#B71932]" />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Construire une entreprise reconnue
                pour son professionnalisme, son
                innovation et sa capacité à proposer
                des solutions durables, adaptées
                aux besoins de ses clients.
              </p>
            </article>

            {/* VALEURS */}
            <article
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
                Nos valeurs
              </h3>

              <div className="mx-auto mt-3 h-[3px] w-9 rounded-full bg-[#B71932]" />

              <ul className="mx-auto mt-4 max-w-[230px] space-y-2 text-left">
                {values.map((value) => (
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
