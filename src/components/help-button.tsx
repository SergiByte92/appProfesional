"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const HELP: Record<string, { title: string; body: string }> = {
  home: {
    title: "Ayuda: Inicio",
    body:
      "Gracias por usar la aplicacion.\n\nFlujo recomendado:\n1) Entra en Listado para ver todos los registros.\n2) Abre un detalle para revisar informacion completa.\n3) Ve a Informe para aplicar filtros y analizar KPIs.\n4) Consulta Ayuda para documentacion y pasos de Android.",
  },
  listado: {
    title: "Ayuda: Listado",
    body: "El listado muestra todos los registros. Usa 'Ver detalle' para abrir la ficha completa de cada elemento.",
  },
  detalle: {
    title: "Ayuda: Detalle",
    body: "Muestra la informacion completa del registro: categoria, responsable, fecha, importe y observaciones.",
  },
  informe: {
    title: "Ayuda: Informe",
    body: "Aplica filtros por estado, categoria, responsable y fechas. Revisa KPIs, grafico por categoria y tabla de resultados.",
  },
  ayuda: {
    title: "Ayuda: Centro de ayuda",
    body: "Aqui puedes abrir el manual HTML y revisar la documentacion de uso e instalacion Android.",
  },
};

export function HelpButton({ helpKey }: { helpKey: string }) {
  const content = HELP[helpKey] ?? { title: "Ayuda", body: "No hay ayuda definida para esta pantalla." };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">?</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground whitespace-pre-wrap">{content.body}</div>
      </DialogContent>
    </Dialog>
  );
}
