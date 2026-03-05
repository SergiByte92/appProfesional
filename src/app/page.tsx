import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inicio"
        description="Gracias por usar App Profesional. Desde aqui puedes revisar la actividad y acceder rapidamente a cada modulo."
        helpKey="home"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bienvenida</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Esta aplicacion centraliza incidencias de hardware, software y red para que el seguimiento diario sea claro y ordenado.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Objetivo</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Facilitar la toma de decisiones con informacion filtrada, metricas visibles y documentacion de apoyo en cada pantalla.
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Identidad visual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-border/70 bg-[#332222]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="Perfil profesional 1"
                className="h-56 w-full object-cover grayscale opacity-85"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border/70 bg-[#332222]">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
                alt="Perfil profesional 2"
                className="h-56 w-full object-cover grayscale opacity-85"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border/70 bg-[#332222]">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                alt="Perfil profesional 3"
                className="h-56 w-full object-cover grayscale opacity-85"
                loading="lazy"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
