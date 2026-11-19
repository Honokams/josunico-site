
import MobileHeroCarousel from "../components/MobileHeroCarousel";
import DesktopHeroCarousel from "../components/DesktopHeroCarousel";

import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

import {
  Droplet,
  Leaf,
  Users,
  Building2,
  Pickaxe,
  Waves,
  Truck,
  Monitor,
  Package,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Target,
} from "lucide-react";

// Police distinctive pour les grands titres
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// ========================================
// LES 9 SERVICES DE JOSUNICO
// ========================================

const services = [
  {
    slug: "aqua-life",
    title: "Production d’eau minérale",
    subtitle: "Aqua-Life",
    Icon: Droplet,
    image: "/images/services/aqua-life.webp",
  },
  {
    slug: "assainissement",
    title: "Aménagement & assainissement",
    subtitle: "Environnement",
    Icon: Leaf,
    image: "/images/services/assainissement.webp",
  },
  {
    slug: "personnel",
    title: "Gestion du personnel",
    subtitle: "Ressources humaines",
    Icon: Users,
    image: "/images/services/personnel.webp",
  },
  {
    slug: "genie-civil",
    title: "Génie civil & BTP",
    subtitle: "Construction",
    Icon: Building2,
    image: "/images/services/genie-civil.webp",
  },
  {
    slug: "forage-minier",
    title: "Forage minier",
    subtitle: "Industrie minière",
    Icon: Pickaxe,
    image: "/images/services/forage-minier.webp",
  },
  {
    slug: "forage-eau",
    title: "Forage d’eau potable",
    subtitle: "Accès à l’eau",
    Icon: Waves,
    image: "/images/services/forage-eau.webp",
  },
  {
    slug: "logistique",
    title: "Logistique & transport",
    subtitle: "Solutions logistiques",
    Icon: Truck,
    image: "/images/services/logistique.webp",
  },
  {
    slug: "informatique",
    title: "Support informatique",
    subtitle: "Technologies & réseaux",
    Icon: Monitor,
    image: "/images/services/informatique.webp",
  },
  {
    slug: "fournitures",
    title: "Fourniture de biens & services",
    subtitle: "Approvisionnement",
    Icon: Package,
    image: "/images/services/fournitures.webp",
  },
];

// ========================================
// LES POINTS FORTS
// ========================================

