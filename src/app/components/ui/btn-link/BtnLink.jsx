import Image from "next/image";
import Link from "next/link";
import style from "./btnLink.module.css";
const BtnLink = ({ dataLink, wd, hg }) => {
  return (
    <>
      {/* {dataLink.map((item, index) => (
        <div key={item.src + item.alt + index} className={style.buttonNav}>
          <Link href={"#"}>
            {" "}
            <Image
              src={item.src}
              alt={item.alt}
              priority={true}
              width={wd}
              height={hg}
              loading="eager"
            />{" "}
          </Link>
        </div>
      ))} */}
    </>
  );
};

export { BtnLink };
