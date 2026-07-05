'use client'

import { useEffect, useRef } from 'react'

const types = [
  {
    icon: '🍪',
    name: 'Cajas para galletas',
    desc: 'Cajas elegantes y personalizadas para repostería artesanal.',
    color: '#FFF9F2',
    accent: '#F58A2A',
  },
  {
    icon: '🎂',
    name: 'Cajas para pasteles',
    desc: 'Empaques funcionales que protegen y presentan tus creaciones.',
    color: '#FFF9F2',
    accent: '#2F9E72',
  },
  {
    icon: '🍬',
    name: 'Bolsas para snacks',
    desc: 'Bolsas vibrantes y sellables para dulces, chocolates y snacks.',
    color: '#FFF9F2',
    accent: '#FFC56B',
  },
  {
    icon: '☕',
    name: 'Empaques para café',
    desc: 'Bolsas y cajas premium para té, café y bebidas artesanales.',
    color: '#FFF9F2',
    accent: '#1F6B4F',
  },
  {
    icon: '🏷️',
    name: 'Etiquetas y stickers',
    desc: 'Diseños de etiquetas que comunican la identidad de tu marca.',
    color: '#FFF9F2',
    accent: '#F58A2A',
  },
  {
    icon: '🎁',
    name: 'Cajas para regalos',
    desc: 'Cajas temáticas personalizadas para todo tipo de ocasión.',
    color: '#FFF9F2',
    accent: '#2F9E72',
  },
  {
    icon: '🌿',
    name: 'Empaques ecológicos',
    desc: 'Soluciones sostenibles en cartón kraft y materiales reciclados.',
    color: '#FFF9F2',
    accent: '#1F6B4F',
  },
  {
    icon: '💄',
    name: 'Envases para cosméticos',
    desc: 'Packaging elegante para productos de belleza y cuidado natural.',
    color: '#FFF9F2',
    accent: '#FFC56B',
  },
]

export default function PackagingTypesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tipos" ref={sectionRef} className="py-24 bg-[#FFF9F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal flex justify-center mb-4">
          <span className="px-4 py-1.5 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold uppercase tracking-widest">
            Tipos de Empaques
          </span>
        </div>
        <div className="reveal text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#263238] text-balance"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Soluciones para cada producto
          </h2>
          <p className="mt-4 text-lg text-[#667085] max-w-xl mx-auto text-pretty">
            Diseñamos empaques para todo tipo de negocio. Si tienes una idea, nosotros la hacemos realidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {types.map((type) => (
            <div
              key={type.name}
              className="reveal group rounded-2xl bg-white border border-[#F1E6D8] p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent"
              style={{ '--accent': type.accent } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${type.accent}18` }}
                aria-hidden="true"
              >
                {type.icon}
              </div>
              <div
                className="h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: type.accent }}
                aria-hidden="true"
              />
              <h3
                className="font-bold text-[#263238] leading-snug"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
              >
                {type.name}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
