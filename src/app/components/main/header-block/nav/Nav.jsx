import Image from "next/image";
import style from "./nav.module.css";

const Nav = () => {
  const dataButton = [1, 2, 3, 4];
  return (
    <>
      <div className={style.nav}>
        <p>Lorem Ipsum is simply dummy</p>
        {dataButton.map((item) => (
          <div key={item} className={style.buttonNav}>
            <Image
              src={"/icon-main/rectangle.svg"}
              alt={"rectangle"}
              priority={true}
              width={20}
              height={20}
              loading="eager"
            />
            <p>{"item"}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export { Nav };
