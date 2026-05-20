"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeInUp, WHATSAPP_URL } from "@/lib/utils";

export default function CTA() {
  return (
    <section
      id="contato"
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#C6A97A]/6 blur-[120px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(#C6A97A 1px, transparent 1px), linear-gradient(90deg, #C6A97A 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A97A]/40 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="block w-8 h-px bg-[#C6A97A]/50" />
            <span className="eyebrow text-[#C6A97A]">Comece sua transformação</span>
            <span className="block w-8 h-px bg-[#C6A97A]/50" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="heading-display text-[clamp(2.5rem,6vw,5rem)] text-[#EAEAEA] mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Seu sorriso ideal
            <br />
            começa com uma
            <br />
            <span className="text-[#C6A97A]">conversa.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-[#8A8A8A] text-lg leading-relaxed max-w-xl mx-auto mb-14"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Agende sua avaliação exclusiva e descubra o plano de tratamento
            ideal para você. Sem compromisso. Sem espera.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#C6A97A] hover:bg-[#D4BB94] text-[#111111] font-semibold px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.847L0 24l6.307-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.006-1.37l-.36-.214-3.737.898.937-3.64-.235-.374A9.817 9.817 0 012.182 12c0-5.419 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
              </svg>
              Agendar pelo WhatsApp
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>

            <a
              href="tel:+5511999999999"
              className="inline-flex items-center gap-2 text-[#EAEAEA] hover:text-[#C6A97A] text-sm tracking-wide transition-colors duration-300 group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-4 h-px bg-current" />
              ou ligue: (11) 9 9999-9999
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-10 border-t border-white/8 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: "500+", label: "Pacientes" },
              { value: "5.0", label: "Avaliação" },
              { value: "15+", label: "Anos" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="text-[#C6A97A] text-2xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {value}
                </p>
                <p
                  className="text-[#8A8A8A] text-xs tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
