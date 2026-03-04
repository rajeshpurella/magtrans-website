import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Multifunctional Magneto-optical Kerr Microscopic Imaging System | MAGTRANS Systems",
  description:
    "Multifunctional MOKE microscopic imaging system for high-resolution magnetic domain imaging, spin transport testing and advanced magnetisation dynamics studies.",
};

export default function MagnetoOpticalPage() {
  return (
    <main className="bg-white">
      {/* MULTIFUNCTIONAL PROBE STATION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-zinc-900">
                Multifunctional Probe Station
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                With <strong>in-plane magnetic field</strong>,{" "}
                <strong>vertical magnetic field</strong> and multiple DC/HF probe
                configurations, this system integrates magneto-optical imaging with
                spin transport testing.
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
                magnetic experiments. Signals include:
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
                adjust:
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
                <li>Kerr image-based hysteresis loop scanning</li>
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
            The system enables observation of magnetic domain structures in
            various materials including:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Perpendicularly anisotropic thin films</li>
            <li>Nanofilm materials</li>
            <li>Silicon steel surfaces</li>
          </ul>

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
              The system can evaluate magnetic material quality, for example in{" "}
              <strong>MgO(sub)/Co/Pt samples</strong> where lattice mismatch can
              cause film defects.
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
              Magnetic domain walls deform near defects producing a{" "}
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
              The system can detect magnetic instability caused by damage during
              microfabrication of spintronic devices.
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
              hysteresis behaviour.
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
            Kerr microscopy enables characterisation of intrinsic magnetic
            parameters with <strong>local spatial resolution up to 220 nm</strong>.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Saturation magnetisation (M)</li>
            <li>Magnetic anisotropy energy (K)</li>
            <li>Exchange interaction constant (Aex)</li>
            <li>Dzyaloshinskii–Moriya interaction (DMI)</li>
          </ul>
        </div>
      </section>

      {/* MAGNETIC DOMAIN WALL DYNAMICS STUDY */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Magnetic Domain Wall Dynamics Study
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed">
            The system can measure dynamic motion of magnetic domain walls.
          </p>
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-900">
              Domain Wall Velocity
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              v = d / t
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Maximum measurable domain wall velocity:{" "}
              <strong>~200 m/s</strong>
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
            The system supports electrical measurements combined with Kerr imaging.
            Supported experiments include:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Spin-transfer torque (STT) driven domain wall motion</li>
            <li>Current-field coupled domain dynamics</li>
            <li>Spin-orbit torque (SOT) switching analysis</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            With <strong>Keithley 6221 and 2182A instruments</strong>, the system
            can measure:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>Hall effect</li>
            <li>I-V characteristics</li>
            <li>Magnetoresistance (MR)</li>
          </ul>
          <p className="text-base text-zinc-700 leading-relaxed">
            Additional microwave equipment enables:
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
            <li>ST-FMR measurements</li>
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
              Resolution: <strong>220 nm (100× oil immersion objective)</strong>
            </li>
            <li>
              Resolution: <strong>450 nm (long working distance objective)</strong>
            </li>
            <li>
              Maximum field of view: <strong>1.2 mm × 1 mm</strong>
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

