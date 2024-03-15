"use client";
import React, { useEffect } from "react";
import { startBot } from "@/app/services/bot";
const ServerComponent = () => {
  useEffect(() => {
    try {
      startBot();
    } catch {}
  }, []);

  return <></>;
};

export { ServerComponent };
