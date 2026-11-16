
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Manrope } from "next/font/google";

// Police moderne et professionnelle
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`${manrope.className} sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[88px] flex items-center justify-between gap-6">

        {/* LOGO OFFICIEL */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center shrink-0 bg-white"
          aria-label="JOSUNICO - Accueil"
        >
          <Image
            src="/images/branding/josunico-logo.png"
            alt="JOSUNICO SARL"
            width={220}
            height={80}
            priority
            className="h-[60px] w-auto max-w-[200px] object-contain mix-blend-multiply"
          />
        </Link>

        {/* NAVIGATION ORDINATEUR */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-2"
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
                  px-4 py-2.5 rounded-lg
                  text-[13px] font-semibold
                  tracking-[0.01em]
                  transition-all duration-300
                  ${
                    active
                      ? "bg-[#A71930] text-white shadow-sm"
                      : contact
                      ? "bg-[#092D5A] text-white hover:bg-[#A71930]"
                      : "text-[#24354B] hover:text-[#A71930] hover:bg-red-50"
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

        {/* BOUTON MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-[#092D5A] text-white hover:bg-[#A71930] transition"
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl lg:hidden"
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
