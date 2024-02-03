"use client";
import style from "./buttontheme.module.css";
import { useTheme } from "@/app/context";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const updateTheme = () => {
    toggleTheme();
  };
  return (
    <div onClick={updateTheme}>
      <div className={style.container}>
        <input
          type="checkbox"
          className={style.customCheckbox}
          id="custom-checkbox"
          onClick={(e) => e.stopPropagation()}
        />
        <label
          htmlFor="custom-checkbox"
          className={style.checkboxLable}
        ></label>
      </div>
    </div>
  );
};

export { ButtonTheme };
