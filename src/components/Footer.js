
"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#092D5A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

        {/* Infos entreprise */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#0878C9]">
            JOSUNICO SARL
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            {t.footer.description}
          </p>
        </div>

        {/* Coordonnées officielles */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            {t.footer.coordinates}
          </h4>

          <p className="text-gray-300 text-sm mb-2">
            📍 {t.footer.address}
          </p>

          <p className="text-gray-300 text-sm mb-2">
            📞 +243 84 10 87 466 / +243 97 085 44 44
          </p>

          <p className="text-gray-300 text-sm">
            ✉️ josunicosarl@gmail.com
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            {t.footer.navigation}
          </h4>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                href="/"
                className="hover:text-white transition"
              >
                {t.footer.home}
              </Link>
            </li>

            <li>
              <Link
                href="/a-propos"
                className="hover:text-white transition"
              >
                {t.footer.about}
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-white transition"
              >
                {t.footer.services}
              </Link>
            </li>

            <li>
              <Link
                href="/realisations"
                className="hover:text-white transition"
              >
                {t.footer.projects}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-white transition"
              >
                {t.footer.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto border-t border-blue-900/60 pt-6 text-center text-xs text-gray-400">
        © 2026 JOSPIE UNIVERSAL INVESTMENTS IN CONGO SARL.{" "}
        {t.footer.copyright}
      </div>
    </footer>
  );
}
