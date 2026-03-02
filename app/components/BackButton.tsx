"use client";

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length <= 1) {
      router.push("/");
      return;
    }

    const parentPath = "/" + segments.slice(0, -1).join("/");
    router.push(parentPath || "/");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 hover:border-emerald-500 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
