import style from "./headerBlock.module.css";

const HeaderBlock = () => {
  return (
    <div className={style.container}>
      <section className={style.section}>
        <div className={style.sectionTop}></div>
      </section>
    </div>
  );
};

export { HeaderBlock };
