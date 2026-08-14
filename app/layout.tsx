import "./globals.css";

export const metadata = {
  title: "Humanly",
  description: "Make AI sound like you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}