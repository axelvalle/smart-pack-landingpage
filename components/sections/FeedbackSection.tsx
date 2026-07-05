'use client'

import { useEffect, useRef } from 'react'

// Replace this URL with your actual Google Form / survey link
const SURVEY_URL = 'https://forms.google.com'

export default function FeedbackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 110)
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
    <section id="opinion" ref={sectionRef} className="py-24 bg-[#FFF9F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="reveal flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-[#FFF3E0] text-[#F58A2A] text-xs font-semibold uppercase tracking-widest border border-[#F58A2A]/20">
            Validación en la Feria
          </span>
        </div>

        {/* Heading */}
        <h2
          className="reveal text-4xl sm:text-5xl font-extrabold text-[#263238] mb-6 text-balance"
          style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
          Tu <span className="text-[#F58A2A]">opinión</span> nos ayuda a{' '}
          <span className="text-[#2F9E72]">crecer</span>
        </h2>

        <p className="reveal text-[#667085] text-lg leading-relaxed mb-10 max-w-lg mx-auto text-pretty">
          ¿Qué te pareció nuestro proyecto? Tu retroalimentación es invaluable para seguir
          mejorando <strong className="text-[#263238]">Smart Pack</strong>.
        </p>

        {/* Stars */}
        <div className="reveal flex justify-center gap-2 mb-10" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-10 h-10 text-[#FFC56B] hover:scale-125 transition-transform duration-150 cursor-default"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* CTA card */}
        <div className="reveal relative rounded-3xl bg-white border-2 border-[#F1E6D8] p-10 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#DDF3E8] opacity-50" aria-hidden="true" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#F1E6D8] opacity-60" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#DDF3E8] flex items-center justify-center" aria-hidden="true">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-[#2F9E72]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
            <h3
              className="text-2xl font-extrabold text-[#263238]"
              style={{ fontFamily: 'var(--font-sora), sans-serif' }}
            >
              Califica a Smart Pack
            </h3>
            <p className="text-[#667085] leading-relaxed max-w-sm text-pretty">
              Completa nuestra breve encuesta. Solo toma unos minutos y nos ayuda a mejorar el proyecto para la feria y más allá.
            </p>
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#F58A2A] text-white font-bold text-base hover:bg-[#e07a1a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2"
            >
              <span>Ir a la encuesta</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <p className="reveal mt-6 text-xs text-[#667085]">
          Tu respuesta es anónima y únicamente se usará para mejorar el proyecto.
        </p>
      </div>
    </section>
  )
}
