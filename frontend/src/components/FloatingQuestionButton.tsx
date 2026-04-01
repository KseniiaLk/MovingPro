import { useEffect, useState } from 'react'

const GAP_ABOVE_FOOTER = 12

/** Высота футера в viewport — кнопка поднимается, чтобы не перекрывать #contact */
function getFooterOverlapPx(): number {
  const footer = document.getElementById('contact')
  if (!footer) return 0
  const rect = footer.getBoundingClientRect()
  const vh = window.innerHeight
  return Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0))
}

/** «Have a Question?» — плавающая справа; при скролле к футеру остаётся над ним. */
export function FloatingQuestionButton() {
  const [liftPx, setLiftPx] = useState(0)

  useEffect(() => {
    const update = () => {
      const overlap = getFooterOverlapPx()
      setLiftPx(overlap > 0 ? overlap + GAP_ABOVE_FOOTER : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <a
      href="#contact"
      style={liftPx > 0 ? { transform: `translateY(-${liftPx}px)` } : undefined}
      className="fixed bottom-[max(7rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 inline-flex max-w-[min(220px,calc(100vw-2rem))] items-center justify-center rounded-full bg-[#006B54] px-5 py-3 text-center text-sm font-medium text-white shadow-lg shadow-black/25 transition-[transform,colors] duration-200 ease-out hover:bg-[#005a46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006B54]"
    >
      Have a Question?
    </a>
  )
}
