
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
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "assainissement",
    title: "Aménagement & assainissement",
    subtitle: "Environnement",
    Icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "personnel",
    title: "Gestion du personnel",
    subtitle: "Ressources humaines",
    Icon: Users,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "genie-civil",
    title: "Génie civil & BTP",
    subtitle: "Construction",
    Icon: Building2,
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18f4369?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "forage-minier",
    title: "Forage minier",
    subtitle: "Industrie minière",
    Icon: Pickaxe,
    image:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "forage-eau",
    title: "Forage d’eau potable",
    subtitle: "Accès à l’eau",
    Icon: Waves,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "logistique",
    title: "Logistique & transport",
    subtitle: "Solutions logistiques",
    Icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "informatique",
    title: "Support informatique",
    subtitle: "Technologies & réseaux",
    Icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "fournitures",
    title: "Fourniture de biens & services",
    subtitle: "Approvisionnement",
    Icon: Package,
    image:
      "https://images.unsplash.com/photo-1586528116493-a027325240fa?w=900&q=85&auto=format&fit=crop",
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

      {/* ========================================
          1. SECTION HERO
          ======================================== */}

      <section
        className="
          relative isolate flex
          min-h-[610px] items-center
          overflow-hidden
          bg-[#092D5A] text-white
          lg:min-h-[690px]
        "
      >

        {/* Image avec son dégradé bleu intégré */}
        <Image
          src="/images/hero/josunico-hero.png"
          alt="Illustration de deux ingénieurs sur un chantier de construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[63%_center]"
        />

        {/* Contenu principal */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-[650px]">

            {/* Grand titre */}
            <h1
            className="
                max-w-[650px]
                text-5xl font-bold
                leading-[1.12]
                tracking-[-0.035em]
                sm:text-6xl
                lg:text-[76px]
              ">
              <span className="text-[#FF5B67]">
                JOSUNICO
              </span>
              
            </h1>
            <h2
              className="
                max-w-[350px]
                text-5xl font-bold
                leading-[1.12]
                tracking-[-0.035em]
                sm:text-6xl
                lg:text-[36px]
              "
            >
              Bâtir, Accompagner et Innover.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[530px] text-base leading-8 text-slate-100 sm:text-lg">
              Une entreprise congolaise multiservices,
              engagée dans la construction, l’industrie
              et les solutions qui accompagnent vos projets.
            </p>

            {/* Boutons */}
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="/services"
                className="
                  inline-flex min-h-12 items-center gap-3
                  rounded-md bg-[#B71932]
                  px-6 py-3
                  text-sm font-semibold text-white
                  shadow-lg transition
                  hover:bg-[#921328]
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
                  inline-flex min-h-12 items-center gap-3
                  rounded-md border border-white/60
                  bg-white/95 px-6 py-3
                  text-sm font-semibold text-[#092D5A]
                  transition hover:bg-white
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
      </section>

      {/* ========================================
          2. NOS DOMAINES D'EXPERTISE
          ======================================== */}

      <section
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
        aria-labelledby="services-title"
      >

        {/* En-tête */}
        <div className="mb-11 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B71932]">
              Nos domaines d’expertise
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
            Découvrez les neuf domaines d’intervention
            de JOSUNICO et sélectionnez celui qui
            correspond à votre besoin.
          </p>

        </div>

        {/* Grille des 9 services */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map(
            ({ slug, title, subtitle, Icon, image }, i) => (

              <Link
                key={slug}
                href={`/services?service=${slug}`}
                className="
                  group overflow-hidden rounded-xl
                  border border-slate-200
                  bg-white shadow-sm
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-[#B71932]/30
                  hover:shadow-xl
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#B71932]
                "
              >

                {/* Image du service */}
                <div className="relative h-44 overflow-hidden bg-slate-200 sm:h-48">

                  <div
                    className="
                      h-full w-full
                      bg-cover bg-center
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                    style={{
                      backgroundImage: `linear-gradient(
                        0deg,
                        rgba(5,28,58,.15),
                        rgba(5,28,58,.02)
                      ), url('${image}')`,
                    }}
                  />

                  {/* Numéro */}
                  <span className="absolute left-4 top-4 rounded bg-white/95 px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#092D5A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Contenu */}
                <div className="flex min-h-28 items-center gap-4 p-5">

                  <span
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-lg bg-[#EAF2FB]
                      text-[#1267AC] transition
                      group-hover:bg-[#B71932]
                      group-hover:text-white
                    "
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0 flex-1">

                    <p className="mb-1 text-xs font-medium text-slate-500">
                      {subtitle}
                    </p>

                    <h3 className="text-base font-semibold leading-snug text-[#102D50]">
                      {title}
                    </h3>

                  </div>

                  <ArrowUpRight
                    className="
                      shrink-0 text-[#B71932]
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    size={20}
                  />

                </div>
              </Link>
            )
          )}

        </div>

        <p className="mt-5 text-xs text-slate-500">
          Photographies d’illustration provisoires :
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
