'use client'

import { useEffect, useRef } from 'react'
import { SacuanjocheSVG, MadronoSprigSVG, GuardaBarrancoSVG } from '@/components/ui/NicaraguaDecorations'

const TEAM = [
  {
    initials: 'GD',
    role: 'Fundador & Desarrollador',
    name: 'George William Ramírez Díaz',
    bio: 'Estudiante universitario con pasión por el desarrollo de software y el emprendimiento. Creó Smart Pack con la visión de ayudar a pequeños negocios a diferenciarse a través de empaques memorables y de alta calidad.',
    skills: ['Desarrollo Web', 'Bases de Datos', 'Automatización', 'Emprendimiento', 'Innovación'],
    color: '#1F6B4F',
  },
  {
    initials: 'RG',
    role: 'Fundadora & Directora de Marketing',
    name: 'Rihanna Monserrath Gutiérrez Montiel',
    bio: 'Encargada de construir la identidad de marca de Smart Pack y de conectar el proyecto con sus clientes a través de estrategias creativas de comunicación y redes sociales.',
    skills: ['Marketing Digital', 'Estrategia de Marca', 'Redes Sociales', 'Comunicación', 'Creatividad'],
    color: '#F58A2A',
  },
  {
    initials: 'KB',
    role: 'Fundadora & Directora de Finanzas',
    name: 'Karieldys Yurent Blanco Castro',
    bio: 'Responsable de la planificación financiera y administrativa de Smart Pack, asegurando que cada proyecto sea sostenible y rentable para el negocio.',
    skills: ['Finanzas', 'Administración', 'Análisis de Costos', 'Planificación', 'Emprendimiento'],
    color: '#2F9E72',
  },
  {
    initials: 'JP',
    role: 'Fundador & Director de Operaciones',
    name: 'Josue David Pérez Saenz',
    bio: 'Coordina la logística y los procesos de producción de Smart Pack, garantizando que cada empaque cumpla con los estándares de calidad y los tiempos de entrega.',
    skills: ['Logística', 'Operaciones', 'Gestión de Proyectos', 'Calidad', 'Innovación'],
    color: '#263238',
  },
]

export default function TeamSection() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="equipo" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <SacuanjocheSVG className="absolute -top-6 left-10 w-32 opacity-10 -rotate-12" />
        <MadronoSprigSVG className="absolute bottom-10 right-6 w-40 opacity-10 rotate-12" />
        <GuardaBarrancoSVG className="absolute top-1/3 left-4 w-28 opacity-10 -rotate-6" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal flex justify-center mb-4">
          <span className="px-4 py-1.5 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold uppercase tracking-widest">
            El Equipo
          </span>
        </div>
        <div className="reveal text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#263238] text-balance"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Detrás de Smart Pack
          </h2>
          <p className="mt-4 text-lg text-[#667085] max-w-xl mx-auto text-pretty">
            Un equipo universitario apasionado por el diseño, la creatividad y la innovación en empaques.
          </p>
        </div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.initials}
              className="reveal group rounded-3xl bg-[#FFF9F2] border-2 border-[#F1E6D8] p-7 text-center transition-all duration-300 hover:border-[#2F9E72]/40 hover:shadow-xl"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: member.color }}
              >
                <span
                  className="text-2xl font-extrabold text-white"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#DDF3E8] text-[#1F6B4F] text-xs font-semibold mb-3">
                {member.role}
              </span>

              <h3
                className="text-lg font-extrabold text-[#263238] mb-2 text-balance"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
              >
                {member.name}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed mb-5 text-pretty">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white border border-[#F1E6D8] text-xs font-medium text-[#667085]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Universidad + símbolos nacionales */}
        <div className="reveal mt-12 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-[#1F6B4F] text-white px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Universidad de Ciencias Comerciales</p>
              <p className="text-white/70 text-xs">Managua, Nicaragua · Feria de Proyectos</p>
            </div>
          </div>

          {/* Franja símbolos nacionales */}
          <div className="flex items-center gap-6 bg-[#FFF9F2] border border-[#F1E6D8] rounded-2xl px-8 py-4">
            <div className="flex flex-col items-center gap-1">
              <MadronoSprigSVG className="w-12 h-14" />
              <span className="text-[10px] font-semibold text-[#1F6B4F] uppercase tracking-wider">Madroño</span>
            </div>
            <div className="w-px h-12 bg-[#F1E6D8]" aria-hidden="true" />
            <div className="flex flex-col items-center gap-1">
              <SacuanjocheSVG className="w-12 h-12" />
              <span className="text-[10px] font-semibold text-[#F58A2A] uppercase tracking-wider">Sacuanjoche</span>
            </div>
            <div className="w-px h-12 bg-[#F1E6D8]" aria-hidden="true" />
            <div className="flex flex-col items-center gap-1">
              <GuardaBarrancoSVG className="w-16 h-12" />
              <span className="text-[10px] font-semibold text-[#2F9E72] uppercase tracking-wider">Guardabarranco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
