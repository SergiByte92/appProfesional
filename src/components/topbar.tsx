"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const labels: Record<string, string> = {
  "/": "Inicio",
  "/listado": "Listado",
  "/informe": "Informe",
  "/ayuda": "Ayuda",
};

export function Topbar() {
  const pathname = usePathname();
  const router = useRouter();
  const current = labels[pathname] ?? pathname.replace("/", "");

  return (
    <header className="surface-panel z-10 mt-2 rounded-xl bg-[#332222] text-[#f8f6f6] md:sticky md:top-0 md:mt-0">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 p-2 md:justify-between md:gap-3 md:p-3 md:px-5">
        <div className="min-w-0 flex-1">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#a06665]">Panel</div>
          <div className="text-sm font-semibold">{current}</div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-end gap-2 md:w-auto md:flex-nowrap">
          <Button asChild variant="outline" size="sm" className="h-8 border-[#755e5e]/40 bg-transparent px-2 text-xs text-[#f8f6f6] hover:bg-[#4b3f3e] md:h-9 md:px-3 md:text-sm">
            <Link href="/">Inicio</Link>
          </Button>

          <Button asChild variant="secondary" size="sm" className="h-8 border border-transparent bg-[#f8f6f6] px-2 text-xs text-[#332222] hover:bg-[#edd9d7] md:h-9 md:px-3 md:text-sm">
            <Link href="/informe">Ver informe</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm">Acciones</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push("/listado")}>
                Ir a listado
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/informe")}>
                Abrir informe
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/ayuda")}>
                Ver ayuda
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
