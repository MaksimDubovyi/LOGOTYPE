import Image from "next/image";
import style from "./moreInfo.module.css";
import { useState } from "react";
import { useTheme } from "@/app/context";

const MoreInfo = () => {
  const { theme } = useTheme();
  const [isMenuExpanded, setMenuExpanded] = useState(false);
  const toggleMenu = () => {
    setMenuExpanded((prev) => !prev);
  };
  const dataButton = [1, 2, 3, 4];
  return (
    <div>
      <div className={style.container}>
        <p
          className={`${style.txt} 
      ${theme ? style.darkTxt : style.lightTxt}`}
        >
          More info
        </p>
        <button onClick={toggleMenu} className={style.button}>
          <Image
            src={`${
              theme
                ? "/icon-main-header-block/menuD.svg"
                : "/icon-main-header-block/menu.svg"
            }`}
            alt={"menu"}
            priority={true}
            width={20}
            height={15}
          />
        </button>
      </div>
      {theme ? (
        <>
          <div
            className={`${style.darkMenu} ${
              isMenuExpanded ? style.menuOn : style.menuOff
            }`}
          >
            <h5 className={style.menuTitle}>Lorem Ipsum is simply dummy</h5>
            <h5 className={style.menuTitleItem}>item</h5>
            <span className={style.span}></span>
            <ul className={style.menuItem}>
              {dataButton.map((item) => (
                <li className={style.li} key={item}>
                  item
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${style.menu} ${
              isMenuExpanded ? style.menuOn : style.menuOff
            }`}
          >
            <h5 className={style.menuTitle}>Lorem Ipsum is simply dummy</h5>
            <h5 className={style.menuTitleItem}>item</h5>
            <span className={style.span}></span>
            <ul className={style.menuItem}>
              {dataButton.map((item) => (
                <li className={style.li} key={item}>
                  item
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export { MoreInfo };
