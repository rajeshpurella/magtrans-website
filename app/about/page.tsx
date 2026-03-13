import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardContainer } from "@/components/ui/CardContainer";
import StatsCounterSection from "@/components/StatsCounterSection";
import CertificationsSection from "@/components/CertificationsSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export const metadata: Metadata = {
  title: "About MAGTRANS Systems | Engineering Cooling, Cryogenics & Magnetics",
  description:
    "Learn about MAGTRANS Systems: 45+ years of engineering experience in process cooling, cryogenic systems and magnetic testing instruments for research and industry.",
  alternates: {
    canonical: "/about",
  },
};

const ABOUT_STATS = [
  { value: 45, suffix: "+", label: "Years Engineering Experience" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Applications Served" },
  { value: 100, suffix: "+", label: "Technology & OEM Partners" },
];

const BODY_TEXT_CLASS = "text-sm md:text-base text-zinc-700 leading-relaxed";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <SectionShell background="white" aria-label="About MAGTRANS Systems">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
              About MAGTRANS Systems
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              Engineering cooling, cryogenic and magnetic systems for demanding
              research and industrial environments.
            </h1>
            <p className={`${BODY_TEXT_CLASS} max-w-2xl`}>
              MAGTRANS Systems integrates process cooling, cryogenic platforms
              and magnetic testing instruments for aerospace, defense, R&amp;D
              laboratories and high-reliability production facilities across
              India. Our role is to bridge proven global technologies with
              application-specific engineering, installation and lifecycle
              support.
            </p>
            <PrimaryButton href="/contact">
              Speak to our engineering team
            </PrimaryButton>
          </div>

          <div className="space-y-6">
            <p className={BODY_TEXT_CLASS}>
              From TR chillers on factory floors to cryogenic and magnetic
              characterisation systems in national laboratories, MAGTRANS
              operates across the full spectrum of temperature and field
              control. Our teams work with OEM partners and in-house
              application engineers to specify, integrate and support systems
              that operate reliably over years, not just test cycles.
            </p>
            <CardContainer className="p-5 space-y-2">
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
                Focus areas
              </p>
              <p className={BODY_TEXT_CLASS}>
                Process cooling systems (TR chillers and utilities), closed-cycle
                and liquid-nitrogen cryostats, and magnetic testing instruments
                for materials research, QA and device development.
              </p>
            </CardContainer>
          </div>
        </div>
      </SectionShell>

      <StatsCounterSection
        stats={ABOUT_STATS}
        title="Engineering footprint"
        subtitle="Decades of temperature, field and measurement solutions delivered across Indian research and industrial sites."
      />

      <SectionShell background="white" aria-label="Who we are">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row">
          <div className="flex-1">
            <SectionHeader
              align="left"
              title="Who we are"
              subtitle="A specialised engineering company focused on temperature, field and measurement systems for research laboratories and production environments."
            />
          </div>
          <div className="flex-1 space-y-4">
            <p className={BODY_TEXT_CLASS}>
              MAGTRANS Systems combines more than 45 years of engineering,
              application and field experience in industrial cooling, cryogenics
              and magnetic testing. We operate as a specialised integrator,
              selecting and supplying systems from global principals while
              ensuring that each deployment is engineered, installed and
              supported for local operating conditions.
            </p>
            <p className={BODY_TEXT_CLASS}>
              Our teams work closely with R&amp;D laboratories, universities,
              aerospace and defense organisations, heavy industry and QA
              facilities. This exposure to real measurement and process
              constraints shapes how we select equipment, engineer interfaces
              and design utilities such as TR chillers, heat rejection systems
              and cryogenic infrastructure.
            </p>
            <p className={BODY_TEXT_CLASS}>
              Rather than acting as a catalogue distributor, MAGTRANS takes
              responsibility for understanding the experiment or process,
              mapping requirements to the right combination of OEM platforms,
              and supporting the system across commissioning, training and
              long-term service.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        background="muted"
        aria-label="Core engineering domains at MAGTRANS"
      >
        <div className="mb-10 md:mb-14 flex justify-center">
          <SectionHeader
            title="Core engineering domains"
            subtitle="Three intersecting capability areas—process cooling, cryogenic platforms and magnetic testing systems—delivered as engineered solutions rather than standalone products."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <CardContainer className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-zinc-900 mb-2">
              Process Cooling
            </h2>
            <p className={`${BODY_TEXT_CLASS} flex-1`}>
              TR-rated industrial chillers, panel air conditioners and
              value-added cooling packages for process equipment, environmental
              chambers and utilities. Systems are sized, integrated and
              commissioned to support stable operation under local ambient and
              load conditions.
            </p>
          </CardContainer>

          <CardContainer className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-zinc-900 mb-2">
              Cryogenic Systems
            </h2>
            <p className={`${BODY_TEXT_CLASS} flex-1`}>
              Closed-cycle and liquid-nitrogen cryostats, 4 K and ultra-low
              temperature platforms for magnetic, optical and electrical
              experiments. We work with labs to align cryostat configuration,
              sample interfaces and utilities with the experimental stack.
            </p>
          </CardContainer>

          <CardContainer className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-zinc-900 mb-2">
              Magnetic Testing Instruments
            </h2>
            <p className={`${BODY_TEXT_CLASS} flex-1`}>
              Hall effect measurement systems, vibrating sample magnetometers
              and specialised magnetic characterisation setups for hard and soft
              magnetic materials, functional materials and device development.
              Solutions span benchtop systems to high-throughput QA lines.
            </p>
          </CardContainer>
        </div>
      </SectionShell>

      <SectionShell
        background="white"
        aria-label="Engineering capabilities and project approach"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] items-start">
          <div>
            <SectionHeader
              align="left"
              title="Engineering capabilities & approach"
              subtitle="Our teams combine application engineering, utilities design and project execution to deliver complete, supportable systems into demanding environments."
            />
          </div>

          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-zinc-900">
                    Application consultation
                  </p>
                  <p className={BODY_TEXT_CLASS}>
                    Requirements capture with users and facility teams,
                    including load analysis, measurement objectives,
                    environmental constraints and integration with existing
                    infrastructure.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-zinc-900">
                    System engineering & integration
                  </p>
                  <p className={BODY_TEXT_CLASS}>
                    Selection and configuration of OEM platforms, utilities and
                    interfaces. We focus on temperature and field stability,
                    safety margins and maintainability from the outset.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-zinc-900">
                    Installation & commissioning
                  </p>
                  <p className={BODY_TEXT_CLASS}>
                    On-site installation, alignment, functional checks and
                    acceptance testing in collaboration with end users. Training
                    is provided for operators, engineering teams and maintenance
                    staff.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-zinc-900">
                    After-sales support & lifecycle care
                  </p>
                  <p className={BODY_TEXT_CLASS}>
                    Preventive maintenance, troubleshooting assistance and
                    coordination with OEM factories for upgrades and
                    specialised service. The focus is system uptime and
                    repeatable performance over years of operation.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        background="white"
        aria-label="Quality and certification at MAGTRANS"
      >
        <div className="max-w-3xl space-y-4">
          <SectionHeader
            align="left"
            title="Quality & certification"
            subtitle="Our ISO 9001:2015-certified quality management system underpins how we evaluate suppliers, execute projects and support installed systems."
          />
          <p className={BODY_TEXT_CLASS}>
            Engineering reliability and measurement confidence depend on more
            than equipment specifications. MAGTRANS operates under a documented
            quality management system certified to ISO 9001:2015, covering
            sourcing, project execution, documentation and service processes.
            This ensures traceability from enquiry through to commissioning and
            long-term support.
          </p>
        </div>
      </SectionShell>

      <CertificationsSection />

      <SectionShell
        background="white"
        aria-label="Technology and OEM partners"
      >
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <SectionHeader
              title="Technology partners"
              subtitle="MAGTRANS works with specialised OEMs and technology partners for chillers, cryostats, magnetometers and instrumentation. We act as the local engineering interface—matching global platforms to application requirements and local operating environments."
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              "Process Cooling OEM",
              "Cryostat OEM",
              "Magnetics OEM",
              "Instrumentation Partner",
              "Utilities Partner",
            ].map((label) => (
              <CardContainer
                key={label}
                className="h-24 sm:h-28 flex items-center justify-center bg-zinc-50"
              >
                <span className="text-xs sm:text-sm font-medium text-zinc-600 text-center px-3">
                  {label}
                </span>
              </CardContainer>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell background="muted" aria-label="Industries served">
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <SectionHeader
            title="Industries we serve"
            subtitle="Systems installed in national research laboratories, aerospace and defense programmes, university departments, process plants and QA facilities where repeatability and uptime are non-negotiable."
          />
        </div>
      </SectionShell>

      <ClientLogosSection />

      <SectionShell background="dark" aria-label="Contact MAGTRANS">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Discuss your cooling, cryogenic or magnetic measurement project.
            </h2>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Whether you are specifying TR chillers for a new facility, planning
              a cryogenic experiment or evaluating magnetic test systems, our
              engineering team can help map requirements to the right combination
              of platforms, utilities and services.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/contact">Contact MAGTRANS</PrimaryButton>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

