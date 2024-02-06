import style from "./contentRight.module.css";

const ContentRight = ({ rating }) => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <div className={style.containerImg2}>
          <div className={style.containerImg3}>
            <p className={style.p}>6.4</p>
          </div>
        </div>
      </div>
      <div className={style.containerT}>
        <h3 className={style.txt1}>Players</h3>
        <p className={style.txt2}>12 votes</p>
        <div className={style.containerTxt}>
          <h4 className={style.txt3}>Your rating:</h4>
          <h4 className={style.txt4}>{rating}</h4>
        </div>
      </div>
    </div>
  );
};

export { ContentRight };
