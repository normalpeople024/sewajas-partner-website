import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const links = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#program", label: "Program Mitra" },
  { href: "#keuntungan", label: "Keuntungan" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-luxe"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background:
                "color-mix(in oklab, var(--navy-deep) 92%, transparent)",
            }
          : {}
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 text-primary-foreground"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-gradient">
              <GraduationCap className="h-6 w-6 text-[var(--navy-deep)]" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              sewajas<span className="text-gold">.net</span>
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-primary-foreground/85 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-[var(--navy-deep)] shadow-gold-glow hover:opacity-95 transition"
          >
            Ajukan Kerja Sama
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 text-primary-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden pb-6 pt-2 space-y-1 bg-[var(--navy-deep)] rounded-b-xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-primary-foreground/90 hover:bg-white/5 hover:text-gold rounded"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 mt-3 inline-flex items-center rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-[var(--navy-deep)]"
            >
              Ajukan Kerja Sama
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
