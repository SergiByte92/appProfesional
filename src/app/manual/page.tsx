export default function ManualPage() {
  return (
    <div className="h-[calc(100dvh-160px)] min-h-[560px]">
      <iframe
        src="/help/manual.html"
        title="Manual de usuario"
        className="h-full w-full rounded-xl border border-border/60 bg-white"
      />
    </div>
  );
}
