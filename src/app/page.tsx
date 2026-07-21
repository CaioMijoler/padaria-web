import Hero from "@/components/Hero";
import HistorySection from "@/components/HistorySection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* Seção de introdução / capa */}
      <Hero />

      {/* Seção Sobre — Nossa História */}
      <HistorySection />

      {/* Seção Diferenciais */}
      <FeaturesSection />

      {/* Seção Produtos / Serviços */}
      <ProductsSection />

      {/* Seção Destaques, Blog e Chamadas para ação */}
      <CTASection />
    </>
  );
}
