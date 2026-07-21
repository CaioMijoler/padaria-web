"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Send, CheckCircle, Instagram, Facebook, Youtube } from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
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
    <footer id="contato" className="bg-gray-100 border-t border-gray-200/50 pt-20 pb-8 text-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-gray-200">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Logo className="h-16 mb-6" />
            <p className="font-sans text-gray-600 text-[15px] leading-relaxed mb-6 max-w-sm">
              Levando o melhor sabor e a maior maciez para a mesa das famílias brasileiras desde 1950. Tradição familiar com qualidade premium em cada fornada.
            </p>
            <div className="flex gap-4">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/paessaosebastiao/",
                  icon: <Instagram size={18} />,
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/psspaessaosebastiao",
                  icon: <Facebook size={18} />,
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/channel/UCCB07A5trV428ffu79YMmqw",
                  icon: <Youtube size={18} />,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all duration-300"
                  aria-label={`Siga-nos no ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h3 className="font-display font-extrabold text-[15px] tracking-wider uppercase text-gray-900 mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3.5">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Nossa História", href: "#historia" },
                { label: "Produtos", href: "#produtos" },
                { label: "Blog & Dicas", href: "#blog" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="font-sans text-[14px] text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h3 className="font-display font-extrabold text-[15px] tracking-wider uppercase text-gray-900 mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="font-sans text-[14px] text-gray-600 leading-relaxed">
                  Padre Conrado, 1053 - Vila Nova, Franca - SP, CEP: 14.405-275
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div className="font-sans text-[14px] text-gray-600 flex flex-col">
                  <a href="tel:+551637222600" className="hover:text-primary transition-colors">
                    (16) 3722-2600
                  </a>
                  <a href="tel:+551637222601" className="hover:text-primary transition-colors">
                    (16) 3722-2601
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:contato@paessaosebastiao.com.br"
                  className="font-sans text-[14px] text-gray-600 hover:text-primary cursor-pointer transition-colors break-all"
                >
                  contato@paessaosebastiao.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Form (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h3 className="font-display font-extrabold text-[15px] tracking-wider uppercase text-gray-900 mb-6">
              Fale Conosco
            </h3>
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex flex-col gap-2 items-center text-center w-full shadow-sm"
                >
                  <CheckCircle className="text-green-600 w-8 h-8" />
                  <p className="font-display font-bold text-sm">Mensagem Enviada!</p>
                  <p className="font-sans text-[12px] text-green-700 leading-tight">
                    Agradecemos seu contato. Responderemos o mais breve possível.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-3"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="sr-only">Seu Nome</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 font-sans text-[14px] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="sr-only">Seu E-mail</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Seu E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 font-sans text-[14px] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                    />
                  </div>

                  {/* Message Area */}
                  <div>
                    <label htmlFor="message" className="sr-only">Sua Mensagem</label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      placeholder="Sua Mensagem"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 font-sans text-[14px] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-display font-bold text-[13px] tracking-wider uppercase py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Enviar Mensagem</span>
                        <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom copyright line and certification links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-200/50 mt-8">
          <p className="font-sans text-gray-500 text-[12px] text-center md:text-left">
            © {new Date().getFullYear()} Pães São Sebastião. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#inicio" className="font-sans text-gray-500 hover:text-primary text-[12px] transition-colors">
              Políticas de Privacidade
            </a>
            <a href="#inicio" className="font-sans text-gray-500 hover:text-primary text-[12px] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
