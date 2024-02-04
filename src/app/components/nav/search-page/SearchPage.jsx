import Image from "next/image";
import style from "./searchPage.module.css";
import { dataLinkNavPage, dataButton, dataButtonD } from "@/app/dataMap/data";
import { useTheme } from "@/app/context";

const SearchPage = () => {
  const { theme } = useTheme();
  const onClick = () => {
    console.log("hi");
  };

  return (
    <section
      className={`${style.section} ${
        theme ? style.sectionDark : style.sectionLight
      }`}
    >
      <form
        className={`${style.searchContainer} ${
          theme ? style.inputkDark : style.inputLight
        }`}
      >
        <input
          type="text"
          placeholder="Search for..."
          className={`${style.input} ${
            theme ? style.inputkDark : style.inputLight
          }`}
        />
        <span type="submit" className={style.btn} onClick={onClick}></span>
      </form>
      <ul className={style.linkContainer}>
        {dataLinkNavPage.map((item) => (
          <li key={item.id} className={style.link}>
            {item.txt}
          </li>
        ))}
      </ul>
      <div className={style.navBtn}>
        {theme ? (
          <>
            {" "}
            {dataButton.map((item) => (
              <div
                key={item.alt}
                className={`${style.buttonNav} ${
                  theme ? style.buttonNavDark : style.buttonNavLight
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  priority={true}
                  width={20}
                  height={20}
                  loading="eager"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {dataButtonD.map((item) => (
              <div
                key={item.alt}
                className={`${style.buttonNav} ${
                  theme ? style.buttonNavDark : style.buttonNavLight
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  priority={true}
                  width={20}
                  height={20}
                  loading="eager"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};
export { SearchPage };
