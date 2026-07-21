"use client";

import React from "react";
import { motion } from "motion/react";
import { ChefHat, Wheat, Users, HeartHandshake } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function FeaturesSection() {
  const features = [
    {
      icon: <ChefHat className="w-5 h-5" />,
      title: "Produção Artesanal",
      description: "Processo cuidadoso focado na qualidade e no sabor autêntico de cada pão.",
      iconBg: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Wheat className="w-5 h-5" />,
      title: "Ingredientes Selecionados",
      description: "Trabalhamos apenas com farinhas nobres e insumos rigorosamente selecionados.",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Tradição Familiar",
      description: "Receitas guardadas a sete chaves, passadas com amor de geração em geração.",
      iconBg: "bg-green-100 text-green-600",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Atendimento de Qualidade",
      description: "Compromisso em servir o melhor para nossos parceiros e clientes com dedicação.",
      iconBg: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
      <Container>
        {/* Section Heading */}
        <SectionTitle
          title="O que nos torna únicos"
          subtitle="Seguimos à risca cada detalhe do nosso processo para entregar sempre o melhor produto."
          align="center"
          id="titulo-features"
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 items-start text-left"
            >
              {/* Icon Container with background wrapper */}
              <div className={`w-10 h-10 ${feature.iconBg} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                {feature.icon}
              </div>

              <div>
                {/* Title */}
                <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-slate-500 text-[13px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
