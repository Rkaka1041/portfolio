import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roshan Kakarla | Portfolio",
  description: "Portfolio of Roshan Kakarla — Software Engineer | Backend | Full Stack | Cloud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}