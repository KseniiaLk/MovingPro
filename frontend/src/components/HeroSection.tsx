import { ArrowRight, Download } from 'lucide-react'
import { SectionTitleMark } from '@/components/SectionTitle'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-100"></div>
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/30 to-indigo-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300/30 to-blue-300/30 blur-3xl"></div>
  
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-b from-transparent via-white/55 to-white"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
    
        <div className="mx-auto mb-12 max-w-5xl pt-16 text-center lg:pt-24 xl:pt-28">
          <SectionTitleMark className="mb-8" />
          <h1 className="hero-title-display mb-10 whitespace-nowrap text-center">
            Shared Values Visa
          </h1>

          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xl leading-relaxed text-slate-700 lg:text-2xl xl:text-3xl">
              Acquire your Residence in Russia through the &quot;Shared Values Visa&quot; with Full Support. Relocate
              based on shared cultural and social values with a path to
            </p>

            <p className="bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 bg-clip-text text-xl font-medium text-transparent lg:text-2xl xl:text-3xl">
              Permanent Residence and Russian citizenship
            </p>
          </div>
        </div>

        <div className="mb-28 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-9 py-4 text-lg text-white shadow-lg shadow-teal-500/30 transition-all hover:scale-105 hover:from-teal-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-teal-500/40"
          >
            <Download className="h-4 w-4" />
            <span>Download Guide</span>
          </button>

          <button
            type="button"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-9 py-4 text-lg text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-105 hover:from-sky-700 hover:to-cyan-600 hover:shadow-xl hover:shadow-sky-500/40"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-cyan-200 pt-20 md:grid-cols-3">
          <div className="group text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500"></div>
            </div>
            <div className="mb-4 text-7xl font-light text-slate-900 lg:text-8xl">6+</div>
            <div className="text-base font-medium tracking-wide text-slate-600 lg:text-lg">MONTHS OBTAINING TIME</div>
          </div>

          <div className="group text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
            </div>
            <div className="mb-4 text-7xl font-light text-slate-900 lg:text-8xl">100%</div>
            <div className="text-base font-medium tracking-wide text-slate-600 lg:text-lg">SUCCESS RATE</div>
          </div>

          <div className="group text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-500 to-teal-500"></div>
            </div>
            <div className="mb-4 text-7xl font-light text-slate-900 lg:text-8xl">47</div>
            <div className="text-base font-medium tracking-wide text-slate-600 lg:text-lg">ELIGIBLE COUNTRIES</div>
          </div>
        </div>
      </div>
    </section>
  )
}
