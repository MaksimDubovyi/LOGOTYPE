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
              <div className={style.itemImage}></div>
              <h3 className={style.itemImage}>Lorem Ipsum is simply dummy</h3>
            </div>
          ))}
        </div>
        <div className={style.mainBlockImg}></div>
      </div>
    </div>
  );
};

export { Main };
