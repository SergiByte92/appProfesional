import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <div className="app-viewport">
        <Sidebar />
        <div className="min-w-0 flex-1 px-2 pt-[env(safe-area-inset-top)] md:px-4 md:py-4">
          <Topbar />
          <main className="mx-auto max-w-6xl p-4 md:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
