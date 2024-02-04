import Link from "next/link";
import style from "./linkBlock.module.css";
import { dataButtonLinkBlock } from "@/app/dataMap/data";
import Image from "next/image";

const LinkBlock = () => {
  return (
    <div className={style.container}>
      {dataButtonLinkBlock.map((item, index) => (
        <div
          key={item.src}
          className={style.buttonNav}
          style={{ backgroundColor: `${item.color}` }}
        >
          <Link href={"#"}>
            <Image
              src={item.src}
              alt={item.alt}
              priority={true}
              width={20}
              height={20}
              loading="eager"
            />{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};
export { LinkBlock };
