"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/utils";

const faqs = [
  {
    q: "Quanto tempo leva para fazer lentes de contato dental?",
    a: "O processo completo leva, em média, 2 a 3 semanas. Começa com a consulta de diagnóstico e planejamento digital, seguida de moldagem, confecção em laboratório especializado e instalação. Para casos mais simples, podemos realizar em sessão única utilizando resina composta.",
  },
  {
    q: "Os implantes dentais são dolorosos?",
    a: "O procedimento é realizado sob anestesia local e é praticamente indolor. No pós-operatório, pode ocorrer um desconforto leve, controlado com medicação indicada pela equipe. A maioria dos pacientes relata que a cirurgia foi muito mais tranquila do que imaginavam.",
  },
  {
    q: "O clareamento dental danifica o esmalte?",
    a: "Não, quando realizado por profissionais qualificados. Utilizamos géis com concentrações adequadas a cada caso e seguimos protocolos de segurança rigorosos. A sensibilidade transitória é o efeito mais comum, que desaparece em 24 a 48 horas.",
  },
  {
    q: "Como funciona a avaliação inicial?",
    a: "A avaliação é um encontro completo de 60 minutos onde realizamos análise facial, fotografia digital, quando necessário raio-X e planejamento de tratamento. É uma consulta sem compromisso, onde você conhece nossa clínica e entende todas as opções disponíveis.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Oferecemos diversas formas de pagamento: à vista com desconto especial, parcelamento em até 24x no cartão de crédito, e financiamento odontológico com condições exclusivas. Na consulta, apresentamos um plano financeiro personalizado de acordo com seu tratamento.",
  },
  {
    q: "A clínica atende convênios odontológicos?",
    a: "A B2 Oral Clinic é uma clínica de atendimento particular, focada em oferecer a mais alta qualidade sem as limitações impostas pelos convênios. Isso nos permite utilizar os melhores materiais e técnicas disponíveis no mercado. Emitimos nota fiscal e recibo para fins de IR.",
  },
  {
    q: "Como sei qual procedimento é ideal para mim?",
    a: "Durante a consulta de avaliação, nossa equipe realiza uma análise completa do seu caso e apresenta as opções mais adequadas ao seu objetivo estético e condição bucal atual. Não há uma solução universal — cada paciente recebe um plano totalmente personalizado.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-[#F5F3EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24">
          {/* Left sticky header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:sticky lg:top-32 self-start"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="eyebrow text-[#C6A97A]">Perguntas Frequentes</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-[clamp(2rem,3.5vw,2.75rem)] text-[#111111] mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Temos as
              <br />
              respostas que
              <br />
              você precisa.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#8A8A8A] text-base leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Não encontrou o que procura? Nossa equipe está disponível para
              esclarecer qualquer dúvida diretamente pelo WhatsApp.
            </motion.p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="divide-y divide-[#111111]/8"
          >
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full text-left py-7 flex items-start justify-between gap-6 group"
                >
                  <span
                    className="text-[#111111] group-hover:text-[#C6A97A] font-medium text-base leading-snug transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                      open === idx
                        ? "border-[#C6A97A] bg-[#C6A97A] rotate-45"
                        : "border-[#111111]/15 group-hover:border-[#C6A97A]/50"
                    }`}
                  >
                    <Plus
                      size={14}
                      className={
                        open === idx ? "text-[#111111]" : "text-[#8A8A8A]"
                      }
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {open === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-[#8A8A8A] text-sm leading-[1.9] pb-7 pr-12"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
