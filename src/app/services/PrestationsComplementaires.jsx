// 11 prestations distinctes, complémentaires aux neuf domaines principaux.

const prestations = [
  // CONSTRUCTION ET GÉNIE CIVIL
  {
    id: "decoration",
    title: "Peinture et décoration des bâtiments",
    category: "Construction",
    image: "/images/services/peinture-decoration-card.webp",
    detailImage: "/images/services/peinture-decoration-detail.webp",
    description:
      "Peinture intérieure et extérieure, décoration, design et travaux de finition des bâtiments.",
  },

  // INDUSTRIE ET MAINTENANCE
  {
    id: "plomberie",
    title: "Plomberie domestique et industrielle",
    category: "Industrie",
    image: "/images/services/plomberie-card.webp",
    detailImage: "/images/services/plomberie-detail.webp",
    description:
      "Installation, entretien et intervention sur les réseaux de plomberie et les équipements associés.",
  },
  {
    id: "service-froid",
    title: "Service froid et climatisation",
    category: "Industrie",
    image: "/images/services/froid-climatisation-card.webp",
    detailImage: "/images/services/froid-climatisation-detail.webp",
    description:
      "Prestations relatives aux équipements de froid et de climatisation, notamment leur installation et leur entretien.",
  },
  {
    id: "soudure",
    title: "Soudure et ajustage",
    category: "Industrie",
    image: "/images/services/soudure-ajustage-card.webp",
    detailImage: "/images/services/soudure-ajustage-detail.webp",
    description:
      "Travaux de soudure, d’assemblage, d’ajustage et d’intervention sur des éléments métalliques.",
  },
  {
    id: "genie-electrique",
    title: "Génie électrique",
    category: "Industrie",
    image: "/images/services/genie-electrique-card.webp",
    detailImage: "/images/services/genie-electrique-detail.webp",
    description:
      "Travaux d’installation, de maintenance et d’intervention sur des équipements et systèmes électriques.",
  },
  {
    id: "mecanique",
    title: "Mécanique et maintenance industrielle",
    category: "Industrie",
    image: "/images/services/maintenance-industrielle-detail.webp",
    detailImage: "/images/services/maintenance-industrielle-card.webp",
    description:
      "Interventions mécaniques et travaux de maintenance sur les équipements et installations industriels.",
  },

  // ENVIRONNEMENT ET ASSAINISSEMENT
  {
    id: "amenagement-paysager",
    title: "Aménagement paysager",
    category: "Environnement",
    image: "/images/services/amenagement-paysager-detail.webp",
    detailImage: "/images/services/entretien-espaces-verts.webp",
    description:
      "Aménagement des espaces extérieurs et travaux paysagers intégrés aux projets de construction.",
  },
  {
    id: "nettoyage",
    title: "Nettoyage et entretien professionnel",
    category: "Environnement",
    image: "/images/services/nettoyage-professionnel-card.webp",
    detailImage: "/images/services/nettoyage-professionnel-detail.webp",
    description:
      "Nettoyage de bureaux, dépôts, complexes commerciaux, espaces professionnels et lieux de travail.",
  },
  {
    id: "nettoyage-auto",
    title: "Nettoyage automobile",
    category: "Environnement",
    image: "/images/services/nettoyage-automobile-card.webp",
    detailImage: "/images/services/nettoyage-automobile-detail.webp",
    description:
      "Prestations de nettoyage de véhicules : moteurs, sièges, plafonds, tapis et autres surfaces.",
  },

  // SERVICES GÉNÉRAUX
  {
    id: "commerce-general",
    title: "Commerce général",
    category: "Services généraux",
    image: "/images/services/commerce-general-card.webp",
    detailImage: "/images/services/commerce-general-detail.webp",
    description:
      "Activités de commerce général : recherche de produits, achat et fourniture de biens adaptés aux besoins des clients, au-delà du transport.",
  },
  {
    id: "gestion-personnel",
    title: "Conseil et gestion du personnel",
    category: "Services généraux",
    image: "/images/services/conseil-personnel-card.webp",
    detailImage: "/images/services/conseil-personnel-detail.webp",
    description:
      "Conseil sur l’organisation des équipes et accompagnement dans la mobilisation des ressources humaines adaptées aux projets.",
  },
];

export default prestations;
