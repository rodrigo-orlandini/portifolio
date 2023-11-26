import { Kantumruy_Pro } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const kantumruy = Kantumruy_Pro({
	weight: ["300", "400", "600"],
	subsets: ["latin"],
	display: "swap"
});

export const metadata: Metadata = {
  title: "Rodrigo Orlandini - Portifolio",
  description: "Hey! Let's know more about Rodrigo and his experiences!"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={kantumruy.className}>
      <body className="h-full flex-grow">{children}</body>
    </html>
  );
}
