"use client";
import "./globals.css";
import { BottomNav } from "@/components/navigation/BottomNavigation";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { UserProvider } from "@/context/UserContext";
import { Session } from "@/lib/supabaseClient";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <main>{children}</main>
          {session && <BottomNav />}
        </UserProvider>
      </body>
    </html>
  );
}
