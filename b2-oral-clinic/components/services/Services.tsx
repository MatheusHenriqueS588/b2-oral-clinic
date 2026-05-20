"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeInUp, WHATSAPP_URL } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "Implantes Dentais",
    subtitle: "Restauração permanente",
    description:
      "Tecnologia guiada por computador para posicionamento preciso. Implantes de titânio de grau médico com protocolo de osseointegração avançado.",
    benefits: [
      "Planejamento 3D completo",
      "Implantes de titânio premium",
      "Procedimento em sessão única",
      "Garantia de 10 anos",
    ],
    tag: "Mais procurado",
  },
  {
    number: "02",
    title: "Lentes de Contato Dental",
    subtitle: "Estética de alta precisão",
    description:
      "Facetas ultrafinas em porcelana e-max ou resina composta de alta resistência. Transformação estética sem desgaste excessivo do dente.",
    benefits: [
      "Espessura de 0.3mm",
      "Cor personalizada",
      "Alta durabilidade",
      "Sem desgaste",
    ],
    tag: "Premium",
  },
  {
    number: "03",
    title: "Clareamento Dental",
    subtitle: "Luminosidade natural",
    description:
      "Protocolo exclusivo de clareamento com géis de última geração e ativação por LED. Resultados visíveis já na primeira sessão.",
    benefits: [
      "Resultado em 1 sessão",
      "Sem sensibilidade",
      "Gel premium importado",
      "Manutenção domiciliar inclusa",
    ],
    tag: null,
  },
  {
    number: "04",
    title: "Harmonização Facial",
    subtitle: "Equilíbrio e elegância",
    description:
      "Procedimentos minimamente invasivos para harmonizar contornos faciais. Botox, preenchimento e bioremodelação com técnica exclusiva.",
    benefits: [
      "Análise facial 3D",
      "Produtos importados",
      "Resultado natural",
      "Sem tempo de recuperação",
    ],
    tag: "Novo",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="procedimentos"
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C6A97A]/3 blur-[120px] pointer-events-none" />

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
              <span className="eyebrow text-[#C6A97A]">Procedimentos</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-[clamp(2rem,4vw,3.25rem)] text-[#EAEAEA]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Cada tratamento,
              <br />
              uma obra de arte.
            </motion.h2>
          </div>
          <motion.a
            variants={fadeInUp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C6A97A]/30 text-[#C6A97A] hover:bg-[#C6A97A] hover:text-[#111111] px-7 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 self-end"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Agendar Avaliação
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

        {/* Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="divide-y divide-white/8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              variants={fadeInUp}
              className="group"
            >
              <button
                className="w-full text-left py-8 lg:py-10"
                onClick={() => setActive(active === idx ? null : idx)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-8 flex-1">
                    {/* Number */}
                    <span
                      className="text-[#C6A97A]/30 group-hover:text-[#C6A97A]/60 text-sm font-medium tracking-widest transition-colors duration-300 mt-1 flex-shrink-0"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {service.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 flex-wrap mb-2">
                        <h3
                          className="text-[#EAEAEA] text-xl md:text-2xl font-semibold group-hover:text-[#C6A97A] transition-colors duration-300"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {service.title}
                        </h3>
                        {service.tag && (
                          <span className="text-[10px] tracking-[0.2em] uppercase bg-[#C6A97A]/15 text-[#C6A97A] px-3 py-1 border border-[#C6A97A]/20">
                            {service.tag}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-[#8A8A8A] text-sm"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle icon */}
                  <div
                    className={`w-10 h-10 border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                      active === idx
                        ? "border-[#C6A97A] bg-[#C6A97A] rotate-45"
                        : "border-white/15 group-hover:border-[#C6A97A]/50"
                    }`}
                  >
                    <ArrowUpRight
                      size={15}
                      className={active === idx ? "text-[#111111]" : "text-[#8A8A8A]"}
                    />
                  </div>
                </div>
              </button>

              {/* Expandable content */}
              <AnimatePresence>
                {active === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-16 pr-16 grid md:grid-cols-2 gap-10">
                      <p
                        className="text-[#8A8A8A] text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-3 text-sm text-[#EAEAEA]"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A97A] flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
