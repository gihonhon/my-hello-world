"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { PixelIcon } from "@/components/pixel-art";

const links = [{ id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "projects", label: "Projects" }, { id: "contact", label: "Contact" }];

export function PortfolioNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const current = [...links].sort((a, b) => {
        const topA = document.getElementById(a.id)?.offsetTop ?? 0;
        const topB = document.getElementById(b.id)?.offsetTop ?? 0;
        return topB - topA;
      }).find(({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 180);
      if (current) setActive(current.id);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const night = mounted && resolvedTheme === "dark";
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand" aria-label="Gihonhon — kembali ke beranda"><PixelIcon name="face" /><span>GIHONHON<span className="brand-suffix">.DEV</span></span></a>
        <span className="header-note">A developer&apos;s little overworld</span>
        <div className="header-controls">
          <button className="square-button" onClick={() => setTheme(night ? "light" : "dark")} aria-label={night ? "Ubah ke suasana siang" : "Ubah ke suasana malam"} title={night ? "Day mode" : "Night mode"}>{night ? <Moon size={18} /> : <Sun size={18} />}</button>
          <button className="square-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Tutup navigasi" : "Buka navigasi"}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        <nav id="main-navigation" className={`main-navigation ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          {links.map(({ id, label }) => <a key={id} href={`#${id}`} className={`block-button nav-button ${active === id ? "is-active" : ""}`} aria-current={active === id ? "location" : undefined} onClick={() => { setActive(id); setOpen(false); }}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
