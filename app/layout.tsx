import "./globals.css";
import { cormorant, inter, playfair } from "./fonts";

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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
