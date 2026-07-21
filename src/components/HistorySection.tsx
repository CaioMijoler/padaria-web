"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, Sparkles, Heart } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function HistorySection() {
  const metrics = [
    {
      value: "70+",
      label: "ANOS",
      description: "Anos de Tradição",
      icon: <Award className="text-primary w-6 h-6" />,
    },
    {
      value: "100%",
      label: "ARTESANAL",
      description: "Receita Original",
      icon: <Sparkles className="text-secondary w-6 h-6" />,
    },
    {
      value: "Família",
      label: "TRADIÇÃO",
      description: "No preparo diário",
      icon: <Heart className="text-primary w-6 h-6" />,
    },
  ];

  return (
    <section id="historia" className="py-20 md:py-28 bg-surface-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with layered shadows */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient decorative background pattern */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-secondary-container/10 rounded-2xl -z-10" />
            
            <div className="overflow-hidden rounded-2xl shadow-xl aspect-square bg-gray-100 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
                alt="Mãos sovando massa de pão com farinha"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Tiny accent badge */}
            <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3 border border-gray-50 max-w-xs">
              <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-gray-900 text-[14px]">Feito à Mão</p>
                <p className="font-sans text-[12px] text-gray-500">Massa sovada diariamente</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionTitle
              title="Nossa História"
              align="left"
              id="titulo-historia"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-gray-900 text-xl md:text-2xl font-bold leading-snug mb-8 border-l-4 border-primary pl-5"
            >
              Há mais de sete décadas, a Pães São Sebastião leva aos brasileiros o sabor inconfundível do verdadeiro pão.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-gray-700 text-base md:text-[17px] leading-relaxed space-y-6 mb-10"
            >
              <p>
                A <strong className="text-gray-950 font-semibold">Pães São Sebastião</strong> nasceu do sonho de produzir alimentos com sabor autêntico e de alta qualidade. Desde 1950, de geração em geração, mantemos vivas as receitas tradicionais e o carinho no preparo de cada fornada.
              </p>
              <p>
                Unimos técnicas artesanais passadas por nossos fundadores com processos modernos de seleção de insumos para garantir o pão mais fofinho, o aroma inesquecível de padaria e uma textura sem igual que eleva qualquer momento em família.
              </p>
            </motion.div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 border-t border-gray-200/60">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center text-center md:items-start md:text-left bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-gray-200/40"
                >
                  <div className="mb-2 bg-gray-100 p-2 rounded-lg inline-block">
                    {metric.icon}
                  </div>
                  <span className="font-display font-extrabold text-2xl md:text-3xl text-gray-950 tracking-tight leading-none mb-1">
                    {metric.value}
                  </span>
                  <span className="font-sans font-bold text-[11px] tracking-widest text-primary uppercase mb-1">
                    {metric.label}
                  </span>
                  <span className="font-sans text-gray-500 text-[12px] leading-tight">
                    {metric.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
