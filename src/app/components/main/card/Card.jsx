import Image from "next/image";
import style from "./card.module.css";
import { dataButtonCard } from "@/app/dataMap/data";
const Card = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      {" "}
      {arr.map((item) => (
        <div key={item} className={style.mainContentItem}>
          <Image
            className={style.mainContentImg}
            src={"/icon-main/imgmain.webp"}
            alt={"item.altccc"}
            priority={true}
            width={310}
            height={171}
            loading="eager"
          />
          <p className={style.itemTxt}>Lorem Ipsum is simply dummy</p>
          <div className={style.navBtn}>
            {dataButtonCard.map((item) => (
              <div key={item.alt} className={style.buttonNav}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  priority={true}
                  width={20}
                  height={20}
                  loading="eager"
                />
                <p style={{ margin: "0px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export { Card };
