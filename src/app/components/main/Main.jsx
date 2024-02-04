import style from "./main.module.css";
import { LinkBlock } from "./link-block/LinkBlock";
import { HeaderBlock } from "./header-block/HeaderBlock";
import Image from "next/image";
const Main = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={style.container}>
      <LinkBlock />
      <HeaderBlock />
      <div className={style.mainContainer}>
        <div className={style.mainContent}>
          {arr.map((item) => (
            <div key={item} className={style.mainContentItem}>
              {/* <div className={style.itemImage}></div> */}
              <Image
                src={"/icon-main/imgmain.webp"}
                alt={item.alt}
                priority={true}
                width={347}
                height={171}
                loading="eager"
              />
              <h3 className={style.itemImage}>Lorem Ipsum is simply dummy</h3>
            </div>
          ))}
        </div>
        {/* <div className={style.mainBlockImg}></div> */}
        <div>
          <Image
            className={style.mainBlockImg}
            src={"/icon-main/ads.webp"}
            alt={"item.alt"}
            priority={true}
            width={300}
            height={600}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export { Main };
