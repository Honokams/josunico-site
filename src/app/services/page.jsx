"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrestationsComplementaires from "./PrestationsComplementaires";
import {
  ArrowRight, CheckCircle2, ChevronRight, ChevronDown, ChevronUp,
  Filter, Droplets, Leaf, Users, HardHat, Pickaxe, Truck,
  Monitor, Package, Wrench,
} from "lucide-react";

const services = [
  {
    id: "aqua-life",
    title: "Production d’eau minérale Aqua-Life",
    shortTitle: "Production d’eau minérale Aqua-Life",
    image: "/images/services/aqua-life.webp",
    detailImage: "/images/services/conditionnement-eau-detail.webp",
    icon: Droplets,
    description:
      "Aqua-Life est la marque d’eau minérale de JOSUNICO. Ce domaine est consacré à la production et à la commercialisation d’eau destinée à la consommation.",
    points: [
      "Production d’eau minérale",
      "Conditionnement des produits",
      "Commercialisation et distribution",
    ],
  },
  {
    id: "assainissement",
    title: "Aménagement et assainissement",
    shortTitle: "Aménagement et assainissement",
    image: "/images/services/assainissement.webp",
    detailImage: "/images/services/drainage-canalisations-detail.webp",
    icon: Leaf,
    description:
      "JOSUNICO intervient dans l’aménagement et l’assainissement de l’environnement, notamment à travers les travaux de drainage, de canalisation, de nettoyage et d’entretien.",
    points: [
      "Aménagement des espaces",
      "Drainage et canalisations",
      "Nettoyage de citernes et de bassins",
      "Curage, vidange et pompage des bassins et installations",
      "Gestion, évacuation et traitement des rejets et effluents",
    ],
  },
  {
    id: "personnel",
    title: "Gestion du personnel",
    shortTitle: "Gestion du personnel",
    image: "/images/services/personnel.webp",
    detailImage: "/images/services/relations-professionnelles-detail.webp",
    icon: Users,
    description:
      "JOSUNICO accorde une importance particulière à la mobilisation de personnes qualifiées, à la bonne organisation du travail et à l’accompagnement des équipes.",
    points: [
      "Organisation et gestion des équipes",
      "Mobilisation de personnel adapté aux missions",
      "Accompagnement opérationnel",
      "Respect des exigences professionnelles",
    ],
  },
  {
    id: "genie-civil",
    title: "Génie civil et BTP",
    shortTitle: "Génie civil & BTP",
    image: "/images/services/genie-civil.webp",
    detailImage: "/images/services/construction-batiments-detail.webp",
    icon: HardHat,
    description:
      "JOSUNICO propose des services de consultance et d’exécution dans le domaine du génie civil, depuis les études techniques jusqu’à la réalisation et à la supervision des travaux.",
    points: [
      "Construction de bâtiments, routes, ponts, chaussées et châteaux d’eau",
      "Études de faisabilité, conception, plans techniques et estimation des coûts",
      "Réhabilitation, rénovation et démolition d’ouvrages",
      "Fabrication et montage de structures métalliques, entrepôts et passerelles",
      "Supervision des chantiers, inspections, contrôle des coûts et de la qualité",
    ],
  },
  {
    id: "forage-minier",
    title: "Forage minier",
    shortTitle: "Forage minier",
    image: "/images/services/forage-minier.webp",
    detailImage: "/images/services/forage-minier-detail.webp",
    icon: Pickaxe,
    description:
      "JOSUNICO présente une offre de forage destinée aux activités d’exploration et d’exploitation minières, avec différentes techniques adaptées aux exigences des projets.",
    points: [
      "Forage par roto-percussion à l’air (RAB)",
      "Forage par circulation inverse (RC)",
      "Carottage au diamant (DD)",
      "Grade Control et Air Core",
      "Forage pour dynamitage (Blast Hole)",
    ],
  },
  {
    id: "forage-eau",
    title: "Forage d’eau potable",
    shortTitle: "Forage d’eau potable",
    image: "/images/services/forage-eau.webp",
    detailImage: "/images/services/forage-eau-detail.webp",
    icon: Droplets,
    description:
      "JOSUNICO intervient dans les travaux de forage permettant l’accès aux ressources en eau souterraine, pour répondre aux besoins des particuliers et des organisations.",
    points: [
      "Forage de puits d’eau",
      "Accès aux nappes souterraines",
      "Travaux de forage modernes",
      "Solutions adaptées aux besoins en eau",
    ],
  },
  {
    id: "logistique",
    title: "Logistique et transport",
    shortTitle: "Logistique & transport",
    image: "/images/services/logistique.webp",
    detailImage: "/images/services/logistique-manutention-detail.webp",
    icon: Truck,
    description:
      "JOSUNICO propose des prestations liées à la logistique, au transport et au commerce général pour accompagner les besoins d’approvisionnement et les opérations de ses clients.",
    points: [
      "Transport de marchandises",
      "Logistique et approvisionnement",
      "Commerce général et approvisionnement en biens et équipements",
      "Accompagnement des opérations de livraison",
    ],
  },
  {
    id: "informatique",
    title: "Support informatique",
    shortTitle: "Support informatique",
    image: "/images/services/informatique.webp",
    detailImage: "/images/services/informatique-detail.webp",
    icon: Monitor,
    description:
      "JOSUNICO propose des prestations d’architecture, d’installation, de maintenance et de gestion des infrastructures informatiques et des réseaux d’entreprise.",
    points: [
      "Installation, configuration, programmation et maintenance informatique",
      "Architecture, installation, audit et maintenance des réseaux",
      "Administration réseau, gestion des accès, sauvegardes et sécurité des données",
      "Maintenance et réparation des ordinateurs, équipements et imprimantes",
      "Solutions de messagerie, visioconférence et collaboration professionnelle",
    ],
  },
  {
    id: "fournitures",
    title: "Fourniture de biens et services",
    shortTitle: "Fourniture de biens & services",
    image: "/images/services/fournitures.webp",
    detailImage: "/images/services/fourniture-detail.webp",
    icon: Package,
    description:
      "JOSUNICO fournit différents équipements, matériels et accessoires destinés aux entreprises, aux chantiers et aux activités industrielles.",
    points: [
      "Équipements et matériels électriques",
      "Équipements de protection individuelle",
      "Matériaux et matériels de construction",
      "Fournitures et accessoires industriels",
      "Pièces de rechange pour véhicules et engins",
    ],
  },
];

