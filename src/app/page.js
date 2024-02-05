"use client";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useTheme } from "./context";
import { Nav } from "./components/nav/Nav";
import { SearchPage } from "./components/nav/search-page/SearchPage";
import { Main } from "@/app/components/main/Main";
export default function Home() {
  const { theme, isSearch } = useTheme();
  return (
    <div className={`app ${theme ? "dark" : "light"}`}>
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      {isSearch ? (
        <>
          {" "}
          <SearchPage />
        </>
      ) : (
        <>
          <main>
            <Main />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
}
