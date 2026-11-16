import MobileHeroCarousel from "../components/MobileHeroCarousel";
import Link from "next/link";
import Image from "next/image";

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
// LES POINTS FORTS DE JOSUNICO
// ========================================

const strengths = [
  {
    Icon: Award,
    title: "Expertise multisectorielle",
    description:
      "Un interlocuteur pour des besoins variés, de la conception aux prestations de terrain.",
  },
  {
    Icon: Users,
    title: "Personnel qualifié",
    description:
      "Une approche fondée sur le savoir-faire, la collaboration et la formation continue.",
  },
  {
    Icon: ShieldCheck,
    title: "Sécurité & rigueur",
    description:
      "Une attention portée à l’hygiène, à la sécurité et à la qualité des interventions.",
  },
  {
    Icon: Target,
    title: "Engagement client",
    description:
      "Des solutions adaptées aux besoins et aux exigences de chaque projet.",
  },
];

// ========================================
// PAGE D'ACCUEIL
// ========================================

export default function Home() {
  return (
    <main className="bg-[#F5F7FA] text-[#102D50]">

      
{/* ==========================================
    1. HERO JOSUNICO - DESKTOP & MOBILE
    ========================================== */}

<section
  aria-labelledby="hero-title"
  className="
    relative isolate overflow-hidden
    bg-[#092D5A] text-white
    lg:flex lg:min-h-[680px] lg:items-center
  "
>
  {/* IMAGE DE FOND : ORDINATEUR UNIQUEMENT */}
  <div className="absolute inset-0 hidden lg:block">
    <Image
      src="/images/hero/josunico-hero.png"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  </div>

  {/* PROTECTION DISCRÈTE DU TEXTE SUR ORDINATEUR */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none absolute inset-y-0 left-0
      hidden w-[62%] lg:block
      bg-gradient-to-r
      from-[#061D3C]/75
      via-[#061D3C]/35
      to-transparent
    "
  />

  {/* CONTENU PRINCIPAL */}
  <div
    className="
      relative z-10 mx-auto w-full max-w-7xl
      px-6 pt-16 pb-12
      sm:px-8 sm:pt-20
      lg:px-10 lg:py-28
    "
  >
    <div className="max-w-[610px]">

      {/* PETITE LIGNE D'IDENTITÉ */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-[2px] w-9 bg-[#FF6676]" />

        <p
          className="
            text-[10px] font-bold uppercase
            tracking-[0.19em] text-white/85
            sm:text-xs
          "
        >
          Entreprise multiservices · RDC
        </p>
      </div>

      {/* NOM DE L'ENTREPRISE */}
      <h1
        id="hero-title"
        className="
          text-[clamp(2.8rem,9vw,4.5rem)]
          font-extrabold leading-[1.05]
          tracking-[-0.045em]
          text-[#FF6575]
          drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]
          lg:text-[76px]
        "
      >
        JOSUNICO
      </h1>

      {/* SLOGAN */}
      <h2
        className="
          mt-5 max-w-[580px]
          text-[clamp(1.45rem,5.5vw,2.25rem)]
          font-semibold leading-[1.25]
          tracking-[-0.025em]
          text-white
          drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
          lg:text-[38px]
        "
      >
        Bâtir, Accompagner
        <br className="hidden sm:block" />
        {" "}et Innover.
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-6 max-w-[490px]
          text-[15px] font-medium
          leading-[1.85] text-[#EAF1FA]
          drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
          sm:text-base
          lg:text-[17px]
        "
      >
        Une entreprise congolaise multiservices,
        engagée dans la construction, l’industrie
        et les solutions qui accompagnent vos projets.
      </p>

      {/* BOUTONS */}
      <div
        className="
          mt-8 flex flex-col gap-3
          sm:flex-row sm:flex-wrap
          lg:mt-10
        "
      >
        <Link
          href="/services"
          className="
            inline-flex min-h-[52px]
            items-center justify-center gap-3
            rounded-lg bg-[#B71932]
            px-7 py-3.5
            text-sm font-bold text-white
            shadow-[0_8px_24px_rgba(0,0,0,0.2)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-[#96152A]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-white
          "
        >
          Explorer nos services
          <ArrowRight size={18} />
        </Link>

        <Link
          href="/contact"
          className="
            inline-flex min-h-[52px]
            items-center justify-center gap-3
            rounded-lg border border-white
            bg-white px-7 py-3.5
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
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  </div>

  {/* CARROUSEL MOBILE ET TABLETTE */}
  <div className="lg:hidden">
    <MobileHeroCarousel />
  </div>
</section>


      
{/* ========================================
    2. NOS DOMAINES D'EXPERTISE
    ======================================== */}

<section
  className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
  aria-labelledby="services-title"
>
  {/* TITRE DE LA SECTION */}
  <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B71932]">
        Nos domaines d'expertise
      </p>

      <h2
        id="services-title"
        className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
      >
        Des compétences multiples.
        <br />
        <span className="text-[#B71932]">
          Un même engagement.
        </span>
      </h2>
    </div>

    <p className="max-w-xs text-sm leading-7 text-slate-600">
      Découvrez les neuf domaines d'intervention
      de JOSUNICO et sélectionnez celui qui
      correspond à votre besoin.
    </p>
  </div>

  {/* GRILLE DES SERVICES */}
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

    {services.map(
      ({ slug, title, subtitle, Icon, image }) => (

        <Link
          key={slug}
          href={`/services?service=${slug}`}
          className="
            group flex min-h-[160px]
            overflow-hidden rounded-xl
            border border-slate-200
            bg-white shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#B71932]/30
            hover:shadow-xl
          "
        >

          {/* PHOTO À GAUCHE */}
          <div className="relative w-[42%] shrink-0 overflow-hidden bg-slate-200">

            <div
              className="
                absolute inset-0
                bg-cover bg-center
                transition-transform duration-500
                group-hover:scale-110
              "
              style={{
                backgroundImage: `url('${image}')`,
              }}
            />

            {/* Trait rouge décoratif */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#B71932]" />
          </div>

          {/* TEXTE À DROITE */}
          <div className="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-5">

            <div>
              {/* Icône */}
              <div
                className="
                  mb-3 flex h-9 w-9
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

              {/* Sous-titre */}
              <p className="mb-1 text-[11px] font-medium text-slate-500">
                {subtitle}
              </p>

              {/* Nom du service */}
              <h3 className="text-sm font-semibold leading-snug text-[#102D50] sm:text-base">
                {title}
              </h3>
            </div>

            {/* Lien visuel */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#B71932]">
                En savoir plus
              </span>

              <ArrowUpRight
                size={18}
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

  {/* NOTE SUR LES PHOTOGRAPHIES */}
  <p className="mt-6 text-xs leading-6 text-slate-500">
    Photographies d'illustration provisoires :
    elles ne représentent pas nécessairement
    les équipements ou réalisations de JOSUNICO.
  </p>

</section>


      {/* ========================================
          3. POURQUOI CHOISIR JOSUNICO ?
          ======================================== */}

      <section
        className="bg-white px-6 py-20 lg:px-8 lg:py-24"
        aria-labelledby="why-title"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-11 max-w-2xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B71932]">
              Notre approche
            </p>

            <h2
              id="why-title"
              className="text-3xl font-bold sm:text-4xl"
            >
              Pourquoi choisir JOSUNICO ?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Des valeurs qui guident notre manière
              de travailler et d’accompagner nos clients.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {strengths.map(({ Icon, title, description }) => (

              <article
                key={title}
                className="
                  rounded-xl border border-slate-200
                  bg-[#F7F9FC] p-7
                  transition-all duration-300
                  hover:border-[#B71932]/30
                  hover:shadow-md
                "
              >

                <div
                  className="
                    mb-6 flex h-12 w-12
                    items-center justify-center
                    rounded-lg bg-white
                    text-[#B71932] shadow-sm
                  "
                >
                  <Icon size={25} />
                </div>

                <h3 className="mb-3 text-lg font-semibold">
                  {title}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {description}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================
          4. APPEL À L'ACTION
          ======================================== */}

      <section className="bg-[#092D5A] px-6 py-16 text-white lg:px-8">

        <div
          className="
            mx-auto flex max-w-7xl
            flex-col items-start
            justify-between gap-7
            md:flex-row md:items-center
          "
        >

          <div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF7B85]">
              Un projet en perspective ?
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Parlons de vos besoins.
            </h2>

            <p className="mt-2 text-sm text-slate-200">
              Notre équipe est à votre écoute
              pour étudier votre demande.
            </p>

          </div>

          <Link
            href="/contact"
            className="
              inline-flex items-center gap-3
              rounded-md bg-[#B71932]
              px-6 py-4
              text-sm font-semibold text-white
              transition hover:bg-[#94152A]
            "
          >
            Nous contacter
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}
