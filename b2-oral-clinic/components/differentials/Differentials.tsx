"use client";

import { motion } from "framer-motion";
import { Microscope, Award, Clock, Heart } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/utils";

const items = [
  {
    icon: Microscope,
    title: "Tecnologia de Ponta",
    description:
      "Equipamentos de última geração para diagnósticos precisos e tratamentos minimamente invasivos.",
    stat: "100%",
    statLabel: "Digital",
  },
  {
    icon: Award,
    title: "Excelência Clínica",
    description:
      "Equipe de especialistas formados nas melhores instituições do Brasil e do exterior.",
    stat: "15+",
    statLabel: "Anos de expertise",
  },
  {
    icon: Clock,
    title: "Atendimento Exclusivo",
    description:
      "Consultas com hora marcada respeitadas ao minuto. Seu tempo é tão valioso quanto o nosso.",
    stat: "0",
    statLabel: "Espera",
  },
  {
    icon: Heart,
    title: "Experiência Premium",
    description:
      "Ambiente projetado para seu conforto, com atendimento personalizado do início ao fim.",
    stat: "500+",
    statLabel: "Pacientes satisfeitos",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
              <span className="eyebrow text-[#C6A97A]">Por que nos escolher</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-[clamp(2rem,4vw,3.25rem)] text-[#111111]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Uma experiência além
              <br />
              do esperado.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-[#8A8A8A] text-base leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Cada detalhe da B2 Oral Clinic foi pensado para oferecer o mais alto
            nível de cuidado odontológico, aliando ciência e estética.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#111111]/8"
        >
          {items.map(({ icon: Icon, title, description, stat, statLabel }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="group relative bg-[#F5F3EE] p-8 lg:p-10 hover:bg-[#111111] transition-colors duration-500 cursor-default"
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="w-12 h-12 border border-[#C6A97A]/30 group-hover:border-[#C6A97A]/60 flex items-center justify-center transition-colors duration-500">
                  <Icon
                    className="w-5 h-5 text-[#C6A97A] transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-[#111111] group-hover:text-[#EAEAEA] text-lg font-semibold mb-3 transition-colors duration-500"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="text-[#8A8A8A] group-hover:text-[#8A8A8A] text-sm leading-relaxed mb-8 transition-colors duration-500"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {description}
              </p>

              {/* Stat */}
              <div className="border-t border-[#111111]/10 group-hover:border-white/10 pt-6 transition-colors duration-500">
                <p
                  className="text-3xl font-semibold text-[#C6A97A] leading-none mb-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {stat}
                </p>
                <p
                  className="text-[#8A8A8A] text-xs tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {statLabel}
                </p>
              </div>

              {/* Hover top border accent */}
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#C6A97A] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
