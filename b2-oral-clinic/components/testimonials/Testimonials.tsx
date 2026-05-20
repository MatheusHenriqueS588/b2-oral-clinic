"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/utils";

const testimonials = [
  {
    name: "Amanda Rocha",
    role: "Executiva de Marketing",
    initials: "AR",
    rating: 5,
    text: "A experiência na B2 Oral Clinic foi absolutamente transformadora. Desde o primeiro contato até o resultado final das minhas lentes, me senti cuidada e respeitada em cada etapa. O ambiente é de um refinamento que pouquíssimas clínicas conseguem oferecer.",
    procedure: "Lentes de Contato Dental",
    color: "#2D2820",
  },
  {
    name: "Ricardo Mendes",
    role: "Empresário",
    initials: "RM",
    rating: 5,
    text: "Fiz dois implantes e o processo foi muito além das minhas expectativas. A tecnologia guiada por computador é impressionante — cirurgia em menos de uma hora, sem dor e com resultado perfeito. Recomendo sem hesitar para quem busca o melhor.",
    procedure: "Implantes Dentais",
    color: "#251E1A",
  },
  {
    name: "Priscila Lemos",
    role: "Arquiteta",
    initials: "PL",
    rating: 5,
    text: "Vim para um clareamento e saí completamente apaixonada pela experiência. A Dra. Beatriz tem um olhar estético único — ela entende o que cada paciente precisa antes mesmo de você saber. Meu sorriso nunca foi tão natural e luminoso.",
    procedure: "Clareamento Premium",
    color: "#221D19",
  },
  {
    name: "João Silveira",
    role: "Médico",
    initials: "JS",
    rating: 5,
    text: "Como profissional de saúde, sou extremamente criterioso. A B2 Oral Clinic foi a única clínica que atendeu todos os meus critérios: esterilização impecável, equipe altamente qualificada e tecnologia de ponta. Diferencial absoluto.",
    procedure: "Harmonização Facial",
    color: "#201C18",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section
      id="depoimentos"
      className="section-padding bg-[#F5F3EE] relative overflow-hidden"
    >
      {/* Decorative large quote */}
      <div
        className="absolute top-0 right-0 text-[20rem] font-bold text-[#111111]/3 leading-none pointer-events-none select-none"
        style={{ fontFamily: "var(--font-poppins)" }}
        aria-hidden
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-5">
            <span className="gold-line" />
            <span className="eyebrow text-[#C6A97A]">Depoimentos</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="heading-lg text-[clamp(2rem,4vw,3.25rem)] text-[#111111] max-w-xl"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Histórias de
            <br />
            transformação real.
          </motion.h2>
        </motion.div>

        {/* Desktop: 4-column grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="hidden lg:grid lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              style={{ transitionDelay: `${i * 0.08}s` }}
              className="group"
            >
              <div
                className="h-full flex flex-col bg-white border border-[#111111]/6 p-7 hover:border-[#C6A97A]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Quote icon */}
                <Quote
                  className="w-7 h-7 text-[#C6A97A]/40 mb-6 flex-shrink-0"
                  strokeWidth={1.5}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-3 h-3 text-[#C6A97A] fill-[#C6A97A]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-[#555555] text-sm leading-[1.85] flex-1 mb-7"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-[#111111]/8 mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#C6A97A] text-xs font-semibold flex-shrink-0"
                    style={{ background: t.color, fontFamily: "var(--font-poppins)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-[#111111] text-sm font-semibold"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[#8A8A8A] text-xs"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Procedure tag */}
                <div className="mt-4">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[#C6A97A] bg-[#C6A97A]/8 px-3 py-1.5 border border-[#C6A97A]/20"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.procedure}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#111111]/6 p-7"
          >
            <Quote className="w-7 h-7 text-[#C6A97A]/40 mb-5" strokeWidth={1.5} />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, si) => (
                <Star key={si} className="w-3 h-3 text-[#C6A97A] fill-[#C6A97A]" />
              ))}
            </div>
            <p
              className="text-[#555555] text-base leading-[1.85] mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="h-px bg-[#111111]/8 mb-5" />
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#C6A97A] text-xs font-semibold"
                style={{ background: testimonials[current].color, fontFamily: "var(--font-poppins)" }}
              >
                {testimonials[current].initials}
              </div>
              <div>
                <p className="text-[#111111] text-sm font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                  {testimonials[current].name}
                </p>
                <p className="text-[#8A8A8A] text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile controls */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-[#8A8A8A] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              {current + 1} / {total}
            </span>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 border border-[#111111]/15 hover:border-[#C6A97A] flex items-center justify-center transition-colors duration-300"
              >
                <ChevronLeft size={16} className="text-[#111111]" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-[#111111]/15 hover:border-[#C6A97A] flex items-center justify-center transition-colors duration-300"
              >
                <ChevronRight size={16} className="text-[#111111]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
