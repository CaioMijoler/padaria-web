"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Info } from "lucide-react";

export interface NutritionRow {
  label: string;
  amount: string;
  vd: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  badge: string;
  image: string;
  weight: string;
  ingredients: string;
  allergens: string[];
  nutrition: {
    portion: string;
    rows: NutritionRow[];
  };
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const contentTransition = (delay: number) => ({
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay, duration: 0.4, ease: "easeOut" as const },
});

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-surface-cream shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white active:scale-95"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product image */}
                <div className="relative flex items-center justify-center bg-white p-8">
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-secondary-container px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-on-secondary-container shadow-sm">
                    <Sparkles size={11} className="animate-pulse" />
                    {product.badge}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="w-full max-w-[340px]"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={680}
                      height={680}
                      className="h-auto w-full object-contain drop-shadow-xl"
                    />
                  </motion.div>
                </div>

                {/* Product info */}
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <motion.span
                    {...contentTransition(0.1)}
                    className="mb-2 font-display text-xs font-bold uppercase tracking-widest text-primary"
                  >
                    Pães São Sebastião
                  </motion.span>
                  <motion.h3
                    {...contentTransition(0.15)}
                    className="font-display text-2xl font-extrabold leading-tight text-gray-950 md:text-3xl"
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p
                    {...contentTransition(0.2)}
                    className="mt-1 font-sans text-sm font-semibold text-gray-500"
                  >
                    {product.weight}
                  </motion.p>
                  <motion.p
                    {...contentTransition(0.25)}
                    className="mt-4 font-sans text-[15px] leading-relaxed text-gray-700"
                  >
                    {product.description}
                  </motion.p>

                  <motion.div {...contentTransition(0.3)} className="mt-5">
                    <h4 className="font-display text-sm font-bold text-gray-900">
                      Ingredientes
                    </h4>
                    <p className="mt-1 font-sans text-[13px] leading-relaxed text-gray-600">
                      {product.ingredients}
                    </p>
                  </motion.div>

                  <motion.div
                    {...contentTransition(0.35)}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {product.allergens.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-container px-3 py-1.5 font-sans text-[11px] font-semibold text-tertiary"
                      >
                        <Info size={12} />
                        {item}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Nutrition table */}
              <div className="border-t border-gray-200/70 px-8 pb-10 pt-8 md:px-10">
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-5 w-1.5 rounded-full bg-primary" />
                  <h4 className="font-display text-xl font-extrabold text-gray-950">
                    Tabela Nutricional
                  </h4>
                </div>
                <p className="mb-5 font-sans text-[13px] text-gray-500">
                  Informações Nutricionais — porção de {product.nutrition.portion}
                </p>

                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-tertiary text-white">
                        <th className="px-5 py-3 font-display text-[13px] font-bold">
                          Quantidade por porção
                        </th>
                        <th className="px-5 py-3 text-right font-display text-[13px] font-bold">
                          %VD (*)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nutrition.rows.map((row, index) => (
                        <motion.tr
                          key={row.label}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 + index * 0.04 }}
                          className={index % 2 === 0 ? "bg-white" : "bg-surface-cream-dim"}
                        >
                          <td className="px-5 py-2.5 font-sans text-[13px] text-gray-700">
                            <span className="font-semibold text-gray-900">
                              {row.label}
                            </span>
                            {row.amount ? ` — ${row.amount}` : ""}
                          </td>
                          <td className="px-5 py-2.5 text-right font-sans text-[13px] font-semibold text-gray-700">
                            {row.vd}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 font-sans text-[11px] leading-relaxed text-gray-400">
                  (*) % Valores Diários com base em uma dieta de 2.000 kcal ou 8.400 kJ.
                  Seus valores diários podem ser maiores ou menores dependendo de suas
                  necessidades energéticas. (**) VD não estabelecido.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
