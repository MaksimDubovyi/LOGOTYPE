import Image from "next/image";
import style from "./contentLeft.module.css";

const ContentLeft = () => {
  return (
    <div className={style.container}>
      <Image
        className={style.Image}
        src={"/icon-main-header-block/hero.webp"}
        alt={"hero"}
        priority={true}
        width={89}
        height={89}
        loading="eager"
      />
      <div>
        <h3 className={style.title}>Lorem Ipsum is simply dummy</h3>
        <div className={style.containerBtn}>
          <button className={style.btnWhite}>
            {" "}
            <Image
              className={style.btnImage}
              src={"/icon-main-header-block/Android.svg"}
              alt={"Android"}
              priority={true}
              width={13}
              height={14}
              loading="eager"
            />
            Android
          </button>
          <button className={style.btnWhite}>
            {" "}
            <Image
              className={style.btnImage}
              src={"/icon-main-header-block/iOS.svg"}
              alt={"iOS"}
              priority={true}
              width={10}
              height={13}
              loading="eager"
            />
            iOS
          </button>
          <button className={style.btnColor}>
            {" "}
            <Image
              className={style.btnImage}
              src={"/icon-main-header-block/Download.svg"}
              alt={"Download"}
              priority={true}
              width={16}
              height={14}
              loading="eager"
            />
            Download on PC
          </button>
        </div>
      </div>
    </div>
  );
};

export { ContentLeft };
