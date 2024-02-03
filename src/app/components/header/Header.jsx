"use client";
import Image from "next/image";
import style from "./header.module.css";
import { dataButton, dataLink } from "../../dataMap/data";
import { ButtonTheme } from "./button-theme/ButtonTheme";
import { useEffect, useState } from "react";
import { BtnLink } from "@/app/components/ui/btn-link/BtnLink";
const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.navBtn}>
        {dataButton
          .slice(0, windowWidth >= 768 && windowWidth <= 1200 ? 3 : undefined)
          .map((item) => (
            <div key={item.alt} className={style.buttonNav}>
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
      </div>
      <div className={style.nav}>
        <BtnLink dataLink={dataLink} wd={20} hg={20} />
        <ButtonTheme />
      </div>{" "}
    </div>
  );
};

export { Header };
