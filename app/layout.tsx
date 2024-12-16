import "./globals.css";
import { BottomNav } from "@/components/navigation/BottomNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
