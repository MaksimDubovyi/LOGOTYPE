"use client";
import style from "./nav.module.css";
import { dataLinkNav } from "@/app/dataMap/data";
import { useTheme } from "@/app/context";
import { useCallback, useEffect, useState } from "react";
const Nav = () => {
  const isBrowser = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : 0
  );
  const { theme, isSearch, setIsSearch } = useTheme();

  const handleResize = useCallback(() => {
    setWindowWidth(isBrowser ? window.innerWidth : 0);
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", handleResize);
      setWindowWidth(window.innerWidth);
      if (windowWidth > 767) {
        setIsSearch(false);
      }
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isBrowser, windowWidth, handleResize, setIsSearch]);

  const onSearch = () => {
    if (windowWidth < 767) {
      setIsSearch(true);
    } else {
      console.log("windowWidth>800", windowWidth);
    }
  };
  const onClose = () => {
    setIsSearch(false);
  };
  return (
    <section className={style.section}>
      <div className={style.navContainer}>
        <h2 style={{ color: theme ? "white" : "black" }}>LOGOTYPE</h2>
        <ul className={style.nav}>
          {dataLinkNav.map((item) => (
            <li
              key={item.id}
              className={`${style.navItem} ${
                theme ? style.navItemDark : style.navItemLight
              }`}
            >
              {item.txt}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${style.searchContainer} ${
          theme ? style.searchContainerDark : style.searchContainerLight
        }`}
      >
        <input
          className={`${style.input} ${
            theme ? style.searchContainerDark : style.searchContainerLight
          }`}
          type="text"
          placeholder="Search for..."
        />
        {isSearch ? (
          <>
            {" "}
            <>
              <span
                onClick={onClose}
                className={`${style.searchIconClose} ${
                  theme && windowWidth < 767
                    ? style.navItemCloseDark
                    : style.navItemCloseLight
                }`}
              ></span>
            </>
          </>
        ) : (
          <>
            <span
              onClick={onSearch}
              className={`${style.searchIcon} ${
                theme ? style.navItemDark : style.navItemLight
              }`}
            ></span>
          </>
        )}
        {/* <span
          onClick={onSearch}
          className={`${style.searchIcon} ${
            theme ? style.navItemDark : style.navItemLight
          }`}
        ></span> */}
      </div>
    </section>
  );
};
export { Nav };
