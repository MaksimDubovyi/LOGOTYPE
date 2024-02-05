import Image from "next/image";
import style from "./card.module.css";
import { dataButtonCard, dataButtonCardD } from "@/app/dataMap/data";
import { useTheme } from "@/app/context";
const Card = () => {
  const { theme } = useTheme();
  const arr = [1, 2, 3, 4];
  return (
    <>
      {" "}
      {arr.map((item) => (
        <div
          key={item}
          className={`${style.mainContentItem} ${
            theme ? style.darkContentItem : style.lightContentItem
          }`}
        >
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
            {dataButtonCardD ? (
              <>
                {dataButtonCard.map((item) => (
                  <div
                    key={item.alt}
                    className={`${style.buttonNav} ${
                      theme ? style.dark : style.light
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
                    <p style={{ margin: "0px" }}>{item.text}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                {dataButtonCardD.map((item) => (
                  <div
                    key={item.alt}
                    className={`${style.buttonNav} ${
                      theme ? style.dark : style.light
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
                    <p style={{ margin: "0px" }}>{item.text}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export { Card };
