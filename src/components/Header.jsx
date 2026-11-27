"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Globe, Phone, Mail, MapPin } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const address = "N° 60, avenue Emmanuel, Golf Maisha, Lubumbashi, RDC";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;

    setIsScrolled((previous) =>
      previous ? y > 40 : y > 150
    );
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const { language, changeLanguage, t } = useLanguage();

  const navigation = [
    { label: t.navigation.home, href: "/" },
    { label: t.navigation.about, href: "/a-propos" },
    { label: t.navigation.services, href: "/services" },
    { label: t.navigation.projects, href: "/realisations" },
    { label: t.navigation.contact, href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
        className={`
          josunico-header sticky top-0 z-50
          bg-white border-b border-gray-100
          transition-shadow duration-500
          motion-reduce:transition-none
          ${isScrolled ? "shadow-lg" : "shadow-sm"}
        `}
      >
      {/* COORDONNÉES OFFICIELLES */}
      <div
          inert={isScrolled}
          className={`
            bg-[#061B36] text-white font-sans text-xs sm:text-sm
            overflow-hidden
            transition-all duration-500 ease-in-out
            motion-reduce:transition-none
            ${
              isScrolled
                ? "max-h-0 opacity-0"
                : "max-h-[160px] opacity-100"
            }
          `}
        >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex flex-wrap items-center justify-center lg:justify-between gap-x-5 gap-y-2">
          <a href="tel:+243970854444" className="flex items-center gap-2 hover:text-red-300 transition-colors">
            <Phone size={15} aria-hidden="true" /> +243 97 085 44 44
          </a>
          <a href="mailto:josunicosarl@gmail.com" className="flex items-center gap-2 hover:text-red-300 transition-colors">
            <Mail size={15} aria-hidden="true" /> josunicosarl@gmail.com
          </a>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-300 transition-colors">
            <MapPin size={16} className="shrink-0" aria-hidden="true" />
            <span>{language === "fr" ? address : "60 Emmanuel Avenue, Golf Maisha, Lubumbashi, DRC"}</span>
          </a>
        </div>
      </div>
      <div
          className={`
            font-heading max-w-7xl mx-auto
            px-4 lg:px-8 flex items-center
            justify-between gap-2 lg:gap-6
            transition-all duration-500 ease-in-out
            motion-reduce:transition-none
            ${
                isScrolled
                  ? "h-[60px] lg:h-[64px] josunico-header-reveal"
                  : "h-[76px] lg:h-[88px]"
              }
          `}
        >

        {/* LOGO OFFICIEL */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center shrink-0 bg-white"
          aria-label="JOSUNICO - Accueil"
        >
          <Image
            src="/images/branding/icon1.png"
            alt="JOSUNICO SARL"
            width={220}
            height={80}
            priority
            className={`
            w-auto max-w-[145px] sm:max-w-[200px]
            object-contain mix-blend-multiply
            transition-all duration-500 ease-in-out
            motion-reduce:transition-none
            ${
              isScrolled
                ? "h-[42px] lg:h-[45px]"
                : "h-[60px]"
            }
          `}
          />
        </Link>

        {/* NAVIGATION ORDINATEUR */}
        <div className="hidden lg:flex items-center gap-3">
          <nav
            aria-label="Navigation principale"
            className="flex items-center gap-2"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);
              const contact = item.href === "/contact";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative flex items-center gap-2
                    px-3 py-2.5 rounded-md
                    text-[13px] font-semibold
                    tracking-[0.01em]
                    transition-all duration-300
                    ${
                      contact
                        ? active ? "bg-[#A71930] text-white" : "bg-[#092D5A] text-white hover:bg-[#A71930]"
                        : active ? "josunico-nav-link text-[#A71930]" : "josunico-nav-link text-[#24354B] hover:text-[#A71930]"
                    }
                  `}
                >
                  {item.label}

                  {contact && (
                    <ArrowUpRight className="w-4 h-4" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* SÉLECTEUR DES LANGUES */}
          <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
            <Globe size={17} className="text-[#092D5A]" />

            <button
              type="button"
              onClick={() => changeLanguage("fr")}
              aria-pressed={language === "fr"}
              className={`px-2 py-1.5 rounded-md text-xs font-bold transition ${
                language === "fr"
                  ? "bg-[#092D5A] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              FR
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
              className={`px-2 py-1.5 rounded-md text-xs font-bold transition ${
                language === "en"
                  ? "bg-[#092D5A] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* COMMANDES MOBILE */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              changeLanguage(language === "fr" ? "en" : "fr")
            }
            aria-label={
              language === "fr"
                ? "Switch to English"
                : "Passer en français"
            }
            className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 h-11 text-xs font-bold text-[#092D5A]"
          >
            <Globe size={16} />
            {language.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? language === "fr"
                  ? "Fermer le menu"
                  : "Close menu"
                : language === "fr"
                ? "Ouvrir le menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#092D5A] text-white hover:bg-[#A71930] transition"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={
            language === "fr"
              ? "Navigation mobile"
              : "Mobile navigation"
          }
          className="josunico-mobile-menu font-heading absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl lg:hidden max-h-[65dvh] overflow-y-auto"
        >
          <div className="flex flex-col gap-2 p-5">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    px-5 py-3.5 rounded-lg
                    text-sm font-semibold transition
                    ${
                      active
                        ? "bg-[#A71930] text-white"
                        : "text-[#092D5A] hover:bg-gray-50"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
