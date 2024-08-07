import type { Metadata } from "next";
import "./globals.css";
// import * as ServicerWorder from "../serviceWorkerRegistration"

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Server Actions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
// ServicerWorder.register();