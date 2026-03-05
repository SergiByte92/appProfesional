"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const HELP: Record<string, { title: string; body: string }> = {
  home: {
    title: "Ayuda: Inicio",
    body:
      "Pantalla de bienvenida.\n\nAqui puedes:\n- Acceder rapidamente al listado.\n- Ir al informe de indicadores.\n- Consultar el centro de ayuda.",
  },
  listado: {
    title: "Ayuda: Listado",
    body:
      "Muestra todos los registros del sistema.\n\nAqui puedes:\n- Revisar estado, categoria y responsable.\n- Abrir 'Ver detalle' para cada registro.",
  },
  detalle: {
    title: "Ayuda: Detalle",
    body:
      "Ficha completa de un registro concreto.\n\nAqui puedes:\n- Ver datos clave (categoria, responsable, fecha e importe).\n- Consultar observaciones asociadas.",
  },
  informe: {
    title: "Ayuda: Informe",
    body:
      "Panel de analisis de datos.\n\nAqui puedes:\n- Filtrar por estado, categoria, responsable y rango de fechas.\n- Revisar KPIs y grafico por categoria.\n- Consultar la tabla resumen filtrada.",
  },
  ayuda: {
    title: "Ayuda: Centro de ayuda",
    body:
      "Centro de documentacion.\n\nAqui puedes:\n- Abrir el manual de usuario.\n- Consultar instalacion Android y configuracion basica.",
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
