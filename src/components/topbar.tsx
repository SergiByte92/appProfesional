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
  "/manual.html": "Manual",
};

export function Topbar() {
  const pathname = usePathname();
  const router = useRouter();
  const current = labels[pathname] ?? pathname.replace("/", "");

  return (
    <header className="surface-panel sticky top-0 z-10 rounded-xl bg-[#332222] text-[#f8f6f6]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 p-3 md:px-5">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#a06665]">Panel</div>
          <div className="text-sm font-semibold">{current}</div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" size="sm" className="border border-transparent bg-[#f8f6f6] text-[#332222] hover:bg-[#edd9d7]">
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
