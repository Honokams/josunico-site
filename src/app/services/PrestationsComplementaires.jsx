// 11 prestations distinctes, complémentaires aux neuf domaines principaux.
// Les photographies Pexels sont provisoires.
const photo = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

const prestations = [
  // CONSTRUCTION ET GÉNIE CIVIL
  {
    id: "decoration",
    title: "Peinture et décoration des bâtiments",
    category: "Construction",
    image: photo(2219024),
    description:
      "Peinture intérieure et extérieure, décoration, design et travaux de finition des bâtiments.",
  },

  // INDUSTRIE ET MAINTENANCE
  {
    id: "plomberie",
    title: "Plomberie domestique et industrielle",
    category: "Industrie",
    image: photo(8486972),
    description:
      "Installation, entretien et intervention sur les réseaux de plomberie et les équipements associés.",
  },
  {
    id: "service-froid",
    title: "Service froid et climatisation",
    category: "Industrie",
    image: photo(4483610),
    description:
      "Prestations relatives aux équipements de froid et de climatisation, notamment leur installation et leur entretien.",
  },
  {
    id: "soudure",
    title: "Soudure et ajustage",
    category: "Industrie",
    image: photo(159306),
    description:
      "Travaux de soudure, d’assemblage, d’ajustage et d’intervention sur des éléments métalliques.",
  },
  {
    id: "genie-electrique",
    title: "Génie électrique",
    category: "Industrie",
    image: photo(257700),
    description:
      "Travaux d’installation, de maintenance et d’intervention sur des équipements et systèmes électriques.",
  },
  {
    id: "mecanique",
    title: "Mécanique et maintenance industrielle",
    category: "Industrie",
    image: photo(4483610),
    description:
      "Interventions mécaniques et travaux de maintenance sur les équipements et installations industriels.",
  },

  // ENVIRONNEMENT ET ASSAINISSEMENT
  {
    id: "amenagement-paysager",
    title: "Aménagement paysager",
    category: "Environnement",
    image: photo(159306),
    description:
      "Aménagement des espaces extérieurs et travaux paysagers intégrés aux projets de construction.",
  },
  {
    id: "nettoyage",
    title: "Nettoyage et entretien professionnel",
    category: "Environnement",
    image: photo(4483610),
    description:
      "Nettoyage de bureaux, dépôts, complexes commerciaux, espaces professionnels et lieux de travail.",
  },
  {
    id: "nettoyage-auto",
    title: "Nettoyage automobile",
    category: "Environnement",
    image: photo(4483610),
    description:
      "Prestations de nettoyage de véhicules : moteurs, sièges, plafonds, tapis et autres surfaces.",
  },

  // SERVICES GÉNÉRAUX
  {
    id: "commerce-general",
    title: "Commerce général",
    category: "Services généraux",
    image: photo(4483610),
    description:
      "Activités de commerce général : recherche de produits, achat et fourniture de biens adaptés aux besoins des clients, au-delà du transport.",
  },
  {
    id: "gestion-personnel",
    title: "Conseil et gestion du personnel",
    category: "Services généraux",
    image: photo(3184465),
    description:
      "Conseil sur l’organisation des équipes et accompagnement dans la mobilisation des ressources humaines adaptées aux projets.",
  },
];

export default prestations;
