"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeInUp, WHATSAPP_URL } from "@/lib/utils";

const cases = [
  {
    id: 1,
    procedure: "Lentes de Contato Dental",
    description: "Transformação completa com facetas de porcelana e-max",
    beforeBg: "from-[#1A1A1A] to-[#2D2A25]",
    afterBg: "from-[#2A2318] to-[#3D3528]",
    beforeLabel: "Antes",
    afterLabel: "Depois",
    tag: "8 lentes • 2 sessões",
  },
  {
    id: 2,
    procedure: "Implante + Coroa Cerâmica",
    description: "Restauração funcional e estética de alto padrão",
    beforeBg: "from-[#1C1C1C] to-[#2A2A2A]",
    afterBg: "from-[#231F18] to-[#33301F]",
    beforeLabel: "Antes",
    afterLabel: "Depois",
    tag: "1 implante • 3 meses",
  },
  {
    id: 3,
    procedure: "Clareamento + Harmonização",
    description: "Combinação de clareamento e botox labial",
    beforeBg: "from-[#181818] to-[#252525]",
    afterBg: "from-[#1E1B14] to-[#2E2B20]",
    beforeLabel: "Antes",
    afterLabel: "Depois",
    tag: "2 sessões • resultado imediato",
  },
];

export default function BeforeAfter() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="resultados"
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#C6A97A]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-5">
              <span className="gold-line" />
              <span className="eyebrow text-[#C6A97A]">Transformações</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-[clamp(2rem,4vw,3.25rem)] text-[#EAEAEA]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Resultados que
              <br />
              falam por si.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-[#8A8A8A] text-base max-w-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Cada transformação é única. Conheça alguns dos casos reais
            realizados em nossa clínica.
          </motion.p>
        </motion.div>

        {/* Cases grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cases.map((c) => (
            <motion.div
              key={c.id}
              variants={fadeInUp}
              className="group cursor-pointer"
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card */}
              <div className="relative overflow-hidden border border-white/5 group-hover:border-[#C6A97A]/30 transition-colors duration-500">
                {/* Before / After visual */}
                <div className="relative h-72 overflow-hidden">
                  {/* Before side */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${c.beforeBg} flex items-end p-5 transition-all duration-700 ${
                      hovered === c.id ? "w-0 opacity-0" : "w-full opacity-100"
                    }`}
                  >
                    <div>
                      <span className="eyebrow text-[#8A8A8A] text-[10px]">
                        {c.beforeLabel}
                      </span>
                      {/* Tooth silhouette placeholder */}
                      <div className="mt-3 flex gap-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-10 rounded-t-xl bg-[#8A8A8A]/20 border border-[#8A8A8A]/20"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* After side */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${c.afterBg} flex items-end p-5 transition-all duration-700 ${
                      hovered === c.id ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  >
                    <div>
                      <span className="eyebrow text-[#C6A97A] text-[10px]">
                        {c.afterLabel}
                      </span>
                      <div className="mt-3 flex gap-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-10 rounded-t-xl bg-[#C6A97A]/30 border border-[#C6A97A]/40"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#C6A97A] flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 6H11M5 2L1 6L5 10M7 2L11 6L7 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover hint */}
                  <div className={`absolute top-4 right-4 transition-opacity duration-300 ${hovered === c.id ? "opacity-0" : "opacity-100"}`}>
                    <span className="text-[#8A8A8A]/60 text-[10px] tracking-[0.2em] uppercase bg-black/40 px-2 py-1">
                      Passe o mouse
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-[#1A1A1A] group-hover:bg-[#1E1B14] p-6 transition-colors duration-500">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="text-[#EAEAEA] font-semibold text-base mb-1"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {c.procedure}
                      </h3>
                      <p
                        className="text-[#8A8A8A] text-sm leading-relaxed mb-3"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {c.description}
                      </p>
                      <span className="text-[10px] tracking-[0.2em] text-[#C6A97A] uppercase">
                        {c.tag}
                      </span>
                    </div>
                    <div className="flex-shrink-0 w-9 h-9 border border-white/10 group-hover:border-[#C6A97A]/50 flex items-center justify-center transition-colors duration-300">
                      <ArrowUpRight size={14} className="text-[#8A8A8A] group-hover:text-[#C6A97A] transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#C6A97A]/30 text-[#C6A97A] hover:bg-[#C6A97A] hover:text-[#111111] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Quero minha transformação
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
