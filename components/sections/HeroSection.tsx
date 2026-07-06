'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { SacuanjocheSVG, MadronoSprigSVG, GuardaBarrancoSVG } from '@/components/ui/NicaraguaDecorations'

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = [badgeRef, headingRef, subRef, btnRef]
    items.forEach((ref, i) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(28px)'
      ref.current.style.transition = `opacity 0.75s ease ${i * 0.13}s, transform 0.75s ease ${i * 0.13}s`
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'translateY(0)'
        }
      }))
    })
    if (imgRef.current) {
      imgRef.current.style.opacity = '0'
      imgRef.current.style.transform = 'translateX(40px)'
      imgRef.current.style.transition = 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s'
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.opacity = '1'
          imgRef.current.style.transform = 'translateX(0)'
        }
      }))
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FFF9F2] dark:bg-[#0F1A14]">
      {/* Decoraciones nicaragüenses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Madroño — árbol nacional, esquina superior izquierda */}
        <MadronoSprigSVG className="absolute -top-4 -left-6 w-44 opacity-25 rotate-12" />
        {/* Sacuanjoche — flor nacional, esquina inferior derecha */}
        <SacuanjocheSVG className="absolute bottom-20 right-10 w-28 opacity-20 -rotate-12" />
        {/* Guardabarranco — pájaro nacional, centro superior */}
        <GuardaBarrancoSVG className="absolute top-28 right-1/4 w-32 opacity-15 -rotate-6" />
        {/* Sacuanjoche secundaria pequeña */}
        <SacuanjocheSVG className="absolute top-1/2 left-12 w-16 opacity-20 rotate-45" />
        {/* Fondo suave crema → en dark queda oscuro a transparente */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF9F2] to-transparent dark:from-[#0F1A14] dark:to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <div className="flex flex-col gap-6">
          <div ref={badgeRef}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold uppercase tracking-widest border border-[#2F9E72]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F9E72] inline-block animate-pulse" aria-hidden="true" />
              Diseño de Empaques Personalizados
            </span>
          </div>

          <h1
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] text-balance"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            <span className="text-[#263238]">Empaques que hacen que tu marca sea</span>{' '}
            <span className="text-[#2F9E72]">imposible</span>{' '}
            <span className="text-[#263238]">de olvidar.</span>
          </h1>

          <p ref={subRef} className="text-lg text-[#667085] leading-relaxed max-w-lg text-pretty">
            En <strong className="text-[#263238] font-semibold">Smart Pack</strong> creamos soluciones visuales de empaque para pequeños negocios, emprendimientos de comida, regalos, cosmética y productos artesanales.
          </p>

          <div ref={btnRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#tipos')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2F9E72] text-white font-semibold text-base hover:bg-[#1F6B4F] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Ver nuestros diseños</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-[#F1E6D8] text-[#263238] font-semibold text-base hover:border-[#2F9E72] hover:text-[#2F9E72] transition-all duration-200"
            >
              Conoce Smart Pack
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-2 border-t border-[#F1E6D8]">
            {[
              { value: '8+', label: 'Tipos de empaque' },
              { value: '8', label: 'Estilos de diseño' },
              { value: '6', label: 'Productos destacados' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-2xl font-bold text-[#2F9E72]"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-[#667085] leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div ref={imgRef} className="flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#F1E6D8]">
              <Image
                src="/images/hero-packages.png"
                alt="Variedad de empaques creativos y personalizados de Smart Pack"
                width={600}
                height={500}
                className="object-cover w-full"
                priority
              />
              {/* Overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between border border-[#F1E6D8]">
                <div>
                  <p className="text-xs font-semibold text-[#263238]">Smart Pack</p>
                  <p className="text-xs text-[#667085]">Empaques 100% personalizados</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F9E72] animate-pulse" aria-hidden="true" />
                  Disponible
                </span>
              </div>
            </div>

            {/* Floating card top-right */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#F1E6D8] float-anim">
              <p className="text-xs font-semibold text-[#263238]">Estilos</p>
              <div className="flex gap-1 mt-1.5">
                {['#2F9E72', '#F58A2A', '#FFC56B', '#263238', '#DDF3E8'].map((c) => (
                  <span key={c} className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ backgroundColor: c }} aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Floating card bottom-left */}
            <div className="absolute -bottom-4 -left-4 bg-[#1F6B4F] rounded-2xl px-4 py-3 shadow-xl text-white">
              <p className="text-xs font-semibold opacity-70">Categorías</p>
              <p className="text-lg font-bold" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>8+</p>
              <p className="text-xs opacity-70">tipos de empaque</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#667085] dark:text-[#A7B2AD]" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-[#667085]/40 dark:border-[#A7B2AD]/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#2F9E72]" style={{ animation: 'bounce-dot 1.5s ease-in-out infinite' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-dot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
