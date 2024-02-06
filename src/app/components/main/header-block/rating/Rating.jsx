import style from "./rating.module.css";

const Rating = ({ setRating }) => {
  const values = ["Note", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const onClick = (event) => {
    console.log(event.target.innerText);
    setRating(event.target.innerText);
  };
  return (
    <div className={style.container}>
      <ul className={style.rating}>
        {values.map((item) => (
          <li key={item} className={style.item}>
            <button onClick={onClick} className={style.button}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export { Rating };
