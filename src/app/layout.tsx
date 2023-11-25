import type { Metadata } from "next";

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
    <html lang="en">
      <body className="h-full flex-grow">{children}</body>
    </html>
  );
}
