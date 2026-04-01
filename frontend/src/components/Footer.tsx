import { Send, Mail } from 'lucide-react'
import { XLogoIcon } from '@/components/XLogoIcon'

const navGradient = 'bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900'

export function Footer() {
  return (
    <footer id="contact" className={`scroll-mt-24 text-white ${navGradient}`}>
      {/* Верхняя полоса — тот же градиент, что у navbar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-start sm:gap-6 md:py-5 lg:px-8">
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
          </div>
          <p className="font-ibm-plex text-center text-sm leading-relaxed text-white/95 sm:text-left md:text-base">
            If you have questions, you can also contact us on Telegram or on X.
          </p>
        </div>
      </div>

      {/* Основной блок — тот же градиент */}
      <div>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            {/* Колонка 1 — бренд */}
            <div className="sm:col-span-2 lg:col-span-4">
              <a href="/" className="mb-6 inline-flex items-center">
                <img
                  src="/mtrlogo.png"
                  alt="Move to Russia"
                  className="h-12 w-auto max-w-[min(100%,240px)] object-contain object-left sm:h-14 lg:h-16"
                  decoding="async"
                />
              </a>
              <p className="font-ibm-plex mb-10 max-w-sm text-sm leading-relaxed text-white/85 sm:text-base">
                100% results & Exceptional service
              </p>
              <p className="text-xs text-white/55 sm:text-sm">© Move to Russia.com 2026</p>
            </div>

            {/* Колонка 2 */}
            <nav className="flex flex-col gap-3 text-sm lg:col-span-2">
              <a href="#shared-values" className="text-white/85 transition-colors hover:text-white">
                Shared Values Visa
              </a>
              <a href="#golden-visa" className="text-white/85 transition-colors hover:text-white">
                Russian Golden Visa
              </a>
              <a href="#citizenship" className="text-white/85 transition-colors hover:text-white">
                Russian Citizenship
              </a>
              <a href="#insights" className="text-white/85 transition-colors hover:text-white">
                Insights about Russia
              </a>
            </nav>

            {/* Колонка 3 */}
            <nav className="flex flex-col gap-3 text-sm lg:col-span-2">
              <a href="#about" className="text-white/85 transition-colors hover:text-white">
                About Us
              </a>
              <a href="#contact" className="text-white/85 transition-colors hover:text-white">
                Contact Us
              </a>
              <a href="#media" className="text-white/85 transition-colors hover:text-white">
                Media
              </a>
              <a href="#terms" className="text-white/85 transition-colors hover:text-white">
                Terms & Conditions
              </a>
            </nav>

            {/* Колонка 4 */}
            <nav className="flex flex-col gap-3 text-sm lg:col-span-2">
              <a href="#sign-in" className="text-white/85 transition-colors hover:text-white">
                Members Sign In
              </a>
              <a href="#sign-up" className="text-white/85 transition-colors hover:text-white">
                Members Sign Up
              </a>
            </nav>

            {/* Колонка 5 — контакты */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <a
                  href="#telegram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/5 text-white transition-colors hover:bg-white/15"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a
                  href="#x"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/5 text-white transition-colors hover:bg-white/15"
                  aria-label="X"
                >
                  <XLogoIcon className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contact@movetorussia.com"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/5 text-white transition-colors hover:bg-white/15"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
              <a
                href="mailto:contact@movetorussia.com"
                className="block text-sm text-white/90 underline-offset-2 hover:underline"
              >
                contact@movetorussia.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
