import { useTheme } from "@/app/context";
import style from "./textContent.module.css";

const TextContent = () => {
  const { theme } = useTheme();
  return (
    <div className={style.txtBlock}>
      <p className={style.txtBlockLink}>
        Home &gt; Lorem Ipsum is &gt;{" "}
        <strong> Lorem Ipsum is simply dummy</strong>
      </p>
      <h1 className={style.txtBlockTitle}>Lorem Ipsum is simply dummy</h1>
      <p className={`${style.txtBlockTxt} ${theme ? style.dark : style.light}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry`s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div style={{ marginLeft: "10px" }}>
        <p
          className={`${style.articlesTxt} ${theme ? style.dark : style.light}`}
        >
          Similar articles
        </p>
        <span className={style.articles}></span>
      </div>
    </div>
  );
};

export { TextContent };
