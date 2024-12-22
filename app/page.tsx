"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log("Session:", session); // 認証情報をコンソールに表示
      if (session) {
        router.push("/analysis");
      } else {
        router.push("/login");
      }
    };

    checkSession();
  }, [router]);

  return null;
}
