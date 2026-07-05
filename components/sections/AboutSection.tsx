'use client'

import { useEffect, useRef } from 'react'
import { SacuanjocheSVG, MadronoSprigSVG, GuardaBarrancoSVG } from '@/components/ui/NicaraguaDecorations'

const values = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Creatividad',
    desc: 'Cada empaque es una obra visual única, diseñada para destacar en el mercado.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: 'Personalización',
    desc: 'Adaptamos cada diseño a la identidad y necesidades específicas de tu marca.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Impacto Visual',
    desc: 'Creamos empaques que fortalecen la identidad de marca y generan conexión emocional.',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Decoraciones nicaragüenses */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <GuardaBarrancoSVG className="absolute top-10 right-0 w-40 opacity-10 rotate-6" />
        <MadronoSprigSVG className="absolute bottom-10 left-0 w-36 opacity-10 -rotate-12" />
        <SacuanjocheSVG className="absolute top-1/2 right-8 w-20 opacity-10 rotate-12" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="reveal flex justify-center mb-4">
          <span className="px-4 py-1.5 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold uppercase tracking-widest">
            Sobre Smart Pack
          </span>
        </div>

        {/* Main description */}
        <div className="reveal text-center mb-16 max-w-3xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#263238] text-balance mb-6"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Un emprendimiento enfocado en dar vida a tu marca
          </h2>
          <p className="text-lg text-[#667085] leading-relaxed text-pretty">
            Smart Pack es un emprendimiento especializado en crear{' '}
            <strong className="text-[#263238]">soluciones visuales de empaque</strong> para pequeños negocios,
            emprendimientos de comida, regalos, cosmética y productos artesanales.
            Creemos que un buen empaque no solo protege un producto — lo presenta, lo diferencia y lo hace memorable.
          </p>
        </div>

        {/* Mission & Vision grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Mission */}
          <div className="reveal group rounded-3xl bg-[#1F6B4F] p-8 text-white transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Misión</p>
            <p className="text-xl font-semibold leading-relaxed text-pretty" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
              Crear empaques atractivos, funcionales y personalizados que ayuden a los emprendimientos a presentar mejor sus productos y fortalecer su identidad de marca.
            </p>
          </div>

          {/* Vision */}
          <div className="reveal group rounded-3xl bg-[#FFF9F2] border-2 border-[#F1E6D8] p-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#DDF3E8] flex items-center justify-center mb-5 text-[#2F9E72]">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] mb-2">Visión</p>
            <p className="text-xl font-semibold text-[#263238] leading-relaxed text-pretty" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
              Ser una referencia en diseño creativo de empaques para emprendimientos y pequeños negocios, destacando por la innovación, calidad visual y personalización.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="reveal rounded-2xl bg-[#FFF9F2] border border-[#F1E6D8] p-6 flex flex-col gap-3 transition-all duration-300 hover:border-[#2F9E72]/30 hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-[#DDF3E8] text-[#2F9E72] flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="font-bold text-[#263238] text-lg" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                {v.title}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