const strengths = [
  {
    Icon: Award,
    title: "Expertise multisectorielle",
  },
  {
    Icon: Users,
    title: "Personnel qualifié",
  },
  {
    Icon: ShieldCheck,
    title: "Sécurité & rigueur",
  },
  {
    Icon: Target,
    title: "Engagement client",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F5F7FA] text-[#102D50]">

      {/* ========================================
          1. HERO
          ======================================== */}

      <section
        aria-labelledby="hero-title"
        className="
          relative isolate overflow-hidden
          bg-[#092D5A] text-white
          lg:flex lg:min-h-[570px] lg:items-center
        "
      >
        {/* Carrousel ordinateur */}
        <DesktopHeroCarousel />

        {/* Contenu principal */}
        <div
          className="
            relative z-10 mx-auto w-full max-w-7xl
            px-6 pb-9 pt-12
            sm:px-8 sm:pb-11 sm:pt-14
            lg:px-10 lg:py-16
          "
        >
          <div className="max-w-[650px]">

            
{/* LOGO OFFICIEL JOSUNICO */}
<h1
  id="hero-title"
  className="relative m-0 w-fit leading-none"
>
  <span className="sr-only">
    JOSUNICO SARL — Entreprise multiservices
  </span>

  <div
    className="
      relative flex items-center
      h-[65px] w-[210px]
      sm:h-[75px] sm:w-[250px]
      lg:h-[85px] lg:w-[290px]
    "
  >
    <Image
      src="/images/branding/josunico-logo-hero.png"
      alt=""
      fill
      priority
      sizes="(max-width: 640px) 210px, (max-width: 1024px) 250px, 290px"
      className="
        object-contain object-left
        drop-shadow-[0_2px_6px_rgba(255,255,255,0.25)]
      "
    />
  </div>
</h1>

{/* SLOGAN */}
<h2
  className={`
    ${spaceGrotesk.className}
    mt-5 max-w-[610px]
    text-[clamp(1.65rem,5.5vw,2.5rem)]
    font-semibold leading-[1.18]
    tracking-[-0.035em]
    text-white
    drop-shadow-[0_3px_10px_rgba(0,0,0,0.75)]
    lg:mt-6 lg:text-[42px]
  `}
>
  Bâtir, Accompagner
  <br className="hidden sm:block" />
  {" "}et Innover.
</h2>


            {/* Description */}
            <p
              className="
                mt-4 max-w-[500px]
                text-sm font-medium
                leading-7 text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                sm:text-base
                lg:text-[16px]
              "
            >
              Une entreprise congolaise multiservices,
              engagée dans la construction, l’industrie
              et les solutions qui accompagnent vos projets.
            </p>

            {/* Boutons */}
            <div
              className="
                mt-6 flex flex-col gap-3
                sm:flex-row sm:flex-wrap
                lg:mt-7
              "
            >
              <Link
                href="/services"
                className="
                  inline-flex min-h-12
                  items-center justify-center gap-2
                  rounded-lg bg-[#B71932]
                  px-6 py-3
                  text-sm font-bold text-white
                  shadow-lg transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#96152A]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                Explorer nos services
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex min-h-12
                  items-center justify-center gap-2
                  rounded-lg border border-white
                  bg-white px-6 py-3
                  text-sm font-bold text-[#092D5A]
                  shadow-sm transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-slate-100
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                Demander un devis
                <ArrowUpRight size={17} />
              </Link>
            </div>

          </div>
        </div>

        {/* Carrousel mobile et tablette */}
        <div className="lg:hidden">
          <MobileHeroCarousel />
        </div>
      </section>

      {/* ========================================
          2. NOS DOMAINES D'EXPERTISE
          ======================================== */}

      <section
        className="
          mx-auto max-w-7xl
          px-6 py-10
          sm:py-12
          lg:px-8 lg:py-14
        "
        aria-labelledby="services-title"
      >
        {/* En-tête */}
        <div
          className="
            mb-7 flex flex-col justify-between gap-4
            md:flex-row md:items-end
          "
        >
          <div className="max-w-3xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B71932]">
              Nos domaines d'expertise
            </p>

            <h2
              id="services-title"
              className={`
                ${spaceGrotesk.className}
                text-2xl font-bold leading-tight
                tracking-tight
                sm:text-3xl lg:text-[38px]
              `}
            >
              Des compétences multiples.
              <br />
              <span className="text-[#B71932]">
                Un même engagement.
              </span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-slate-600">
            Découvrez les neuf domaines d'intervention
            de JOSUNICO et sélectionnez celui qui
            correspond à votre besoin.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(
            ({ slug, title, subtitle, Icon, image }) => (
              <Link
                key={slug}
                href={`/services?service=${slug}`}
                className="
                  group flex min-h-[142px]
                  overflow-hidden rounded-xl
                  border border-slate-200
                  bg-white shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#B71932]/30
                  hover:shadow-lg
                "
              >
                {/* Photo à gauche */}
                <div className="relative w-[42%] shrink-0 overflow-hidden bg-slate-200">
                  <div
                    className="
                      absolute inset-0
                      bg-cover bg-center
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  />

                  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#B71932]" />
                </div>

                {/* Contenu à droite */}
                <div className="flex min-w-0 flex-1 flex-col justify-between p-3.5 sm:p-4">
                  <div>
                    <div
                      className="
                        mb-2 flex h-9 w-9
                        items-center justify-center
                        rounded-lg bg-[#EAF2FB]
                        text-[#1267AC]
                        transition-colors duration-300
                        group-hover:bg-[#B71932]
                        group-hover:text-white
                      "
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <p className="mb-1 text-[11px] font-medium text-slate-500">
                      {subtitle}
                    </p>

                    <h3 className="text-sm font-semibold leading-snug text-[#102D50] sm:text-[15px]">
                      {title}
                    </h3>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#B71932]">
                      En savoir plus
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        text-[#B71932]
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </div>
              </Link>
            )
          )}
        </div>

        {/* Note sur les photographies */}
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Photographies d'illustration provisoires :
          elles ne représentent pas nécessairement
          les équipements ou réalisations de JOSUNICO.
        </p>
      </section>

      {/* ========================================
          3. POURQUOI CHOISIR JOSUNICO ?
          ======================================== */}

      <section
        className="bg-white px-6 py-9 sm:py-10 lg:px-8"
        aria-labelledby="why-title"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B71932]">
                Notre approche
              </p>

              <h2
                id="why-title"
                className={`
                  ${spaceGrotesk.className}
                  text-2xl font-bold tracking-tight
                  text-[#102D50] sm:text-3xl
                `}
              >
                Pourquoi choisir JOSUNICO ?
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Quatre engagements essentiels pour accompagner vos projets.
            </p>
          </div>

          {/* Cartes compactes */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ Icon, title }) => (
              <article
                key={title}
                className="
                  group flex min-h-[76px]
                  items-center gap-3
                  rounded-lg border border-slate-200
                  bg-[#F7F9FC] px-4 py-3
                  transition-all duration-300
                  hover:border-[#B71932]/30
                  hover:bg-white hover:shadow-md
                "
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-lg bg-white
                    text-[#B71932] shadow-sm
                  "
                >
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="text-sm font-semibold leading-snug text-[#102D50]">
                  {title}
                </h3>
              </article>
            ))}
          </div>

          {/* Lien vers la page À propos */}
          <div className="mt-5">
            <Link
              href="/a-propos"
              className="
                inline-flex items-center gap-2
                text-sm font-semibold text-[#B71932]
                transition hover:text-[#092D5A]
              "
            >
              En savoir plus sur JOSUNICO
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
