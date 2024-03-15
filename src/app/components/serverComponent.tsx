"use server";
import { startBot } from "@/app/services/bot";
const ServerComponent = () => {
  try {
    startBot();
  } catch {}

  return <></>;
};

export { ServerComponent };
