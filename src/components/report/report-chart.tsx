"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { getAllItems } from "@/lib/data";
import { applyFilters, groupByCategory } from "@/lib/report";
import { useReportFilters } from "./report-filters";
import { eur } from "@/lib/utils";

export function ReportChart() {
  const { filters } = useReportFilters();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const items = React.useMemo(() => applyFilters(getAllItems(), filters), [filters]);
  const data = React.useMemo(() => groupByCategory(items), [items]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grafico por categoria</CardTitle>
      </CardHeader>
      <CardContent className="h-[320px]">
        {!mounted ? (
          <div className="h-full w-full rounded-lg bg-muted/40" />
        ) : (
          <ResponsiveContainer width="100%" height="100%" minWidth={280}>
            <BarChart data={data}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip
                formatter={(value: number | string | undefined, name: string | undefined) =>
                  name === "amount" ? eur(Number(value ?? 0)) : String(value ?? "")
                }
              />
              <Bar dataKey="count" name="Registros" fill="#f54c49" radius={[4, 4, 0, 0]} />
              <Bar dataKey="amount" name="Importe" fill="#4b3f3e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
