import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      id="video"
      className="bg-gradient-to-b from-sky-100 via-sky-200 to-indigo-100"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-6 flex justify-center">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500"></div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl xl:text-6xl">
              Shared Values
              <br />
              Visa Explained
            </h2>
          </div>
        </div>

        {/* Video Container */}
        <div className="group relative cursor-pointer">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-black">
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 scale-150 rounded-full bg-cyan-500/20 blur-2xl"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-sky-500">
                  <Play className="ml-1 h-7 w-7 text-sky-600 transition-colors group-hover:text-white" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="relative z-10 -mt-12 mx-6 rounded-3xl border-2 border-cyan-100 bg-white p-8 shadow-xl lg:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-ibm-plex mb-2 text-xl font-medium text-slate-900">Watch the Full Explanation</h3>
                <div className="space-y-2 font-ibm-plex text-slate-600">
                  <p>Watch the explanation in 2 minutes, above.</p>
                  <p>For the full 30-minute complete walkthrough of the Shared Values Visa</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-7 py-3.5 text-sm text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-105 hover:from-sky-700 hover:to-cyan-600"
                >
                  <Play className="h-4 w-4" fill="currentColor" />
                  <span>Watch Now</span>
                </button>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-green-600 px-7 py-3.5 text-sm text-white shadow-lg shadow-teal-500/30 transition-all hover:from-teal-600 hover:to-green-700"
                >
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
