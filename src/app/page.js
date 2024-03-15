import { startBot } from "@/app/services/bot";
import { StartPage } from "./components/startPage";
export default function Home() {
  startBot();
  return <StartPage />;
}
