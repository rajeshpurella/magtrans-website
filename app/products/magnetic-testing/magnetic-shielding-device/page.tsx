import type { Metadata } from "next";
import Image from "next/image";
import MagneticShieldingSlider from "./MagneticShieldingSlider";

export const metadata: Metadata = {
  title: "Magnetic Shielding Device | MAGTRANS Systems",
  description:
    "Magnetic shielding devices for reducing or eliminating unwanted magnetic fields in sensitive environments such as laboratories, precision electronics, medical equipment and magnetic measurement applications.",
};

export default function MagneticShieldingDevicePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Magnetic Testing
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Magnetic Shielding Device
          </h1>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed max-w-3xl">
            Magnetic shielding devices engineered to reduce or eliminate unwanted magnetic
            fields in sensitive environments, ensuring accurate and stable operation of
            precision instruments and measurement systems.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
          {/* Image Slider */}
          <MagneticShieldingSlider />

          {/* Product Overview */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Overview</h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              Magnetic shielding devices are designed to attenuate external magnetic fields
              and prevent interference with sensitive equipment. By using high-permeability
              materials and optimised shielding geometries, these devices create a
              controlled low-field region where precise measurements and stable operation
              are possible.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              MAGTRANS magnetic shielding solutions can be tailored for DC and low-frequency
              magnetic fields and integrated into existing or new installations. Typical
              applications include magnetic measurement laboratories, precision electronics,
              medical imaging equipment, metrology facilities and research environments
              where background magnetic noise must be minimised.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              Shielding configurations can be provided as standalone enclosures, modular
              panels or customised assemblies around specific instruments, enabling
              flexible deployment while maintaining high field attenuation performance.
            </p>
          </div>

          {/* Magnetic Shielding Device */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              Magnetic Shielding Device
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              The magnetic shielding device is mainly used to shield environmental magnetic
              fields, especially the earth&apos;s magnetic field. The inside of the shielding
              tube can form a near-zero magnetic space where the magnetic induction intensity
              in air can be less than <strong>1 nT</strong>.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              To meet user requirements for near-zero magnetic environments, the shielding
              tube offers a compact structure, lightweight design and easy operation while
              maintaining high cost-performance.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              The magnetic shielding cylinder is made from{" "}
              <strong>multiple layers of high-permeability materials</strong>, typically{" "}
              <strong>permalloy</strong>, which effectively shields magnetic field
              interference from environmental sources.
            </p>
            <p className="text-base text-zinc-700 leading-relaxed">
              These shielding devices are widely used in:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Magnetic sensor research and development</li>
              <li>Magnetometer calibration</li>
              <li>Magnetic material research</li>
              <li>Weak magnetic field experiments</li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Features</h2>
            <div className="space-y-3 text-base text-zinc-700 leading-relaxed">
              <p>
                <strong>Excellent shielding performance</strong>
                <br />
                Multi-layer high-permeability materials effectively shield both low-frequency
                and high-frequency magnetic fields.
              </p>
              <p>
                <strong>Stable magnetic field environment</strong>
                <br />
                Ensures long-term shielding stability and reliable experimental results.
              </p>
              <p>
                <strong>Diverse size selection</strong>
                <br />
                Available in multiple standard sizes and can be customised.
              </p>
              <p>
                <strong>Optional configurations</strong>
                <br />
                Customised options such as openings, covers and temperature control can be
                provided.
              </p>
            </div>
          </div>

          {/* Application Areas */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Application Areas</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Magnetic sensor R&amp;D, testing and calibration</li>
              <li>Magnetometer calibration</li>
              <li>Magnetic material research</li>
              <li>Weak magnetic field experiments</li>
              <li>Protection of magnetic-sensitive electronic equipment</li>
            </ul>
          </div>

          {/* Product Advantages */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Product Advantages</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Professional engineering design</li>
              <li>Rigorous testing and validation</li>
              <li>Reliable performance and durability</li>
              <li>Complete technical support and service</li>
            </ul>
          </div>

          {/* How to Choose */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">
              How to Choose a Magnetic Shielding Tube
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed">
              When selecting a shielding cylinder consider:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Required shielding magnetic field strength</li>
              <li>Size of the equipment or experimental setup</li>
              <li>Material selection such as permalloy</li>
              <li>Additional functional requirements</li>
            </ul>
          </div>

          {/* Usage Precautions */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-zinc-900">Usage Precautions</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 leading-relaxed">
              <li>Carefully read the instruction manual before use</li>
              <li>Install away from strong magnetic fields</li>
              <li>Avoid physical impacts to prevent damage</li>
              <li>
                Periodically demagnetise the shielding cylinder to maintain shielding
                performance
              </li>
            </ul>
          </div>

          {/* Application Example */}
          <div className="space-y-4 max-w-5xl mx-auto pt-4">
            <h2 className="text-lg font-semibold text-zinc-900 text-center">
              Application Example
            </h2>
            <div className="mx-auto max-w-3xl md:max-w-4xl">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-zinc-50">
                <Image
                  src="/products/magnetic-shielding-device/physical%20research.png"
                  alt="Magnetic field shielding device used in a physical research institute"
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-zinc-700 text-center mt-3">
              <strong>
                Magnetic field shielding device used in a physical research institute
              </strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

