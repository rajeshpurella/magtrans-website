import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AtomicX Proton Magnetometer | Geophysical & Archaeological Surveys | MAGTRANS Systems",
  description:
    "Advanced proton magnetometer for geophysical and archaeological surveys in India. No coil tuning, plug & play, toroidal sensor. 0.1 nT sensitivity, lightweight, waterproof.",
};

export default function ProtonPrecessionSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
