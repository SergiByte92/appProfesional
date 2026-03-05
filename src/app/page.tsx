import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inicio"
        description="Panel principal con navegacion lateral, topbar y accesos a listado, informe y ayuda."
        helpKey="home"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Que hace la aplicacion</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Gestiona incidencias de hardware, software y red. Permite revisar registros, ver detalle e interpretar metricas.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Flujo recomendado</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            1) Consulta <span className="font-medium">/listado</span>, 2) abre un detalle, 3) revisa <span className="font-medium">/informe</span> para filtros y KPIs.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
