import style from "./main.module.css";
import { LinkBlock } from "./link-block/LinkBlock";
import { HeaderBlock } from "./header-block/HeaderBlock";
const Main = () => {
  return (
    <div className={style.container}>
      <LinkBlock />
      <HeaderBlock />
    </div>
  );
};

export { Main };
