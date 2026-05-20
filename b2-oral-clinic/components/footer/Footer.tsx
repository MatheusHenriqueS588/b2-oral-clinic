"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight, Share2 } from "lucide-react";
import { fadeIn, WHATSAPP_URL } from "@/lib/utils";

const navLinks = [
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const procedures = [
  "Implantes Dentais",
  "Lentes de Contato Dental",
  "Clareamento Premium",
  "Harmonização Facial",
  "Estética do Sorriso",
  "Ortodontia Estética",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C6A97A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20"
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-7">
              <div className="flex flex-col leading-none mb-5">
                <span
                  className="text-[#EAEAEA] text-xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  B2 Oral
                </span>
                <span className="text-[#C6A97A] text-[11px] tracking-[0.35em] uppercase font-medium">
                  Clinic
                </span>
              </div>
              <p
                className="text-[#8A8A8A] text-sm leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Odontologia de alto padrão com tecnologia de ponta, atendimento
                exclusivo e resultados que transformam.
              </p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-[#C6A97A]/50 flex items-center justify-center text-[#8A8A8A] hover:text-[#C6A97A] transition-all duration-300"
                aria-label="Instagram"
              >
                {/* Instagram SVG */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-[#C6A97A]/50 flex items-center justify-center text-[#8A8A8A] hover:text-[#C6A97A] transition-all duration-300"
                aria-label="Facebook"
              >
                {/* Facebook SVG */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-[#C6A97A]/50 flex items-center justify-center text-[#8A8A8A] hover:text-[#C6A97A] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.847L0 24l6.307-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.006-1.37l-.36-.214-3.737.898.937-3.64-.235-.374A9.817 9.817 0 012.182 12c0-5.419 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[#EAEAEA] text-sm font-semibold tracking-widest uppercase mb-7"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#8A8A8A] hover:text-[#C6A97A] text-sm transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedures */}
          <div>
            <h4
              className="text-[#EAEAEA] text-sm font-semibold tracking-widest uppercase mb-7"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Procedimentos
            </h4>
            <ul className="space-y-3.5">
              {procedures.map((proc) => (
                <li key={proc}>
                  <span
                    className="text-[#8A8A8A] text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {proc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-[#EAEAEA] text-sm font-semibold tracking-widest uppercase mb-7"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contato
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-[#C6A97A] mt-0.5 flex-shrink-0"
                />
                <span
                  className="text-[#8A8A8A] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Av. Paulista, 1374 — 5º andar
                  <br />
                  Bela Vista, São Paulo — SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#C6A97A] flex-shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-[#8A8A8A] hover:text-[#C6A97A] text-sm transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  (11) 9 9999-9999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#C6A97A] mt-0.5 flex-shrink-0" />
                <div
                  className="text-[#8A8A8A] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <p>Seg — Sex: 8h às 19h</p>
                  <p>Sáb: 9h às 14h</p>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-[#C6A97A]/10 border border-[#C6A97A]/25 hover:bg-[#C6A97A] text-[#C6A97A] hover:text-[#111111] px-5 py-3 text-xs tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Fale pelo WhatsApp
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#8A8A8A]/50 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {year} B2 Oral Clinic. Todos os direitos reservados.
          </p>
          <p
            className="text-[#8A8A8A]/30 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            CRO-SP — Conselho Regional de Odontologia
          </p>
        </div>
      </div>
    </footer>
  );
}
