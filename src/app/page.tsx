import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
        <CardContent className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-xl border border-border/70">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1400&q=80"
              alt="Perfil ejecutivo principal"
              className="h-72 w-full object-cover grayscale-[20%] transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-xl border border-border/70">
              <img
                src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1400&q=80"
                alt="Perfil ejecutivo secundario"
                className="h-[140px] w-full object-cover grayscale-[20%] transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl border border-border/70 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#a06665]">Publico objetivo</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Perfil profesional que busca claridad, control y lectura rapida del estado operativo.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Claridad</Badge>
                <Badge variant="secondary">Consistencia</Badge>
                <Badge variant="outline">Decision rapida</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Componentes UI aplicados</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-xl border border-border/70 bg-white p-5">
            <p className="text-2xl font-semibold">Payment Method</p>
            <p className="text-sm text-muted-foreground">Update your billing details.</p>
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-border/70 p-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#332222] text-xs font-semibold text-white">V</div>
              <div>
                <p className="text-sm font-semibold">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/28</p>
              </div>
            </div>
            <Button className="mt-4 w-full">Save Changes</Button>
          </section>

          <section className="rounded-xl border border-border/70 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[#a06665]">Interactive</p>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive daily digests</p>
              </div>
              <div className="h-6 w-11 rounded-full bg-[#f54c49] p-1">
                <div className="ml-auto h-4 w-4 rounded-full bg-white" />
              </div>
            </div>
            <div className="mt-5 border-t border-border/70 pt-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold">Risk Tolerance</p>
                <p className="text-sm font-semibold text-[#f54c49]">60%</p>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 w-3/5 rounded-full bg-[#f54c49]" />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-border/70 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[#a06665]">Badges</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Active</Badge>
              <Badge variant="secondary">Pending</Badge>
              <Badge variant="outline">Archived</Badge>
            </div>
          </section>

          <section className="rounded-xl border border-border/70 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[#a06665]">Progress</p>
            <div className="mt-4 h-2 rounded-full bg-muted">
              <div className="h-2 w-3/4 rounded-full bg-[#ca605e]" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[#a06665]">Avatar</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#332222] text-sm font-semibold text-white">JD</div>
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-sm text-muted-foreground">Executive Director</p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
