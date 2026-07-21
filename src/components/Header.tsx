"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MapPin } from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Nossa História", href: "#historia" },
    { label: "Produtos", href: "#produtos" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contato" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

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

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-100"
            : "bg-gradient-to-b from-black/60 to-transparent py-4 text-white"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer"
          >
            <Logo className="h-14 md:h-16 transition-transform hover:scale-102" priority />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`font-sans text-[15px] font-medium tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center ${
                  isScrolled
                    ? "text-gray-800 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/onde-encontrar"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-[14px] font-display font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MapPin size={15} className="group-hover:animate-bounce" />
              Onde Encontrar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-display text-lg font-semibold text-gray-800 hover:text-primary transition-colors py-1 border-b border-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/onde-encontrar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-display font-semibold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all text-center mt-2"
              >
                <MapPin size={18} />
                Onde Encontrar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
