export default function Footer() {
  return (
    <footer className="bg-[#092D5A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Infos entreprise */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#0878C9]">JOSUNICO SARL</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Entreprise multiservices de droit congolais, experte en construction, logistique, forage, informatique et bien d'autres prestations au service du développement durable.
          </p>
        </div>

        {/* Coordonnées officielles */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Coordonnées</h4>
          <p className="text-gray-300 text-sm mb-2">
            📍 5, Av. Lumumba Q/ Lumumba entre Av. Kimbangu et Mayenge (Réf. Polyclinique TFM), Lubumbashi, RDC.
          </p>
          <p className="text-gray-300 text-sm mb-2">📞 +243 84 10 87 466 / +243 97 085 44 44</p>
          <p className="text-gray-300 text-sm">✉️ josunicosarl@gmail.com</p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white transition">Accueil</a></li>
            <li><a href="/a-propos" className="hover:text-white transition">À propos de nous</a></li>
            <li><a href="/services" className="hover:text-white transition">Nos domaines d'expertise</a></li>
            <li><a href="/realisations" className="hover:text-white transition">Nos réalisations</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contactez-nous</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-blue-900/60 pt-6 text-center text-xs text-gray-400">
        © 2026 JOSPIE UNIVERSAL INVESTMENTS IN CONGO SARL. Tous droits réservés.
      </div>
    </footer>
  );
}