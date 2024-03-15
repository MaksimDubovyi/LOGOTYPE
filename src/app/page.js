"use client";
import { useRef, useEffect } from "react";
import { startBot } from "@/app/services/bot";
import { StartPage } from "./components/startPage";

export default function Home() {
  const shouldStartBotRef = useRef(false);

  useEffect(() => {
    if (!shouldStartBotRef.current) {
      startBot();
    }
    return () => {
      shouldStartBotRef.current = true;
    };
  }, []);

  // Логіка для зміни значення `shouldStartBotRef.current` залежно від вашої потреби

  return (
    <>
      {" "}
      <StartPage />
    </>
  );
}
