"use client";
import { Main } from "@/app/components/main/Main";
import { startBot } from "@/app/services/bot";
import { Header } from "./header/Header";
import { useTheme } from "../context";
import { Nav } from "./nav/Nav";
import { Footer } from "./footer/Footer";
import { SearchPage } from "../components/nav/search-page/SearchPage";
const StartPage = () => {
  const { theme, isSearch } = useTheme();

  startBot();
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
};

export { StartPage };
