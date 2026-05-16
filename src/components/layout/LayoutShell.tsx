"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/lp/");

  return (
    <>
      {!isLandingPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isLandingPage && <Footer />}
      {!isLandingPage && <WhatsAppButton />}
    </>
  );
}
