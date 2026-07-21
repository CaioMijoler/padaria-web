"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

interface CarouselImage {
  src: string;
  srcLarge?: string;
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    src: "/carrosel/foto_padaria.jpg",
    srcLarge: "/carrosel/foto_padaria.jpeg",
  },
  { src: "/carrosel/foto_padaria_2.jpeg" },
  { src: "/carrosel/foto_padaria_3.jpeg" },
];

const LARGE_SCREEN_QUERY = "(min-width: 1500px)";
const CAROUSEL_INTERVAL_MS = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20"
    >
      {/* Background Carousel with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <picture>
              {CAROUSEL_IMAGES[activeIndex].srcLarge && (
                <source
                  media={LARGE_SCREEN_QUERY}
                  srcSet={CAROUSEL_IMAGES[activeIndex].srcLarge}
                />
              )}
              <img
                src={CAROUSEL_IMAGES[activeIndex].src}
                alt="Padaria artesanal"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-gray-950/40 z-10" />
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={goToPrevious}
        aria-label="Imagem anterior"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        aria-label="Próxima imagem"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content Container */}
      <Container className="relative z-20 text-white py-16 md:py-24 text-center max-w-4xl flex flex-col items-center">
        {/* Established Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container font-display text-[12px] md:text-[13px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg"
        >
          <span>Desde 1950</span>
          <span className="w-1 h-1 rounded-full bg-on-secondary-container/60" />
          <span>Tradição Familiar</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.15] mb-6 max-w-2xl drop-shadow-lg"
        >
          Há mais de <span className="text-secondary-container">70 anos</span>{" "}
          levando tradição, sabor e qualidade para sua mesa.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-gray-100 text-base md:text-lg lg:text-[18px] leading-relaxed max-w-2xl mb-10 drop-shadow-md"
        >
          Com muito orgulho, somos a{" "}
          <span className="font-semibold text-white">Pães São Sebastião</span>.
          Descubra a verdadeira essência de produtos artesanais feitos com
          carinho, tradição e receitas rigorosamente selecionadas.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollToSection("#historia")}
            className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-display font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Conheça nossa História
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => handleScrollToSection("#produtos")}
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white text-base font-display font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver Produtos
          </button>
        </motion.div>
      </Container>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2.5">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para a imagem ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-7 bg-secondary-container"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => handleScrollToSection("#historia")}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="font-sans text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
