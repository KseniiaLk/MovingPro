import type { ReactNode } from 'react'

export const STRETCHED_SECTION_FRAME_CLASS =
  'max-w-6xl px-4 md:px-16 lg:px-20 xl:max-w-7xl'
export const STRETCHED_SECTION_TITLE_CLASS =
  '!tracking-[0.06em] sm:!tracking-[0.1em] md:!tracking-[0.14em] lg:!tracking-[0.18em] xl:!tracking-[0.22em] !text-[clamp(1.85rem,1rem+3.8vw,4.5rem)] lg:!text-[clamp(2.5rem,1.2rem+3.2vw,4.85rem)]'

export function SectionTitleMark({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-2xl sm:gap-3.5 md:max-w-3xl lg:max-w-4xl lg:gap-4 xl:max-w-5xl ${className}`}
      aria-hidden
    >
      <span className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-cyan-400/95 to-transparent sm:h-[3px] md:h-1" />
      <span className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-violet-400/88 to-transparent sm:h-[3px] md:h-1" />
    </div>
  )
}


export function SectionAccentBar({ className = '' }: { className?: string }) {
  return <SectionTitleMark className={className} />
}

type SectionTitleProps = {
  children: ReactNode
  id?: string
  className?: string
  frameClassName?: string
  titleClassName?: string
}

export function SectionTitle({
  children,
  id,
  className = '',
  frameClassName = '',
  titleClassName = '',
}: SectionTitleProps) {
  return (
    <div className={`relative mb-20 text-center ${className}`}>
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] -z-0 h-44 w-[min(92%,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-r from-cyan-400/20 via-sky-300/12 to-indigo-400/18 blur-3xl"
        aria-hidden
      />
      <SectionTitleMark className="relative z-10 mb-7 sm:mb-9" />
      <div
        className={`section-title-frame mx-auto inline-block max-w-4xl px-5 py-6 md:px-12 md:py-9 ${frameClassName}`}
      >
        <h2 id={id} className={`section-title-display relative z-10 text-balance ${titleClassName}`}>
          {children}
        </h2>
      </div>
    </div>
  )
}
