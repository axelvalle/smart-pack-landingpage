'use client'

import { useEffect, useRef, useState } from 'react'

const styles = [
  {
    name: 'Minimalista',
    desc: 'Menos es más. Líneas limpias, espacio en blanco y tipografía elegante que comunica sofisticación.',
    palette: ['#263238', '#FFFFFF', '#F1E6D8', '#667085'],
    tag: 'Limpio · Elegante',
  },
  {
    name: 'Elegante',
    desc: 'Dorados, negros y texturas premium que elevan la percepción de valor de tu producto.',
    palette: ['#1A1A1A', '#C9A84C', '#FFFFFF', '#2F2F2F'],
    tag: 'Lujoso · Premium',
  },
  {
    name: 'Ecológico',
    desc: 'Kraft natural, tonos tierra y sellos botánicos para marcas que cuidan el planeta.',
    palette: ['#8B6914', '#DDD0B8', '#4A7C59', '#F5F0E8'],
    tag: 'Natural · Sostenible',
  },
  {
    name: 'Colorido',
    desc: 'Paletas vibrantes y contrastes atrevidos que capturan la atención de inmediato.',
    palette: ['#F58A2A', '#2F9E72', '#FFC56B', '#E94560'],
    tag: 'Vibrante · Alegre',
  },
  {
    name: 'Infantil',
    desc: 'Colores pastel, ilustraciones divertidas y formas amigables para productos dirigidos a niños.',
    palette: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA'],
    tag: 'Divertido · Tierno',
  },
  {
    name: 'Artesanal',
    desc: 'Texturas rugosas, sellos manuales y tipografías caligráficas que transmiten autenticidad.',
    palette: ['#8B6914', '#C4956A', '#F2E8D9', '#4A3728'],
    tag: 'Auténtico · Hecho a mano',
  },
  {
    name: 'Premium',
    desc: 'Acabados con relieve, laminados mate y detalles metálicos para marcas de alto valor.',
    palette: ['#1A1A2E', '#E8D5B7', '#C9A84C', '#F5F5F5'],
    tag: 'Exclusivo · Alto nivel',
  },
  {
    name: 'Moderno',
    desc: 'Geometría bold, colores sólidos y composiciones dinámicas para marcas jóvenes y frescas.',
    palette: ['#2F9E72', '#263238', '#FFF9F2', '#F58A2A'],
    tag: 'Fresco · Dinámico',
  },
]

export default function StylesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

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
    <section id="estilos" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal flex justify-center mb-4">
          <span className="px-4 py-1.5 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold uppercase tracking-widest">
            Estilos de Diseño
          </span>
        </div>
        <div className="reveal text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#263238] text-balance"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Tu estilo, tu identidad
          </h2>
          <p className="mt-4 text-lg text-[#667085] max-w-xl mx-auto text-pretty">
            Desde lo minimalista hasta lo premium, adaptamos el diseño a la personalidad de tu marca.
          </p>
        </div>

        {/* Style tabs + preview */}
        <div className="reveal flex flex-col lg:flex-row gap-8">
          {/* Tabs list */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 flex-shrink-0 lg:w-56">
            {styles.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? 'bg-[#2F9E72] text-white shadow-md'
                    : 'text-[#667085] hover:bg-[#DDF3E8] hover:text-[#1F6B4F]'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Preview card */}
          <div className="flex-1 rounded-3xl bg-[#FFF9F2] border border-[#F1E6D8] p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start transition-all duration-300 min-h-52">
            {/* Palette swatches */}
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-2 flex-shrink-0">
              {styles[active].palette.map((c, i) => (
                <div
                  key={i}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-sm border border-black/5 transition-transform duration-200 hover:scale-110"
                  style={{ backgroundColor: c }}
                  aria-label={`Color ${c}`}
                />
              ))}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold w-fit">
                {styles[active].tag}
              </span>
              <h3
                className="text-3xl sm:text-4xl font-extrabold text-[#263238]"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
              >
                {styles[active].name}
              </h3>
              <p className="text-[#667085] leading-relaxed text-lg max-w-md">
                {styles[active].desc}
              </p>
              <p className="text-sm text-[#667085]">
                Ejemplo: una caja de galletas puede verse en estilo{' '}
                <strong className="text-[#263238]">{styles[active].name.toLowerCase()}</strong> usando
                esta paleta de colores y materiales que reflejan esta personalidad visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
