import { startBot } from "@/app/services/bot";
import { StartPage } from "./components/startPage";
export default function Home() {
  try {
    startBot();
  } catch {}

  return <StartPage />;
}
