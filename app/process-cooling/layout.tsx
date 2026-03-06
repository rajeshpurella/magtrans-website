import type { ReactNode } from "react";
import BackButton from "../components/BackButton";

export default function ProcessCoolingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="pt-28 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BackButton />
      </div>
      {children}
    </>
  );
}

