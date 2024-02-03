"use client";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useTheme } from "./context";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme ? "dark" : "light"}`}>
      <header>
        <Header />
      </header>
      <main className="container"></main>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}
