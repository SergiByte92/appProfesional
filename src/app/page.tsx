import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inicio"
        description="Bienvenido a App Profesional. Todo el seguimiento operativo en un unico espacio claro y visual."
        helpKey="home"
      />

      <Card className="overflow-hidden border-[#a06665]/35 bg-gradient-to-r from-[#332222] to-[#4b3f3e] text-[#f8f6f6]">
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#ca605e]">Panel operativo</p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Gestion de incidencias con enfoque profesional</h2>
              <p className="max-w-xl text-sm text-[#e6d6d4] md:text-base">
                Revisa registros, analiza indicadores y consulta documentacion desde una interfaz coherente con el manual de estilo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <Link href="/listado">Abrir listado</Link>
                </Button>
                <Button asChild variant="secondary" size="sm" className="bg-[#f8f6f6] text-[#332222] hover:bg-[#ead9d8]">
                  <Link href="/informe">Ir al informe</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-[#332222]/40 p-2">
              <div className="h-20 rounded bg-[#f54c49]/20" />
              <div className="h-20 rounded bg-[#ca605e]/20" />
              <div className="h-20 rounded bg-[#a06665]/20" />
              <div className="h-20 rounded bg-[#755e5e]/20" />
              <div className="h-20 rounded bg-[#4b3f3e]/20" />
              <div className="h-20 rounded bg-[#f54c49]/20" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Identidad visual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-border/70 bg-[#332222]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Equipo en entorno profesional"
                className="h-56 w-full object-cover grayscale opacity-85 transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border/70 bg-[#332222]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Trabajo colaborativo en oficina"
                className="h-56 w-full object-cover grayscale opacity-85 transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border/70 bg-[#332222]">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
                alt="Sesion ejecutiva de seguimiento"
                className="h-56 w-full object-cover grayscale opacity-85 transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
