"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/utils";

const pillars = [
  {
    num: "01",
    label: "Ciência",
    desc: "Protocolos baseados em evidências clínicas internacionais.",
  },
  {
    num: "02",
    label: "Arte",
    desc: "Estética minuciosa que respeita a harmonia facial de cada paciente.",
  },
  {
    num: "03",
    label: "Cuidado",
    desc: "Relacionamento de longo prazo com foco no bem-estar integral.",
  },
];

const metrics = [
  { value: "500+", label: "Pacientes atendidos" },
  { value: "15+", label: "Anos de experiência" },
  { value: "98%", label: "Satisfação geral" },
  { value: "4", label: "Especialidades" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="section-padding bg-[#F5F3EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Top grid: text + visual ──────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="eyebrow text-[#C6A97A]">Nossa história</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-[clamp(2rem,4vw,3rem)] text-[#111111] mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Onde a medicina
              <br />
              encontra a estética.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-[#8A8A8A] text-base leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A B2 Oral Clinic nasceu da convicção de que odontologia de
              excelência vai muito além de saúde bucal. É a fusão entre
              diagnóstico preciso, técnica apurada e sensibilidade estética para
              criar sorrisos que refletem a personalidade única de cada
              paciente.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-[#8A8A8A] text-base leading-[1.9] mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nossa clínica foi projetada para ser um refúgio de tranquilidade,
              equipada com tecnologia digital de última geração e conduzida por
              especialistas com formação internacional.
            </motion.p>

            {/* Pillars */}
            <motion.div variants={staggerContainer} className="space-y-5">
              {pillars.map(({ num, label, desc }) => (
                <motion.div
                  key={num}
                  variants={fadeInUp}
                  className="flex items-start gap-5 group"
                >
                  <span
                    className="text-[#C6A97A]/40 text-xs font-medium tracking-widest mt-1 flex-shrink-0"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {num}
                  </span>
                  <div>
                    <h4
                      className="text-[#111111] font-semibold mb-1"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {label}
                    </h4>
                    <p
                      className="text-[#8A8A8A] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: visual block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInRight}
            className="relative"
          >
            {/* Main visual card */}
            <div className="relative aspect-[4/5] bg-[#111111] overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1714] via-[#111111] to-[#0D0D0D]" />

              {/* Decorative lines */}
              <div className="absolute inset-8 border border-[#C6A97A]/10" />
              <div className="absolute inset-12 border border-[#C6A97A]/5" />

              {/* Center quote */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <span className="text-[#C6A97A]/20 text-8xl font-bold leading-none mb-6"
                      style={{ fontFamily: "var(--font-poppins)" }}>
                  "
                </span>
                <p
                  className="text-[#EAEAEA] text-xl font-light leading-relaxed italic"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Cada sorriso é único. Nossa missão é revelar o melhor dele.
                </p>
                <div className="mt-8 flex flex-col items-center gap-1">
                  <span className="block w-8 h-px bg-[#C6A97A]/50" />
                  <p
                    className="text-[#C6A97A] text-xs tracking-[0.3em] uppercase mt-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Dra. Beatriz Lopes
                  </p>
                  <p
                    className="text-[#8A8A8A] text-xs"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Fundadora & Diretora Clínica
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#C6A97A]/40" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#C6A97A]/40" />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 bg-[#C6A97A] px-7 py-5">
              <p
                className="text-[#111111] text-3xl font-semibold"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                15+
              </p>
              <p
                className="text-[#111111]/70 text-xs tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Anos de excelência
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Metrics strip ─────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#111111]/8"
        >
          {metrics.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="bg-[#F5F3EE] px-8 py-10 text-center group hover:bg-[#111111] transition-colors duration-500"
            >
              <p
                className="text-4xl font-semibold text-[#111111] group-hover:text-[#C6A97A] mb-2 transition-colors duration-500"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {value}
              </p>
              <p
                className="text-[#8A8A8A] text-sm tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
