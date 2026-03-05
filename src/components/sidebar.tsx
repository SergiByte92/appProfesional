"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/listado", label: "Listado" },
  { href: "/informe", label: "Informe" },
  { href: "/ayuda", label: "Ayuda" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:sticky md:top-0 md:flex md:h-dvh md:w-72 md:flex-col md:gap-5 md:border-r md:border-[#755e5e]/30 md:bg-[#332222] md:p-6 md:text-[#f8f6f6]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a06665]">Cloudy Apple</p>
        <div className="mt-1 text-2xl font-semibold tracking-tight">App Profesional</div>
      </div>
      <Separator className="bg-[#755e5e]/40" />
      <nav className="flex flex-col gap-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "border-[#f54c49] bg-[#f54c49]/15 text-[#f8f6f6]"
                  : "border-transparent text-[#d9c8c7] hover:border-[#755e5e]/40 hover:bg-[#4b3f3e]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto text-xs uppercase tracking-widest text-[#a06665]">v1 | Next + shadcn</div>
    </aside>
  );
}
