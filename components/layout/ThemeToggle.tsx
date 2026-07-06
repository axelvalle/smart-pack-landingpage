'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as Theme | null
    const initial: Theme = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  // Avoid hydration mismatch — render a placeholder until mounted
  if (!mounted) {
    return (
      <button
        aria-label="Cambiar tema"
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#DDF3E8] dark:hover:bg-[#1E2F26] text-[#263238] dark:text-[#ECEFEE]"
      >
        <span className="block w-5 h-5 rounded-full" />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#DDF3E8] dark:hover:bg-[#1E2F26] active:scale-95 ${
        isDark ? 'text-[#ECEFEE]' : 'text-[#263238]'
      }`}
    >
      {/* Sun (visible in light mode) */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute w-5 h-5 transition-all duration-300 ${
          isDark ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Moon (visible in dark mode) */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute w-5 h-5 transition-all duration-300 ${
          isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}
