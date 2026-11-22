
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
            src="/images/hero/josunico-contact-hero.webp"
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
          
{/* COLONNE 1 : COORDONNÉES MINIMALISTES */}
<div className="px-1 py-3 sm:px-2 sm:py-4">

  {/* Introduction */}
  <div className="mb-6">
    <h3 className="text-lg font-bold tracking-tight text-[#092D5A]">
      Nos coordonnées
    </h3>

    <p className="mt-2 text-sm leading-5 text-slate-500">
      Retrouvez-nous ou contactez directement notre équipe.
    </p>
  </div>

  <div className="space-y-5">

    {/* Adresse */}
    <div className="flex items-start gap-3">
      <MapPin
        size={19}
        strokeWidth={1.8}
        className="mt-0.5 shrink-0 text-slate-400"
      />

      <div className="min-w-0">
        <h4 className="mb-1.5 text-sm font-semibold text-[#092D5A]">
          Adresse
        </h4>

        <p className="text-[13px] leading-[1.75] text-slate-500">
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

    {/* Séparateur */}
    <div className="h-px bg-slate-100" />

    {/* Téléphones */}
    <div className="flex items-start gap-3">
      <Phone
        size={19}
        strokeWidth={1.8}
        className="mt-0.5 shrink-0 text-slate-400"
      />

      <div>
        <h4 className="mb-1.5 text-sm font-semibold text-[#092D5A]">
          Téléphones
        </h4>

        <div className="space-y-1 text-[13px]">
          <a
            href="tel:+243841087466"
            className="block text-slate-500 transition-colors hover:text-[#A71930]"
          >
            +243 84 10 87 466
          </a>

          <a
            href="tel:+243970854444"
            className="block text-slate-500 transition-colors hover:text-[#A71930]"
          >
            +243 97 085 44 44
          </a>
        </div>
      </div>
    </div>

    {/* Séparateur */}
    <div className="h-px bg-slate-100" />

    {/* Email */}
    <div className="flex items-start gap-3">
      <Mail
        size={19}
        strokeWidth={1.8}
        className="mt-0.5 shrink-0 text-slate-400"
      />

      <div className="min-w-0">
        <h4 className="mb-1.5 text-sm font-semibold text-[#092D5A]">
          Email
        </h4>

        <a
          href="mailto:josunicosarl@gmail.com"
          className="break-all text-[13px] text-slate-500 transition-colors hover:text-[#A71930]"
        >
          josunicosarl@gmail.com
        </a>
      </div>
    </div>

  </div>
