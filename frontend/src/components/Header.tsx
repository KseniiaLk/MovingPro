import { Send, Mail, Menu, ArrowRight, X } from 'lucide-react'
import { XLogoIcon } from '@/components/XLogoIcon'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#shared-values', label: 'Shared Values' },
  { href: '#golden-visa', label: 'Golden Visa' },
  { href: '#citizenship', label: 'Citizenship' },
  { href: '#real-estate', label: 'Real Estate' },
  { href: '#insights', label: 'Insights' },
  { href: '#about', label: 'About Us' },
] as const

const panelGradient = 'bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900 text-white shadow-lg shadow-black/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] lg:h-20 lg:gap-4 xl:gap-6">
          <a href="/" className="flex h-full shrink-0 items-center">
            <img
              src="/mtrlogo.png"
              alt="Move to Russia"
              className="h-full w-auto max-w-[min(100%,220px)] object-contain object-left sm:max-w-[min(100%,260px)] lg:max-w-[min(100%,240px)]"
              decoding="async"
            />
          </a>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5 2xl:gap-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 text-sm font-medium text-white/95 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-3 md:gap-5">
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="#x"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="X"
              >
                <XLogoIcon className="h-4 w-4" />
              </a>
              <a
                href="#email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border border-white bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 lg:flex"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="text-white lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-[2px] lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside
            className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-[min(100vw-1rem,20rem)] flex-col border-l border-white/15 shadow-2xl ${panelGradient} lg:hidden`}
            aria-modal="true"
            role="dialog"
            aria-label="Site navigation"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-white/15 px-5 py-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">Menu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-1 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/95 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="shrink-0 space-y-5 border-t border-white/15 px-5 py-5">
              <div className="flex items-center gap-3">
                <a
                  href="#telegram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a
                  href="#x"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="X"
                >
                  <XLogoIcon className="h-4 w-4" />
                </a>
                <a
                  href="#email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  )
}
