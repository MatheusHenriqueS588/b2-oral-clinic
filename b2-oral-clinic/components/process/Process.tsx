"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/utils";

const steps = [
  {
    num: "01",
    title: "Avaliação Exclusiva",
    description:
      "Consulta inicial completa com análise facial, fotos digitais e planejamento de tratamento personalizado. Sem compromisso.",
    duration: "60 min",
    icon: "◎",
  },
  {
    num: "02",
    title: "Diagnóstico Digital",
    description:
      "Raio-X panorâmico, escaneamento 3D intraoral e simulação digital do resultado final antes de qualquer procedimento.",
    duration: "40 min",
    icon: "◈",
  },
  {
    num: "03",
    title: "Plano Personalizado",
    description:
      "Apresentação detalhada do plano de tratamento, opções de procedimentos, investimento e cronograma. Tudo claro e transparente.",
    duration: "30 min",
    icon: "◇",
  },
  {
    num: "04",
    title: "Transformação",
    description:
      "Execução do tratamento com acompanhamento próximo em cada sessão, usando tecnologia de ponta e materiais premium.",
    duration: "Conforme plano",
    icon: "◆",
  },
  {
    num: "05",
    title: "Acompanhamento",
    description:
      "Retornos de avaliação, protocolo de manutenção e suporte contínuo para garantir resultados duradouros.",
    duration: "Contínuo",
    icon: "◉",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-[#C6A97A]/4 blur-[130px] pointer-events-none" />

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
              <span className="eyebrow text-[#C6A97A]">Processo</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-[clamp(2rem,4vw,3.25rem)] text-[#EAEAEA]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Uma jornada
              <br />
              cuidadosamente
              <br />
              planejada.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-[#8A8A8A] text-base max-w-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Do primeiro contato à finalização, cada etapa é conduzida com
            atenção, transparência e excelência.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting vertical line (desktop) */}
          <div className="hidden lg:block absolute left-[2.75rem] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#C6A97A]/20 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="space-y-0"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                className="group relative flex gap-8 lg:gap-12 items-start border-b border-white/5 last:border-0 py-10 hover:bg-white/2 transition-colors duration-300 px-4 -mx-4"
              >
                {/* Number + icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 border border-[#C6A97A]/20 group-hover:border-[#C6A97A]/50 bg-[#1A1A1A] flex flex-col items-center justify-center transition-colors duration-500 relative z-10">
                    <span
                      className="text-[#C6A97A] text-xs font-semibold tracking-widest"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {/* Active dot */}
                  <div className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-[#C6A97A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <h3
                      className="text-[#EAEAEA] text-xl font-semibold group-hover:text-[#C6A97A] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-[#8A8A8A] border border-white/10 px-3 py-1.5 flex-shrink-0 self-start"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    className="text-[#8A8A8A] text-sm leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Right decorative icon */}
                <div className="hidden xl:flex flex-shrink-0 items-center self-center">
                  <span className="text-[#C6A97A]/10 group-hover:text-[#C6A97A]/25 text-4xl transition-colors duration-500 font-mono">
                    {step.icon}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
