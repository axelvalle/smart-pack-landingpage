'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Tipos', href: '#tipos' },
  { label: 'Estilos', href: '#estilos' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Equipo', href: '#equipo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF9F2]/95 dark:bg-[#0F1A14]/95 backdrop-blur-md shadow-sm border-b border-[#F1E6D8] dark:border-[#243832]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
          aria-label="Ir al inicio"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#DDF3E8] flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Smart Pack logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span
            className="font-bold text-lg tracking-tight text-[#1F6B4F]"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Smart <span className="text-[#F58A2A]">Pack</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 rounded-full text-sm font-medium text-[#263238] hover:text-[#2F9E72] hover:bg-[#DDF3E8] transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#opinion')}
            className="ml-3 px-5 py-2 rounded-full bg-[#2F9E72] text-white text-sm font-semibold hover:bg-[#1F6B4F] transition-all duration-200 shadow-sm"
          >
            Calificar
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-[#263238] dark:bg-[#ECEFEE] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#263238] dark:bg-[#ECEFEE] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#263238] dark:bg-[#ECEFEE] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#FFF9F2] dark:bg-[#0F1A14] border-t border-[#F1E6D8] dark:border-[#243832] ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Menú móvil">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-[#263238] hover:bg-[#DDF3E8] hover:text-[#2F9E72] transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#opinion')}
            className="mt-2 px-4 py-2.5 rounded-xl bg-[#2F9E72] text-white text-sm font-semibold text-center"
          >
            Calificar el proyecto
          </button>
        </nav>
      </div>
    </header>
  )
}