const categories = ["Tous", "Construction", "Industrie", "Environnement", "Équipements", "Informatique", "Services généraux"];

const mainCategories = {
  "aqua-life": "Industrie",
  assainissement: "Environnement",
  personnel: "Services généraux",
  "genie-civil": "Construction",
  "forage-minier": "Industrie",
  "forage-eau": "Environnement",
  logistique: "Services généraux",
  informatique: "Informatique",
  fournitures: "Équipements",
};

const allServices = [
  ...services.map((service) => ({ ...service, category: mainCategories[service.id], principal: true })),
  ...PrestationsComplementaires.map((service) => ({
    ...service,
    shortTitle: service.title,
    icon: Wrench,
    points: [],
    principal: false,
  })),
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState("aqua-life");
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = activeCategory === "Tous"
    ? allServices
    : allServices.filter((service) => service.category === activeCategory);
  const visible = showAll ? filtered : filtered.slice(0, 9);
  const selectedService = allServices.find((service) => service.id === selectedId) ?? allServices[0];
  const SelectedIcon = selectedService.icon;
  const remaining = Math.max(0, filtered.length - 9);

  function selectService(id) {
    setSelectedId(id);
    setDetailOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("service-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function changeCategory(category) {
    setActiveCategory(category);
    setShowAll(false);
    setDetailOpen(false);
  }

  return (
    <main className="bg-[#F5F7FA]">
      {/* HERO CONSERVÉ */}
      <section className="relative isolate overflow-hidden bg-[#092D5A] text-white">
        <div className="absolute inset-0">
          <Image src="/images/hero/josunico-about-hero.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#092D5A]/95 via-[#092D5A]/75 to-[#092D5A]/20" />
        </div>
        <div className="relative mx-auto flex min-h-[230px] max-w-7xl items-center px-5 py-12 sm:px-8 lg:min-h-[280px]">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FFB4BC]">Nos domaines d’intervention</p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Nos services</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 sm:text-base">Découvrez nos domaines d’expertise. Sélectionnez un service pour consulter ses prestations et ses principales activités.</p>
          </div>
        </div>
        
      </section>

      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-[#092D5A] sm:text-3xl">Nos domaines d’expertise</h2>
          <p className="mt-2 text-sm text-slate-600">Découvrez nos neuf domaines principaux et l’ensemble de nos prestations spécialisées.</p>
        </div>

        {/* UN SEUL FILTRE POUR TOUS LES SERVICES */}
        <div className="mb-5 flex flex-wrap items-center gap-2" aria-label="Filtrer les services">
          <Filter size={18} className="mr-1 text-[#092D5A]" aria-hidden="true" />
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => changeCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors sm:text-sm ${activeCategory === category
                ? "border-[#B71932] bg-[#B71932] text-white"
                : "border-slate-200 bg-white text-[#092D5A] hover:border-[#B71932]"}`}>
              {category}
            </button>
          ))}
        </div>
        <p className="mb-5 text-sm text-slate-500" aria-live="polite">
          {filtered.length} service{filtered.length > 1 ? "s" : ""} dans cette catégorie
          {!showAll && remaining > 0 ? ` · ${visible.length} affichés` : ""}
        </p>

        {/* LES 9 DOMAINES, PUIS LES PRESTATIONS, DANS LA MÊME GRILLE */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((service) => {
            const Icon = service.icon;
            const isSelected = detailOpen && selectedId === service.id;
            return (
              <button key={service.id} type="button" onClick={() => selectService(service.id)}
                aria-pressed={isSelected} aria-controls="service-detail"
                className={`group flex min-h-[112px] items-center gap-3 rounded-xl border bg-white p-2 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B71932] ${isSelected ? "border-[#B71932] ring-1 ring-[#B71932]" : "border-slate-200 hover:border-[#B71932]/50"}`}>
                <div className="relative h-[92px] w-[105px] shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:w-[100px]">
                  {service.image.startsWith("/") ? (
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 640px) 105px, 100px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <Icon size={20} strokeWidth={2} className={`mb-2 ${isSelected ? "text-[#B71932]" : "text-[#092D5A]"}`} aria-hidden="true" />
                  <h3 className="text-[13px] font-bold leading-snug text-[#092D5A] sm:text-sm">{service.shortTitle}</h3>
                </div>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-colors ${isSelected ? "bg-[#B71932]" : "bg-[#092D5A] group-hover:bg-[#B71932]"}`}>
                  <ChevronRight size={17} aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>

        {remaining > 0 && (
          <div className="mt-7 flex justify-center">
            <button type="button" onClick={() => { setShowAll((current) => !current); setDetailOpen(false); }} aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full bg-[#B71932] px-7 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#99142A]">
              {showAll ? <>Voir moins de services <ChevronUp size={18} /></> : <>Voir plus de services ({remaining}) <ChevronDown size={18} /></>}
            </button>
          </div>
        )}

        {/* MÊME FICHE POUR TOUTES LES CARTES */}
        {detailOpen && (
          
        <div
          id="service-detail"
          className="mt-7 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          aria-live="polite"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.3fr]">
            <div className="relative min-h-[250px] bg-slate-100 sm:min-h-[320px] lg:min-h-[360px]">
              {(selectedService.detailImage ?? selectedService.image).startsWith("/") ? (
                <Image
                  key={selectedService.id}
                  src={selectedService.detailImage ?? selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              ) : (
                <img
                  key={selectedService.id}
                  src={selectedService.detailImage ?? selectedService.image}
                  alt={selectedService.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B71932]/10 text-[#B71932]">
                  <SelectedIcon size={25} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#B71932]">
                  {selectedService.category}
                </span>
              </div>

              <h2 className="text-2xl font-extrabold leading-tight text-[#092D5A] sm:text-3xl">
                {selectedService.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {selectedService.description}
              </p>

              {selectedService.points.length > 0 && (
                <ul className="mt-5 grid gap-3">
                  {selectedService.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#B71932]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link
                  href={`/contact?service=${selectedService.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B71932] px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#99142A]"
                >
                  Demander un devis
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={() => setDetailOpen(false)}
                  className="text-sm font-bold text-[#092D5A] hover:underline"
                >
                  Fermer les détails
                </button>
              </div>
            </div>
          </div>

          {/* SPOT PUBLICITAIRE : UNIQUEMENT POUR AQUA-LIFE */}
          {selectedService.id === "aqua-life" && (
            <div className="border-t border-slate-200 bg-[#F5F7FA] px-5 py-7 sm:px-9">
              <div className="mx-auto max-w-4xl">
                <div className="mb-5 text-center">              
                  <h3 className="mt-2 text-xl font-extrabold text-[#092D5A] sm:text-2xl">
                    Découvrez Aqua-Life en vidéo
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Découvrez notre marque Aqua-Life à travers son spot publicitaire.
                  </p>
                </div>

                <div className="overflow-hidden rounded-xl bg-black shadow-md">
                  <video
                    key={selectedService.id}
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/services/conditionnement-eau-detail.webp"
                    className="aspect-video w-full object-contain"
                  >
                    <source
                      src="/videos/aqua-life-spot.mp4"
                      type="video/mp4"
                    />
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                  </video>
                </div>
              </div>
            </div>
          )}
        </div>

        )}

        {/* RAPPEL DE CONTACT */}
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#092D5A]/10 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-[#092D5A]">Un projet à concrétiser ?</h2>
            <p className="mt-1 text-sm text-slate-600">Contactez JOSUNICO pour échanger sur vos besoins et les prestations adaptées à votre activité.</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-bold text-[#B71932] hover:underline">Nous contacter <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>

        {/* ENGAGEMENTS CONSERVÉS */}
        <div className="mt-8 rounded-2xl bg-[#092D5A] p-6 text-white sm:p-9">
          <h2 className="text-xl font-extrabold sm:text-2xl">Nos engagements professionnels</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Qualité des prestations et satisfaction client", "Professionnalisme et amélioration continue", "Respect des règles d’hygiène et de sécurité"].map((engagement) => (
              <div key={engagement} className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-0.5 shrink-0 text-[#FF9DA9]" aria-hidden="true" />
                <span className="text-sm leading-6 text-white/90">{engagement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
