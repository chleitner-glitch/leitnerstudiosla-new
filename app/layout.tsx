import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leitner Studios",
  description: "Daylight Studio in DTLA. Rentable. Collaborative.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-studio-bg text-studio-text">
        {children}
      </body>
    </html>
  );
}