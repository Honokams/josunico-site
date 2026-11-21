
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowUpRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

const serviceNames = {
  "aqua-life": "Production d’eau minérale Aqua-Life",
  assainissement: "Aménagement et assainissement",
  personnel: "Gestion du personnel",
  "genie-civil": "Génie civil et BTP",
  "forage-minier": "Forage minier",
  "forage-eau": "Forage d’eau potable",
  logistique: "Logistique et transport",
  informatique: "Support informatique",
  fournitures: "Fourniture de biens et services",
};

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");

    if (service && serviceNames[service]) {
      setForm((previous) => ({
        ...previous,
        subject: `Demande de devis — ${serviceNames[service]}`,
        message: `Bonjour JOSUNICO,\n\nJe souhaite obtenir des informations ou un devis concernant votre service : ${serviceNames[service]}.\n\n`,
      }));
    }
  }, []);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
    setReady(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = form.subject.trim() || "Demande de contact JOSUNICO";

    const body = [
      `Nom complet : ${form.name.trim()}`,
      `Email : ${form.email.trim()}`,
      "",
      "Message :",
      form.message.trim(),
    ].join("\n");

    const mailto = `mailto:josunicosarl@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setReady(true);
    window.location.href = mailto;
  }

  return (
    <main className="bg-[#F5F7FA]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#092D5A] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/josunico-about-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#092D5A]/95 via-[#092D5A]/85 to-[#092D5A]/35" />
        </div>

        <div className="relative mx-auto flex min-h-[230px] max-w-7xl items-center px-5 py-12 sm:px-8 lg:min-h-[280px]">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FFB4BC]">
              Parlons de votre projet
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Contactez-nous
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
              Nous sommes à votre écoute pour toute demande de devis,
              partenariat ou information.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#B71932]" />
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#B71932]">
            Restons en contact
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-[#092D5A] sm:text-3xl">
            Comment pouvons-nous vous aider ?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Retrouvez nos coordonnées ou envoyez-nous directement votre
            demande.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[0.9fr_1.25fr_0.95fr]">
          {/* COLONNE 1 : COORDONNÉES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="mb-6 text-lg font-extrabold text-[#092D5A]">
              Nos coordonnées
            </h3>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#B71932]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-[#092D5A]">
                    Adresse
                  </h4>
                  <p className="text-sm leading-6 text-slate-600">
                    5, avenue Lumumba, quartier Lumumba
                    <br />
                    Entre les avenues Kimbangu et Mayenge
                    <br />
                    Réf. Polyclinique TFM
                    <br />
                    Lubumbashi, Haut-Katanga — RDC
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#B71932]">
                  <Phone size={21} />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-[#092D5A]">
                    Téléphones
                  </h4>
                  <div className="space-y-2 text-sm">
                    <a
                      href="tel:+243841087466"
                      className="block text-slate-600 transition hover:text-[#B71932]"
                    >
                      +243 84 10 87 466
                    </a>
                    <a
                      href="tel:+243970854444"
                      className="block text-slate-600 transition hover:text-[#B71932]"
                    >
                      +243 97 085 44 44
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#B71932]">
                  <Mail size={21} />
                </div>
                <div className="min-w-0">
                  <h4 className="mb-2 font-bold text-[#092D5A]">
                    Email
                  </h4>
                  <a
                    href="mailto:josunicosarl@gmail.com"
                    className="break-all text-sm text-slate-600 transition hover:text-[#B71932]"
                  >
                    josunicosarl@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-[#092D5A] p-5 text-white">
              <Building2 size={25} className="mb-3 text-[#FFB4BC]" />
              <h4 className="font-bold">JOSUNICO SARL</h4>
              <p className="mt-2 text-xs leading-6 text-white/80">
                Bâtir, Accompagner et Innover.
                <br />
                Votre partenaire multiservices en RDC.
              </p>
            </div>
          </div>

          {/* COLONNE 2 : FORMULAIRE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-[#092D5A]">
                Envoyez-nous un message
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Complétez les champs ci-dessous pour préparer votre demande.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-[#092D5A]"
                >
                  Nom complet *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={updateField}
                  placeholder="Votre nom complet"
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#B71932] focus:ring-2 focus:ring-[#B71932]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-[#092D5A]"
                >
                  Adresse email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={updateField}
                  placeholder="exemple@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#B71932] focus:ring-2 focus:ring-[#B71932]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-[#092D5A]"
                >
                  Objet
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={updateField}
                  placeholder="Objet de votre demande"
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#B71932] focus:ring-2 focus:ring-[#B71932]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#092D5A]"
                >
                  Votre message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={updateField}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition focus:border-[#B71932] focus:ring-2 focus:ring-[#B71932]/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#B71932] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#99142A] sm:w-auto"
              >
                <Send size={18} />
                Préparer l'envoi
              </button>

              {ready && (
                <div
                  role="status"
                  className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-sm text-[#092D5A]"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  Votre application de messagerie devrait s'ouvrir.
                  Vérifiez le message et confirmez son envoi.
                </div>
              )}

              <p className="text-xs leading-5 text-slate-500">
                Le bouton ouvre votre application de messagerie.
                Aucun message n'est envoyé automatiquement depuis ce site.
              </p>
            </form>
          </div>

          {/* COLONNE 3 : LOCALISATION */}
          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-4">
                <h3 className="text-lg font-extrabold text-[#092D5A]">
                  Notre localisation
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Lubumbashi, Haut-Katanga, RDC
                </p>
              </div>

              <div className="relative h-[250px] bg-slate-100">
                <iframe
                  title="Carte de localisation de JOSUNICO à Lubumbashi"
                  src="https://www.google.com/maps?q=5%20Avenue%20Lumumba%20Lubumbashi%20RDC&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>

              <div className="p-4">
                <p className="mb-3 text-xs leading-5 text-slate-500">
                  La carte effectue une recherche par adresse.
                  Le point exact du bureau reste à confirmer.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5%20Avenue%20Lumumba%20Lubumbashi%20RDC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#B71932] hover:underline"
                >
                  Voir sur Google Maps
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[210px] bg-slate-100">
                <Image
                  src="/images/hero/josunico-about-hero.webp"
                  alt="Illustration architecturale de l'entreprise"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#092D5A]">
                  JOSUNICO
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Une entreprise congolaise au service de vos projets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
