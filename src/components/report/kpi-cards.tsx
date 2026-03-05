"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllItems } from "@/lib/data";
import { applyFilters, computeKpis } from "@/lib/report";
import { useReportFilters } from "./report-filters";
import { eur } from "@/lib/utils";

export function KpiCards() {
  const { filters } = useReportFilters();
  const items = React.useMemo(() => applyFilters(getAllItems(), filters), [filters]);
  const kpi = React.useMemo(() => computeKpis(items), [items]);

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-xs uppercase tracking-[0.16em] text-[#a06665]">Total registros</CardTitle></CardHeader>
        <CardContent className="text-2xl font-semibold">{kpi.total}</CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-xs uppercase tracking-[0.16em] text-[#a06665]">Abiertas</CardTitle></CardHeader>
        <CardContent className="text-2xl font-semibold">{kpi.open}</CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-xs uppercase tracking-[0.16em] text-[#a06665]">Cerradas</CardTitle></CardHeader>
        <CardContent className="text-2xl font-semibold">{kpi.closed}</CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-xs uppercase tracking-[0.16em] text-[#a06665]">Importe total</CardTitle></CardHeader>
        <CardContent className="text-2xl font-semibold">{eur(kpi.amountTotal)}</CardContent>
      </Card>
    </div>
  );
}
