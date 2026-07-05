'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const products = [
  {
    img: '/images/pkg-galletas.png',
    name: 'Caja para galletas artesanales',
    style: 'Artesanal',
    desc: 'Diseño botánico en caja blanca con cordel natural. Perfecta para repostería casera.',
    styleColor: '#F58A2A',
  },
  {
    img: '/images/pkg-cafe.png',
    name: 'Empaque para café premium',
    style: 'Elegante',
    desc: 'Bolsa kraft matte con detalles dorados. Ideal para marcas de especialidad.',
    styleColor: '#1F6B4F',
  },
  {
    img: '/images/pkg-regalo.png',
    name: 'Caja de regalo personalizada',
    style: 'Premium',
    desc: 'Caja rígida sage green con cinta satinada. Para ocasiones especiales.',
    styleColor: '#2F9E72',
  },
  {
    img: '/images/pkg-snacks.png',
    name: 'Bolsa para snacks saludables',
    style: 'Moderno',
    desc: 'Pouch kraft resellable con etiqueta vibrante. Para marcas de vida sana.',
    styleColor: '#F58A2A',
  },
  {
    img: '/images/pkg-cosmeticos.png',
    name: 'Kit de cosméticos naturales',
    style: 'Minimalista',
    desc: 'Frascos de vidrio con etiquetas botánicas minimalistas. Para marcas de belleza limpia.',
    styleColor: '#667085',
  },
  {
    img: '/images/pkg-cupcakes.png',
    name: 'Caja para cupcakes',
    style: 'Colorido',
    desc: 'Caja ventana pastel y alegre. Para pastelerías y eventos temáticos.',
    styleColor: '#FFC56B',
  },
]

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
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
    <section id="portafolio" ref={sectionRef} className="py-24 bg-[#FFF9F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal flex justify-center mb-4">
          <span className="px-4 py-1.5 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold uppercase tracking-widest">
            Productos Destacados
          </span>
        </div>
        <div className="reveal text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#263238] text-balance"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Propuestas de diseño
          </h2>
          <p className="mt-4 text-lg text-[#667085] max-w-xl mx-auto text-pretty">
            Estos son prototipos visuales que muestran las posibilidades de diseño que Smart Pack puede crear para tu negocio.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="reveal group rounded-3xl bg-white border border-[#F1E6D8] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#F8F5F0]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold w-fit"
                  style={{ backgroundColor: `${p.styleColor}18`, color: p.styleColor }}
                >
                  {p.style}
                </span>
                <h3
                  className="font-bold text-[#263238] text-lg leading-snug"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-10 text-center">
          <p className="text-sm text-[#667085] bg-white border border-[#F1E6D8] rounded-2xl px-6 py-4 inline-block">
            Estos son <strong className="text-[#263238]">prototipos de diseño</strong> — no productos físicos a la venta. Se presentan como propuestas visuales del potencial creativo de Smart Pack.
          </p>
        </div>
      </div>
    </section>
  )
}
