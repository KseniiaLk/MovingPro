import { ArrowRight } from 'lucide-react'

export function InfoSection() {
  return (
    <section
      id="shared-values"
      className="bg-gradient-to-b from-white via-slate-50/90 to-sky-100/85"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section Grid */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Title */}
          <div className="lg:sticky lg:top-32">
            <div className="mb-6">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500"></div>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl xl:text-6xl">
              What is a
              <br />
              Shared Values
              <br />
              Visa?
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="font-ibm-plex text-xl leading-relaxed text-slate-600 lg:text-2xl">
                The Shared Values Visa is a unique immigration program introduced by Russia on September 19, 2024
                through which foreigners and their families can obtain a residence permit through an expedited
                procedure.
              </p>

              <p className="font-ibm-plex text-xl leading-relaxed text-slate-600 lg:text-2xl">
                The key criterion for moving is commitment to traditional Russian values, not just professional
                qualifications.
              </p>
            </div>

            {/* Quote Section */}
            <div className="relative border-l-2 border-orange-600 py-8 pl-8">
              <p className="text-2xl font-medium italic leading-relaxed text-orange-700 lg:text-3xl">
                &quot;The key criterion for moving is commitment to traditional Russian values, not just professional
                qualifications.&quot;
              </p>
            </div>

            {/* Mission Box */}
            <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-sky-50 p-10 lg:p-12">
              <div className="mb-6">
                <span className="text-xs font-medium tracking-[0.2em] text-teal-700 uppercase">Our Mission</span>
              </div>
              <p className="font-ibm-plex mb-8 text-xl leading-relaxed text-slate-900 lg:text-2xl">
                Our mission is to make this journey as clear and comfortable as possible for you, overcoming all legal,
                logistical and bureaucratic difficulties.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-7 py-3 text-sm text-white shadow-lg shadow-teal-500/30 transition-all hover:from-teal-600 hover:to-cyan-600"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
