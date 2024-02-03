"use client";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useTheme } from "./context";
import { Nav } from "./components/nav/Nav";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme ? "dark" : "light"}`}>
      {/* <div style={{ backgroundColor: "black" }}> */}
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
