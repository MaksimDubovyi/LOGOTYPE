import style from "./main.module.css";
import { LinkBlock } from "./link-block/LinkBlock";
import { HeaderBlock } from "./header-block/HeaderBlock";
import { TextContent } from "./text-content/TextContent";
import { Card } from "./card/Card";
import { Aside } from "./aside/Aside";
import { useTheme } from "@/app/context";

const Main = () => {
  const { theme } = useTheme();
  return (
    <div className={style.container}>
      <LinkBlock />
      <HeaderBlock />
      <div
        className={`${style.mainContainer} 
      ${theme ? style.dark : style.light}`}
      >
        <div className={style.mainContent}>
          <TextContent />
          <Card />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export { Main };
