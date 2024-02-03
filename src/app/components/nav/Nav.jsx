import style from "./nav.module.css";
import { dataLinkNav } from "@/app/dataMap/data";
import { useTheme } from "@/app/context";
const Nav = () => {
  const { theme } = useTheme();
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
        <span
          className={`${style.searchIcon} ${
            theme ? style.navItemDark : style.navItemLight
          }`}
        ></span>
      </div>
    </section>
  );
};
export { Nav };
