import style from "./rating.module.css";
const values = ["Note", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const Rating = () => {
  return (
    <div className={style.container}>
      <ul className={style.rating}>
        {values.map((item) => (
          <li key={item} className={style.item}>
            <button className={style.button}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export { Rating };
