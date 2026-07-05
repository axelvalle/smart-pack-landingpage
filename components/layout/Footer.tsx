import Image from 'next/image'

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#tipos', label: 'Tipos' },
  { href: '#estilos', label: 'Estilos' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#opinion', label: 'Opinión' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1F6B4F] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#DDF3E8] flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Smart Pack logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <p
                className="font-bold text-lg tracking-tight"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
              >
                Smart <span className="text-[#FFC56B]">Pack</span>
              </p>
              <p className="text-white/60 text-xs">Empaques que hacen que tu marca sea inolvidable</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-white/70" aria-label="Pie de página">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/50 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Smart Pack.
            <br className="hidden sm:block" /> Proyecto Universitario de Innovación.
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-xs">
            Diseño de Empaques Personalizados · Metodología SCAMPER · Feria de Proyectos
          </p>
        </div>
      </div>
    </footer>
  )
}
