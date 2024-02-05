import style from "./headerBlock.module.css";
import { Nav } from "./nav/Nav";
import { Rating } from "./rating/Rating";
const HeaderBlock = () => {
  return (
    <div className={style.container}>
      <section className={style.section}>
        <div className={style.sectionTop}></div>
      </section>
      <div className={style.menu}>
        <div className={style.nav}>
          <Nav />
          <Rating />
        </div>
        <div className={style.rating}></div>
      </div>
    </div>
  );
};

export { HeaderBlock };
