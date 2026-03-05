import { HelpButton } from "@/components/help-button";

export function PageHeader({
  title,
  description,
  helpKey,
}: {
  title: string;
  description?: string;
  helpKey: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a06665]">Vista</p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h1>
        {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
      </div>
      <HelpButton helpKey={helpKey} />
    </div>
  );
}
