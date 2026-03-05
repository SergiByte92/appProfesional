import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "App Profesional (Demo)",
  description: "Next + shadcn + informes + ayuda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${notoSans.variable}`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
