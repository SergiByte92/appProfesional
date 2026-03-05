import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AyudaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Centro de ayuda"
        description="Documentacion funcional y manual de uso para web y Android."
        helpKey="ayuda"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Manual en HTML</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Manual disponible en <code className="text-xs">public/manual.html</code>.</p>
            <a
              className="font-medium text-[#ca605e] hover:text-[#f54c49]"
              href="/manual.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir manual HTML
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentacion estructurada</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Incluye descripcion de pantallas, flujo de uso, instalacion Android y configuracion basica.</p>
            <p>Usa el boton <span className="font-semibold">?</span> en cada pantalla para ayuda contextual.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
