"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Navigation, ExternalLink, ArrowLeft } from "lucide-react";
import Container from "@/components/Container";

interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  lat: number;
  lng: number;
}

const LOCATIONS: StoreLocation[] = [
  {
    id: "matriz-franca",
    name: "Matriz — Fábrica Pães São Sebastião",
    address: "Rua Padre Conrado, 1053 - Vila Nova",
    city: "Franca - SP, 14.405-275",
    phone: "(16) 3722-2600",
    lat: -20.5386,
    lng: -47.4008,
  },
  {
    id: "centro-franca",
    name: "Loja Centro",
    address: "Av. Major Nicácio, 1500 - Centro",
    city: "Franca - SP",
    phone: "(16) 3722-2601",
    lat: -20.5402,
    lng: -47.4009,
  },
  {
    id: "ribeirao-preto",
    name: "Ponto de Venda — Ribeirão Preto",
    address: "Av. Presidente Vargas, 2200 - Jardim Santa Ângela",
    city: "Ribeirão Preto - SP",
    lat: -21.1775,
    lng: -47.8103,
  },
  {
    id: "uberaba",
    name: "Ponto de Venda — Uberaba",
    address: "Av. Leopoldino de Oliveira, 3000 - Centro",
    city: "Uberaba - MG",
    lat: -19.7472,
    lng: -47.9381,
  },
];

export default function OndeEncontrarPage() {
  const [activeId, setActiveId] = useState<string>(LOCATIONS[0].id);
  const activeLocation =
    LOCATIONS.find((location) => location.id === activeId) ?? LOCATIONS[0];

  const mapSrc = `https://maps.google.com/maps?q=${activeLocation.lat},${activeLocation.lng}&z=15&hl=pt-BR&output=embed`;

  const buildDirectionsUrl = (location: StoreLocation) =>
    `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

  const buildSearchUrl = (location: StoreLocation) =>
    `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

  return (
    <>
      {/* Top Banner */}
      <section className="relative bg-gradient-to-br from-gray-950 via-tertiary to-gray-950 pt-32 pb-16 md:pt-40 md:pb-20 text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <Container className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-sans mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para a página inicial
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container font-display text-[12px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg mb-5">
              <MapPin size={13} />
              Onde Encontrar
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 max-w-2xl">
              Encontre os Pães São Sebastião pertinho de você
            </h1>
            <p className="font-sans text-gray-200 text-base md:text-lg max-w-2xl leading-relaxed">
              Selecione um dos nossos pontos de venda para visualizar a
              localização no mapa e traçar a sua rota.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Map + Locations */}
      <section className="py-16 md:py-20 bg-surface-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Locations List */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h2 className="font-display text-xl font-extrabold text-gray-950 mb-1">
                Nossos pontos de venda
              </h2>

              {LOCATIONS.map((location, index) => {
                const isActive = location.id === activeId;
                return (
                  <motion.button
                    key={location.id}
                    onClick={() => setActiveId(location.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className={`text-left rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-primary bg-white shadow-lg shadow-primary/10 ring-1 ring-primary/30"
                        : "border-gray-200 bg-white/70 hover:bg-white hover:border-primary/40 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <MapPin size={18} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-display font-bold text-[15px] text-gray-950 leading-snug">
                          {location.name}
                        </h3>
                        <p className="font-sans text-[13px] text-gray-600 mt-1 leading-relaxed">
                          {location.address}
                          <br />
                          {location.city}
                        </p>
                        {location.phone && (
                          <p className="font-sans text-[13px] text-gray-500 mt-1.5 flex items-center gap-1.5">
                            <Phone size={13} className="text-primary" />
                            {location.phone}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2 mt-3">
                          <a
                            href={buildDirectionsUrl(location)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white font-display font-semibold text-[12px] px-3.5 py-2 rounded-full transition-colors"
                          >
                            <Navigation size={13} />
                            Como chegar
                          </a>
                          <a
                            href={buildSearchUrl(location)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-primary/40 text-gray-700 font-display font-semibold text-[12px] px-3.5 py-2 rounded-full transition-colors"
                          >
                            <ExternalLink size={13} />
                            Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Map */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-[360px] sm:h-[460px] lg:h-full lg:min-h-[560px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100"
              >
                <iframe
                  title={`Mapa - ${activeLocation.name}`}
                  src={mapSrc}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
