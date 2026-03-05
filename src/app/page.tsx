import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <CardTitle>Contexto visual ejecutivo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-border/70">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80"
                alt="Perfil ejecutivo 1"
                className="h-56 w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border/70">
              <img
                src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1200&q=80"
                alt="Perfil ejecutivo 2"
                className="h-56 w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border/70">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="Perfil ejecutivo 3"
                className="h-56 w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Claridad</Badge>
            <Badge variant="secondary">Consistencia</Badge>
            <Badge variant="outline">Decision rapida</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Patrones de uso</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="acciones" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="acciones">Acciones</TabsTrigger>
              <TabsTrigger value="estado">Estado</TabsTrigger>
              <TabsTrigger value="ayuda">Ayuda</TabsTrigger>
            </TabsList>
            <TabsContent value="acciones" className="mt-4 rounded-xl border border-border/70 bg-white p-4 text-sm text-muted-foreground">
              Botones principales visibles y directos para tareas frecuentes: abrir listado y revisar informe.
            </TabsContent>
            <TabsContent value="estado" className="mt-4 rounded-xl border border-border/70 bg-white p-4 text-sm text-muted-foreground">
              Navegacion estable con sidebar y jerarquia visual consistente para reducir tiempo de busqueda.
            </TabsContent>
            <TabsContent value="ayuda" className="mt-4 rounded-xl border border-border/70 bg-white p-4 text-sm text-muted-foreground">
              Ayuda contextual por pantalla y manual HTML disponible desde el centro de ayuda.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
