import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getAllItems } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ListadoPage() {
  const items = getAllItems();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Listado"
        description="Registros operativos con acceso rapido al detalle."
        helpKey="listado"
      />

      <div className="grid gap-3">
        {items.map((it) => (
          <Card key={it.id} className="hover:border-[#f54c49]/40 hover:bg-[#f8f1f0] transition-colors">
            <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="font-medium truncate">{it.title}</div>
                <div className="text-sm text-muted-foreground truncate">
                  {it.category} | {it.owner} | {new Date(it.date).toLocaleDateString("es-ES")}
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
                <Badge variant={it.status === "open" ? "default" : "secondary"}>
                  {it.status === "open" ? "Abierta" : "Cerrada"}
                </Badge>
                <Link className="shrink-0 text-sm font-medium text-[#ca605e] hover:text-[#f54c49]" href={`/detalle/${it.id}`}>
                  Ver detalle
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
