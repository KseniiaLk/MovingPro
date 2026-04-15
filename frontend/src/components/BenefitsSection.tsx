import {
  Languages,
  Zap,
  Handshake,
  Stethoscope,
  Building2,
  Percent,
  ArrowRight,
} from 'lucide-react'
import {
  SectionTitle,
  STRETCHED_SECTION_FRAME_CLASS,
  STRETCHED_SECTION_TITLE_CLASS,
} from '@/components/SectionTitle'

const benefits = [
  {
    icon: Languages,
    title: 'Russian language not required',
    description:
      'No Russian language, history, or law exam required for the temporary residency permit',
    iconWrap: 'border-violet-200/90 bg-violet-50 text-violet-600',
    hoverGradient: 'bg-gradient-to-br from-violet-400/25 via-fuchsia-300/15 to-transparent',
  },
  {
    icon: Zap,
    title: 'Fast track to Residence',
    description:
      'The possibility of obtaining a visa without quotas and reviewing the application on a priority basis reduces the time for making a decision.',
    iconWrap: 'border-amber-200/90 bg-amber-50 text-amber-700',
    hoverGradient: 'bg-gradient-to-br from-amber-400/25 via-orange-300/15 to-transparent',
  },
  {
    icon: Handshake,
    title: 'Full Work Rights',
    description:
      'The opportunity to find employment as a Russian citizen without the need for any additional documents or work permits.',
    iconWrap: 'border-sky-200/90 bg-sky-50 text-sky-700',
    hoverGradient: 'bg-gradient-to-br from-sky-400/25 via-cyan-300/15 to-transparent',
  },
  {
    icon: Stethoscope,
    title: 'Free Healthcare',
    description:
      'Access to the Russian State Healthcare System (OMS) is provided free of charge not only to the main applicant, but also to family members.',
    iconWrap: 'border-rose-200/90 bg-rose-50 text-rose-600',
    hoverGradient: 'bg-gradient-to-br from-rose-400/25 via-pink-300/15 to-transparent',
  },
  {
    icon: Building2,
    title: 'Eligible to start a business',
    description:
      'The opportunity to establish any type of legal entity and start a business as an entrepreneur.',
    iconWrap: 'border-emerald-200/90 bg-emerald-50 text-emerald-700',
    hoverGradient: 'bg-gradient-to-br from-emerald-400/25 via-teal-300/15 to-transparent',
  },
  {
    icon: Percent,
    title: 'Low taxes',
    description:
      'Become a tax resident and pay 0% tax on your pension, 15% on capital gains, 13% on salary.',
    iconWrap: 'border-indigo-200/90 bg-indigo-50 text-indigo-700',
    hoverGradient: 'bg-gradient-to-br from-indigo-400/25 via-blue-300/15 to-transparent',
  },
] as const

export function BenefitsSection() {

  return (
    <section id="benefits" className="relative overflow-hidden bg-white">
    
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-slate-50 to-indigo-100"></div>
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/30 to-indigo-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300/30 to-blue-300/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionTitle
          frameClassName={STRETCHED_SECTION_FRAME_CLASS}
          titleClassName={STRETCHED_SECTION_TITLE_CLASS}
        >
          Benefits of the Russian Shared Values Visa Program
        </SectionTitle>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white/90 p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-slate-300/80 hover:shadow-xl hover:shadow-slate-900/8 lg:p-9"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 ${benefit.hoverGradient}`}
                  aria-hidden
                />
                <div className="relative z-10">
                  <div
                    className={`mb-5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-md ${benefit.iconWrap}`}
                  >
                    <Icon
                      className="h-[1.375rem] w-[1.375rem] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>

                  <h3 className="section-heading-sm mb-3 text-xl transition-colors duration-300 group-hover:text-slate-950 lg:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 lg:text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-7 py-3 text-sm text-white shadow-lg shadow-teal-500/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-teal-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-teal-500/35 active:translate-y-0"
          >
            <span>Speak To An Expert</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
