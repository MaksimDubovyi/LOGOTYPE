import Image from "next/image";
import style from "./aside.module.css";

const Aside = () => {
  return (
    <aside>
      <div className={style.aside}>
        <p className={style.title}>ADS</p>
        <p className={style.sixe}>300x600</p>
      </div>
    </aside>
  );
};

export { Aside };
