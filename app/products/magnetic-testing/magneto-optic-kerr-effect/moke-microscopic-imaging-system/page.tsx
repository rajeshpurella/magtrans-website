import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Multifunctional Magneto-optical Kerr Microscopic Imaging System | MAGTRANS Systems",
  description:
    "Multifunctional MOKE microscopic imaging system for high-resolution magnetic domain imaging, spin transport testing and advanced magnetisation dynamics studies.",
};

export default function MOKEMicroscopicImagingSystemPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Multifunctional Magneto-optical Kerr Microscopic Imaging System
          </h1>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Magneto-optic Kerr Effect (MOKE)
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            High-resolution MOKE microscopic imaging platform for visualising
            magnetic domains, studying magnetisation dynamics and performing
            combined spin transport measurements.
          </p>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <section className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/products/moke/moke-microscopic-imaging-system.png"
              alt="Multifunctional Magneto-optical Kerr Microscopic Imaging System"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The <strong>Multifunctional Magneto-optical Kerr Microscopic Imaging System</strong>{" "}
            allows researchers to clearly observe the spatial distribution and time
            evolution of magnetisation states in magnetic materials and devices.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            Using the <strong>magneto-optical Kerr effect (MOKE)</strong>, the
            system provides high-resolution magnetic domain imaging and supports
            advanced research in magnetic materials and spintronic devices.
          </p>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system combines magnetic imaging, electrical transport testing and
            high-precision signal control, making it an ideal platform for both
            academic research and advanced magnetic device development.
          </p>
        </div>
      </section>

      {/* MULTIFUNCTIONAL PROBE STATION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-zinc-900">
                Multifunctional Probe Station
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                With in-plane magnetic field, vertical magnetic field and multiple
                DC/HF probe configurations, this system integrates{" "}
                <strong>magneto-optical imaging with spin transport testing</strong>.
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                Key capabilities include:
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>
                  Maximum vertical magnetic field: <strong>1.8 T</strong>
                </li>
                <li>
                  Maximum in-plane magnetic field: <strong>1.4 T</strong>
                </li>
                <li>
                  Variable temperature range: <strong>4 K – 873 K</strong>
                </li>
                <li>Suitable for imaging research of hard magnetic materials</li>
                <li>Compatible with multiple DC and high-frequency probes</li>
              </ul>
            </div>
            <div className="relative w-full aspect-[4/3] max-h-[360px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/products/moke/moke-probe-station.avif"
                alt="MOKE multifunctional probe station"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MULTIFUNCTIONAL CONTROL SYSTEM */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Multifunctional Control System
          </h2>

          {/* Test Signal Control */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-zinc-900">
                Test Signal Control
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                The control system synchronises multiple signals for advanced
                magnetic experiments. Test signal control includes:
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Vertical magnetic field</li>
                <li>In-plane magnetic field</li>
                <li>Current signals</li>
                <li>Microwave signals</li>
              </ul>
              <p className="text-base text-zinc-700 leading-relaxed">
                All signals can be applied{" "}
                <strong>synchronously at microsecond (µs) level</strong>. Users can
                easily adjust:
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Signal waveform</li>
                <li>Amplitude</li>
                <li>Frequency</li>
                <li>Relative delay</li>
              </ul>
            </div>
            <div className="relative w-full aspect-[4/3] max-h-[360px] rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/products/moke/moke-control-system.avif"
                alt="MOKE control and signal synchronisation system"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Image Processing & Signal Analysis */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-zinc-900">
                Image Processing
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                The system includes advanced image processing functions:
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Real-time background subtraction</li>
                <li>Automatic vibration drift correction</li>
                <li>Noise reduction for high-precision imaging</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-zinc-900">
                Signal Analysis
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
                <li>Real-time display of magnetic field and current signals</li>
                <li>Kerr image–based hysteresis loop scanning</li>
                <li>
                  Local analysis resolution up to <strong>220 nm</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MAGNETIC DOMAIN IMAGING */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Domain Imaging
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system enables detailed observation of magnetic domain structures
            in various materials, including perpendicularly anisotropic thin
            films, nanofilm materials and silicon steel surfaces.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
              <Image
                src="/products/moke/domain-thin-film.jpg"
                alt="Magnetic domains in perpendicularly anisotropic thin films"
                width={600}
                height={400}
                className="w-full h-[260px] object-contain"
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
              <Image
                src="/products/moke/nanofilm.gif"
                alt="Magnetic domains in nanofilm materials"
                width={600}
                height={400}
                className="w-full h-[260px] object-contain"
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
              <Image
                src="/products/moke/domain-silicon-steel.gif"
                alt="Magnetic domains on silicon steel surface"
                width={600}
                height={400}
                className="w-full h-[260px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TYPICAL APPLICATIONS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Typical Applications
          </h2>

          {/* Magnetic Material Quality Detection */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Material Quality Detection
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The system can be used to evaluate magnetic material quality, for
              example in <strong>MgO(sub)/Co/Pt samples</strong>. Mismatch between
              the MgO crystal substrate and Co lattice can cause film defects.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Example images include mismatch-induced defects, poor quality
              magnetic film with snowflake-like domain structures, and high
              quality films with uniform magnetic domains.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <Image
                  src="/products/moke/mismatch-defects.jpg"
                  alt="Mismatch-induced defects in MgO/Co/Pt film"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <Image
                  src="/products/moke/poor-quality-film.jpg"
                  alt="Poor quality magnetic film with snowflake-like domains"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <Image
                  src="/products/moke/high-quality-film.jpg"
                  alt="High quality magnetic film with uniform domains"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Defect Location Detection */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Defect Location Detection
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Magnetic domain walls deform near defects, producing a{" "}
              <strong>pinning effect</strong>. With high-resolution objectives,
              defect locations can be directly identified.
            </p>
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/products/moke/defect-detection.jpg"
                alt="Magnetic domain wall deformation at defect locations"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Spintronic Device Damage Detection */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Spintronic Device Damage Detection
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              During microfabrication of spintronic devices, edge damage may
              occur. The system can detect magnetic instability caused by such
              damage.
            </p>
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/products/moke/spintronic-device-damage.jpg"
                alt="Magnetic instability due to spintronic device edge damage"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Hysteresis Loop Analysis */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Hysteresis Loop Analysis
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              The Kerr imaging system enables detailed analysis of magnetic
              hysteresis behaviour, linking domain evolution to macroscopic
              hysteresis loops.
            </p>
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/products/moke/hysteresis-analysis.jpg"
                alt="Hysteresis loop analysis using Kerr imaging"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTERISATION OF MAGNETIC PARAMETERS */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Characterisation of Magnetic Parameters
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            Kerr microscopy enables characterisation of many intrinsic magnetic
            parameters with <strong>local spatial resolution up to 220 nm</strong>.
          </p>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Saturation Magnetisation (M)
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Magnetic domain wall spacing under different magnetic fields can be
              used to extract the <strong>local saturation magnetisation</strong>.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Magnetic Anisotropy Energy (K)
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              By analysing Kerr image contrast changes, the{" "}
              <strong>equivalent anisotropy field</strong> and corresponding
              anisotropy energy can be obtained.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Exchange Interaction Constant (A<sub>ex</sub>)
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Fourier analysis of magnetic domain structures allows extraction of
              the <strong>Heisenberg exchange interaction stiffness</strong>{" "}
              A<sub>ex</sub>.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Dzyaloshinskii–Moriya Interaction (DMI)
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              By observing asymmetric domain wall expansion under combined magnetic
              fields, the <strong>DMI interaction strength</strong> can be
              determined.
            </p>
          </div>
        </div>
      </section>

      {/* MAGNETIC DOMAIN WALL DYNAMICS STUDY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Domain Wall Dynamics Study
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can measure dynamic motion of magnetic domain walls under
            controlled magnetic field and current pulses.
          </p>

          {/* Domain Wall Velocity Measurement */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Domain Wall Velocity Measurement
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Method: apply magnetic field or current pulses with amplitude{" "}
              <strong>B</strong> and duration <strong>t</strong>, then measure
              displacement <strong>d</strong> of the domain wall from Kerr images.
              The domain wall velocity is given by:
            </p>
            <p className="text-base text-zinc-900 font-mono">
              v = d / t
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Maximum measurable domain wall velocity is approximately{" "}
              <strong>200 m/s</strong>.
            </p>
          </div>

          {/* Domain Wall Tension Effect */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Domain Wall Tension Effect
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Asymmetric domain expansion under combined vertical and in-plane
              magnetic fields can be observed to study <strong>domain wall
              tension</strong> and stability.
            </p>
          </div>

          {/* Domain Wall Pinning Analysis */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Domain Wall Pinning Analysis
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              Magnetic field pulses can precisely control domain wall positions in
              nanowires and measure <strong>unpinning magnetic fields</strong> to
              quantify pinning strength and defect interactions.
            </p>
          </div>
        </div>
      </section>

      {/* SPIN TRANSPORT TESTING + IMAGING */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Spin Transport Testing + Imaging
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system supports electrical measurements combined with Kerr imaging
            for comprehensive spin transport studies. Supported experiments
            include:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Spin-transfer torque (STT) driven domain wall motion</li>
            <li>Current and magnetic field coupled domain dynamics</li>
            <li>Spin-orbit torque (SOT) switching analysis</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            With <strong>Keithley 6221 and 2182A</strong> instruments, the system
            can measure:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Hall effect</li>
            <li>I–V characteristics</li>
            <li>Magnetoresistance (MR)</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Additional microwave equipment allows:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Spin torque ferromagnetic resonance (ST-FMR) measurements</li>
            <li>Second harmonic measurements</li>
          </ul>
        </div>
      </section>

      {/* IMAGING PERFORMANCE */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Imaging Performance
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>
              Resolution: <strong>220 nm</strong> (100× oil immersion objective)
            </li>
            <li>
              Resolution: <strong>450 nm</strong> (long working distance objective)
            </li>
            <li>
              Maximum field of view: <strong>1.2 mm × 1 mm</strong>
            </li>
            <li>
              Capable of detecting magnetic changes in{" "}
              <strong>two atomic layer thin films</strong>
            </li>
          </ul>
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 bg-white mt-4">
            <Image
              src="/products/moke/imaging-performance.avif"
              alt="MOKE imaging performance comparison"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

