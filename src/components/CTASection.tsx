"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function CTASection() {
  const blogPosts = [
    {
      title: "O segredo do pão perfeito",
      category: "Dicas",
      excerpt: "Descubra as técnicas e segredos por trás de um pão de hambúrguer super macio e estruturado.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Receitas com Batata Palha",
      category: "Receitas",
      excerpt: "Aprenda a fazer pratos deliciosos e crocantes utilizando nossa Batata Palha Maxi Fritet.",
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Pães e Vinhos",
      category: "Harmonização",
      excerpt: "Guia completo de harmonização para elevar a sua experiência gastronômica.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="blog" className="bg-white">
      {/* 1. SECTION: A Arte do Hambúrguer (Dark, Atmospheric) */}
      <section className="relative py-24 md:py-32 bg-gray-950 overflow-hidden text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop"
            alt="Hambúrguer Gourmet"
            className="w-full h-full object-cover opacity-20 scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 bg-primary/20 text-red-400 font-display text-[12px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6 border border-primary/30"
              >
                <Flame size={12} className="animate-pulse" />
                <span>Premium Burger Line</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              >
                A Arte do <br />
                <span className="text-secondary-container">Hambúrguer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              >
                Seu hambúrguer merece o pão perfeito. Maciez, sabor e estrutura impecável desenvolvidos com rigor para sustentar o molho e elevar o seu lanche a um nível profissional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button
                  onClick={() => handleScrollToSection("#produtos")}
                  className="bg-primary hover:bg-primary-hover text-white text-sm font-display font-bold tracking-wider uppercase px-8 py-4 rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Ver nossa Linha de Hambúrguer
                </button>
              </motion.div>
            </div>

            {/* Visual Column — Brand Burger Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex justify-center relative"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/buguer-paes-sao-sebastiao.png"
                  alt="Hambúrguer com pão Pães São Sebastião — seu lanche muito mais gostoso"
                  width={1024}
                  height={341}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. SECTION: Blog & Receitas */}
      <section className="py-24 bg-surface-cream overflow-hidden">
        <Container>
          <SectionTitle
            title="Blog & Receitas"
            subtitle="Dicas de preparo, harmonização e receitas para deixar seus momentos ainda mais saborosos."
            align="center"
            id="titulo-blog"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Image thumb */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-display font-extrabold text-primary uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-950 mb-3 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="font-sans text-gray-500 text-[14px] leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <a
                    href="#blog"
                    className="inline-flex items-center gap-1.5 text-[13px] font-display font-bold text-primary hover:text-primary-hover group"
                  >
                    Ler matéria
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. SECTION: Venha Conhecer / Brand Action Banner */}
      <section className="relative py-20 bg-primary overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          {/* Subtle abstract glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary to-primary-container opacity-95" />
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary-container opacity-10 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Copy */}
            <div className="max-w-2xl text-left">
              <span className="inline-flex items-center gap-1 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-display font-extrabold uppercase tracking-widest mb-4">
                <Sparkles size={12} />
                Sabor e Maciez Incomparáveis
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-tight mb-4">
                Venha conhecer a Pães São Sebastião
              </h2>
              <p className="font-sans text-white/80 text-base md:text-lg">
                Leve o pão mais gostoso e fofinho para o seu lanche ou churrasco de final de semana!
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/onde-encontrar"
                className="bg-secondary-container hover:bg-white text-on-secondary-container font-display font-bold text-[14px] tracking-wide uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Onde Encontrar
              </Link>
              <button
                onClick={() => handleScrollToSection("#contato")}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-bold text-[14px] tracking-wide uppercase px-8 py-4 rounded-full transition-all duration-300"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
