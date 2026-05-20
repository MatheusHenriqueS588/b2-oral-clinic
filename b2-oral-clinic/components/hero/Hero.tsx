"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const avatarColors = ["#2A2A2A", "#333", "#2D2D2D", "#3A3A3A"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* ── Ambient background ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#C6A97A]/4 blur-[140px]" />
        {/* Top-right accent */}
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#C6A97A]/5 blur-[100px]" />
        {/* Grid lines overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#C6A97A 1px, transparent 1px), linear-gradient(90deg, #C6A97A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Parallax content wrapper ──────────────────────── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="block w-12 h-px bg-[#C6A97A]" />
            <span className="eyebrow text-[#C6A97A]">
              Odontologia Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-[clamp(3rem,8vw,6.5rem)] text-[#EAEAEA] mb-8"
          >
            A Arte da{" "}
            <em
              className="not-italic text-[#C6A97A]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Perfeição
            </em>
            <br />
            Dental.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#8A8A8A] text-lg md:text-xl leading-relaxed max-w-xl mb-12"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Transformamos sorrisos com precisão cirúrgica, estética refinada e
            uma experiência que transcende o convencional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C6A97A] hover:bg-[#D4BB94] text-[#111111] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.847L0 24l6.307-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.006-1.37l-.36-.214-3.737.898.937-3.64-.235-.374A9.817 9.817 0 012.182 12c0-5.419 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
              </svg>
              Agendar Avaliação
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center justify-center gap-2 border border-[#EAEAEA]/15 text-[#EAEAEA] hover:border-[#C6A97A] hover:text-[#C6A97A] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Ver Procedimentos
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-2.5">
              {avatarColors.map((c, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-xs text-[#C6A97A] font-semibold"
                  style={{ background: c }}
                >
                  {["AM", "RC", "PL", "JS"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-[#C6A97A] fill-[#C6A97A]"
                  />
                ))}
              </div>
              <p
                className="text-[#8A8A8A] text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                +500 sorrisos transformados
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div className="hidden sm:block">
              <p className="text-[#EAEAEA] text-2xl font-semibold"
                 style={{ fontFamily: "var(--font-poppins)" }}>
                5.0
              </p>
              <p className="text-[#8A8A8A] text-xs tracking-wide">Google Reviews</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Decorative vertical text ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6"
      >
        <span className="block w-px h-16 bg-[#C6A97A]/30" />
        <span
          className="text-[#8A8A8A]/40 text-[10px] tracking-[0.4em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          B2 Oral Clinic — 2024
        </span>
        <span className="block w-px h-16 bg-[#C6A97A]/30" />
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="eyebrow text-[#8A8A8A]/50 text-[10px]">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#C6A97A]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
