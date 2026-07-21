"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import ProductModal, { Product } from "./ProductModal";

const PRODUCTS: Product[] = [
  {
    id: "pao-tradicional",
    name: "Pão de Alho Tradicional",
    description:
      "Pão super macio com recheio cremoso do tradicional creme de alho gourmet.",
    badge: "Gourmet",
    image: "/products/product-1.png",
    weight: "400 g",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, creme de alho (margarina, alho, sal e salsa), fermento biológico, açúcar e sal.",
    allergens: ["CONTÉM GLÚTEN", "PODE CONTER LEITE, OVO E SOJA"],
    nutrition: {
      portion: "50 g",
      rows: [
        { label: "Valor Calórico", amount: "150 kcal · 628 kJ", vd: "8%" },
        { label: "Carboidratos", amount: "20 g", vd: "7%" },
        { label: "Proteínas", amount: "3,2 g", vd: "4%" },
        { label: "Gorduras Totais", amount: "6 g", vd: "11%" },
        { label: "Gorduras Saturadas", amount: "2,5 g", vd: "11%" },
        { label: "Gorduras Trans", amount: "0 g", vd: "**" },
        { label: "Fibra Alimentar", amount: "1,2 g", vd: "5%" },
        { label: "Sódio", amount: "290 mg", vd: "12%" },
      ],
    },
  },
  {
    id: "batata-palha",
    name: "Batata Palha Maxi Fritei",
    description:
      "Batata palha super fininha e crocante, o acompanhamento perfeito para suas refeições.",
    badge: "Crocante",
    image: "/products/product-3.png",
    weight: "500 g",
    ingredients: "Batata, gordura vegetal e sal iodado.",
    allergens: ["PODE CONTER TRAÇOS DE SOJA", "NÃO CONTÉM GLÚTEN"],
    nutrition: {
      portion: "60 g",
      rows: [
        { label: "Valor Calórico", amount: "132 kcal · 554 kJ", vd: "7%" },
        { label: "Carboidratos", amount: "15 g", vd: "5%" },
        { label: "Proteínas", amount: "1,7 g", vd: "2%" },
        { label: "Gorduras Totais", amount: "3,5 g", vd: "6%" },
        { label: "Gorduras Saturadas", amount: "0,9 g", vd: "4%" },
        { label: "Gorduras Trans", amount: "0 g", vd: "**" },
        { label: "Fibra Alimentar", amount: "0,9 g", vd: "4%" },
        { label: "Sódio", amount: "147 mg", vd: "6%" },
      ],
    },
  },
  {
    id: "pao-cebola",
    name: "Pão de Alho Cebola",
    description:
      "Sabor irresistível de cebola com o tradicional creme de alho selecionado.",
    badge: "Especial",
    image: "/products/product-2.png",
    weight: "400 g",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, creme de alho e cebola (margarina, alho, cebola, sal e salsa), fermento biológico, açúcar e sal.",
    allergens: ["CONTÉM GLÚTEN", "PODE CONTER LEITE, OVO E SOJA"],
    nutrition: {
      portion: "50 g",
      rows: [
        { label: "Valor Calórico", amount: "152 kcal · 636 kJ", vd: "8%" },
        { label: "Carboidratos", amount: "20 g", vd: "7%" },
        { label: "Proteínas", amount: "3,3 g", vd: "4%" },
        { label: "Gorduras Totais", amount: "6,2 g", vd: "11%" },
        { label: "Gorduras Saturadas", amount: "2,6 g", vd: "12%" },
        { label: "Gorduras Trans", amount: "0 g", vd: "**" },
        { label: "Fibra Alimentar", amount: "1,3 g", vd: "5%" },
        { label: "Sódio", amount: "300 mg", vd: "13%" },
      ],
    },
  },
  {
    id: "pao-requeijao",
    name: "Pão de Alho Requeijão",
    description:
      "Combinação dos deuses de requeijão cremoso e alho assado em um pão irresistível.",
    badge: "Cremoso",
    image: "/products/product-4.png",
    weight: "400 g",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, recheio de requeijão e alho (requeijão, margarina, alho, sal e salsa), fermento biológico, açúcar e sal.",
    allergens: ["CONTÉM GLÚTEN", "CONTÉM LEITE", "PODE CONTER OVO E SOJA"],
    nutrition: {
      portion: "50 g",
      rows: [
        { label: "Valor Calórico", amount: "165 kcal · 690 kJ", vd: "8%" },
        { label: "Carboidratos", amount: "19 g", vd: "6%" },
        { label: "Proteínas", amount: "3,8 g", vd: "5%" },
        { label: "Gorduras Totais", amount: "7,5 g", vd: "14%" },
        { label: "Gorduras Saturadas", amount: "3,2 g", vd: "15%" },
        { label: "Gorduras Trans", amount: "0,1 g", vd: "**" },
        { label: "Fibra Alimentar", amount: "1,1 g", vd: "4%" },
        { label: "Sódio", amount: "320 mg", vd: "13%" },
      ],
    },
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="produtos" className="py-24 bg-secondary-container relative overflow-hidden">
      {/* Decorative bread-dust background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/5 pointer-events-none" />

      <Container>
        {/* Header containing Section Title and View All Action */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionTitle
            title="Nossos Produtos"
            subtitle="Receitas exclusivas elaboradas com carinho para surpreender o seu paladar."
            align="left"
            theme="yellow"
            id="titulo-produtos"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex shrink-0"
          >
            <Link
              href="/onde-encontrar"
              className="inline-flex items-center gap-2 text-slate-900 hover:text-primary font-display font-bold text-sm tracking-wider uppercase bg-white px-5 py-3 rounded-full shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-slate-200/50"
            >
              Onde Comprar
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* 4-column product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              badge={product.badge}
              image={product.image}
              index={index}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </Container>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
