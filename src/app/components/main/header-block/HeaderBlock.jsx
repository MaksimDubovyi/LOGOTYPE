import style from "./headerBlock.module.css";
import { Nav } from "./nav/Nav";
import { Rating } from "./rating/Rating";
import { MoreInfo } from "./more-info/MoreInfo";
import { useTheme } from "@/app/context";
import { ContentLeft } from "./content-left/ContentLeft";
import { ContentRight } from "./content-right/ContentRight";
import { useState } from "react";
const HeaderBlock = () => {
  const { theme } = useTheme();
  const [rating, setRating] = useState(9);
  return (
    <div
      className={`${style.container} 
      ${theme ? style.dark : style.light}`}
    >
      <section className={style.section}>
        <div className={style.sectionTop}>
          <div className={style.content}>
            <div>
              <ContentLeft />
            </div>
            <div className={style.contentRight}>
              <ContentRight rating={rating} />
            </div>
          </div>
        </div>
      </section>

      <div className={style.nav}>
        <Nav />
        <Rating setRating={setRating} />
      </div>
      <div className={style.navMenu}>
        <MoreInfo />
      </div>
    </div>
  );
};

export { HeaderBlock };
