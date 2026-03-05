import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManualHtmlPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Manual en HTML"
        description="Contenido funcional del manual de usuario."
        helpKey="ayuda"
      />

      <Card>
        <CardHeader>
          <CardTitle>Descripcion de pantallas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p><strong>Inicio:</strong> vision general y accesos rapidos.</p>
          <p><strong>Listado:</strong> consulta de registros y acceso al detalle.</p>
          <p><strong>Detalle:</strong> informacion completa de cada incidencia.</p>
          <p><strong>Informe:</strong> filtros, KPIs, grafico por categoria y tabla resumen.</p>
          <p><strong>Ayuda:</strong> acceso al manual y documentacion de soporte.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Flujo de uso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>1) Revisar incidencias en Listado.</p>
          <p>2) Abrir Detalle para validar cada caso.</p>
          <p>3) Analizar datos en Informe.</p>
          <p>4) Consultar Ayuda cuando sea necesario.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Instalacion Android</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p><code>npm run build</code></p>
          <p><code>npx cap sync android</code></p>
          <p><code>npx cap open android</code></p>
          <p><code>adb install -r android/app/release/app-release.apk</code></p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configuracion basica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p><code>next.config.ts</code>: output = export</p>
          <p><code>capacitor.config.ts</code>: webDir = out</p>
          <p><code>src/app/detalle/[id]/page.tsx</code>: generateStaticParams()</p>
        </CardContent>
      </Card>
    </div>
  );
}