</div>

          
{/* COLONNE 2 : FORMULAIRE COMPACT PREMIUM */}
<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(9,45,90,0.07)]">

  {/* En-tête */}
  <div className="flex items-center gap-3 bg-[#092D5A] px-5 py-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
      <Send size={19} className="text-white" />
    </div>

    <div>
      <h3 className="text-base font-bold text-white sm:text-lg">
        Parlons de votre projet
      </h3>
      <p className="mt-0.5 text-xs text-slate-200">
        Notre équipe est à votre écoute.
      </p>
    </div>
  </div>

  {/* Formulaire */}
  <form
    onSubmit={handleSubmit}
    className="space-y-3.5 p-4 sm:p-5"
  >
    {/* Nom et email côte à côte sur écrans adaptés */}
    <div className="grid gap-3 sm:grid-cols-2">

      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-xs font-bold text-[#092D5A]"
        >
          Nom complet <span className="text-[#A71930]">*</span>
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={updateField}
          placeholder="Votre nom"
          className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#A71930] focus:bg-white focus:ring-2 focus:ring-[#A71930]/10"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-xs font-bold text-[#092D5A]"
        >
          Adresse email <span className="text-[#A71930]">*</span>
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={updateField}
          placeholder="votre@email.com"
          className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#A71930] focus:bg-white focus:ring-2 focus:ring-[#A71930]/10"
        />
      </div>

    </div>

    {/* Objet */}
    <div>
      <label
        htmlFor="contact-subject"
        className="mb-1.5 block text-xs font-bold text-[#092D5A]"
      >
        Objet de votre demande
      </label>

      <input
        id="contact-subject"
        name="subject"
        type="text"
        value={form.subject}
        onChange={updateField}
        placeholder="Ex. Demande de devis"
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#A71930] focus:bg-white focus:ring-2 focus:ring-[#A71930]/10"
      />
    </div>

    {/* Message */}
    <div>
      <label
        htmlFor="contact-message"
        className="mb-1.5 block text-xs font-bold text-[#092D5A]"
      >
        Votre message <span className="text-[#A71930]">*</span>
      </label>

      <textarea
        id="contact-message"
        name="message"
        rows={3}
        required
        value={form.message}
        onChange={updateField}
        placeholder="Décrivez brièvement votre projet ou votre besoin..."
        className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm leading-5 text-slate-800 outline-none transition focus:border-[#A71930] focus:bg-white focus:ring-2 focus:ring-[#A71930]/10"
      />
    </div>

    {/* Bouton */}
    <button
      type="submit"
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#A71930] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#8D1429] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A71930]"
    >
      <Send size={16} />
      Préparer l'envoi
    </button>

    {/* Confirmation */}
    {ready && (
      <div
        role="status"
        className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-xs text-[#092D5A]"
      >
        <CheckCircle2 size={16} className="shrink-0" />
        <span>
          Votre messagerie devrait s'ouvrir.
          Vérifiez et confirmez l'envoi.
        </span>
      </div>
    )}

    {/* Note discrète */}
    <p className="flex items-start justify-center gap-1.5 text-center text-[11px] leading-4 text-slate-400">
      <span>
        Aucun message n'est envoyé automatiquement.
        Votre messagerie confirmera l'envoi.
      </span>
    </p>

  </form>
</div>


          
{/* COLONNE 3 : LOCALISATION COMPACTE */}
<div className="flex h-full min-w-0 flex-col gap-3">

  {/* CARTE GOOGLE MAPS */}
  <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(9,45,90,0.04)]">

    {/* En-tête compact */}
    <div className="flex items-center justify-between px-4 py-3">
      <div>
        <h3 className="text-sm font-bold text-[#092D5A]">
          Notre localisation
        </h3>

        <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
          <MapPin size={12} />
          Lubumbashi, Haut-Katanga
        </p>
      </div>

      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
        <MapPin size={17} />
      </div>
    </div>

    {/* Carte animée */}
    <div className="relative h-[165px] overflow-hidden bg-slate-100 sm:h-[175px]">

      <div className="absolute inset-0 origin-center transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none">
        <iframe
          title="Localisation de JOSUNICO à Lubumbashi"
          src="https://www.google.com/maps?q=5%20Avenue%20Lumumba%20Lubumbashi%20RDC&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      {/* Badge flottant */}
      <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A71930] opacity-30 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A71930]" />
        </span>

        <span className="text-[10px] font-semibold text-[#092D5A]">
          Lubumbashi
        </span>
      </div>

    </div>

    {/* Lien vers Google Maps */}
    <div className="px-4 py-3">
      <a
        href="https://www.google.com/maps/search/?api=1&query=5%20Avenue%20Lumumba%20Lubumbashi%20RDC"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A71930] transition hover:gap-2.5 hover:text-[#891528]"
      >
        Ouvrir dans Google Maps
        <ArrowUpRight size={14} />
      </a>

      <p className="mt-1 text-[10px] leading-4 text-slate-400">
        Localisation indicative, adresse à confirmer.
      </p>
    </div>
  </div>

  {/* MINI CARTE JOSUNICO */}
  <div className="group flex items-center gap-3 overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-[0_3px_15px_rgba(9,45,90,0.03)] transition-colors duration-300 hover:border-slate-200">

    {/* Image miniature */}
    <div className="relative h-[95px] w-[110px] shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:w-[115px]">
      <Image
        src="/images/hero/josunico-about-hero.webp"
        alt="Illustration de JOSUNICO"
        fill
        sizes="115px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
      />
    </div>

    {/* Présentation */}
    <div className="min-w-0 flex-1 py-1">
      <h4 className="text-sm font-extrabold text-[#092D5A]">
        JOSUNICO
      </h4>

      <div className="mt-1 h-0.5 w-7 rounded-full bg-[#A71930]" />

      <p className="mt-2 text-[11px] leading-[1.6] text-slate-500">
        Bâtir, Accompagner et Innover.
      </p>

      <p className="mt-1 text-[10px] text-slate-400">
        Lubumbashi, RDC
      </p>
    </div>
  </div>

</div>

        </div>
      </section>
    </main>
  );
}
