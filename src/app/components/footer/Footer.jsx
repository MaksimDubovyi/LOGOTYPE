import style from "./footer.module.css";
import { BtnLink } from "@/app/components/ui/btn-link/BtnLink";
import { useTheme } from "@/app/context";
import {
  dataLinkFoter,
  dataButtonFoter,
  dataLinkBtn,
  dataLink,
} from "@/app/dataMap/data";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className={style.block}>
      <div
        className={`${style.whiteContainer} ${
          theme ? style.dark : style.light
        }`}
      >
        <div className={style.whiteContainerTitle}>
          <h2>LOGOTYPE</h2>
        </div>
        <div
          className={`${style.whiteContainerContent} ${
            theme ? style.dark : style.light
          }`}
        >
          <p>Lorem Ipsum is simply dummy</p>
          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five
          </p>
        </div>

        <div className={style.whiteContainerBtnLink}>
          <BtnLink dataLink={theme ? dataLink : dataLinkBtn} wd={30} hg={30} />
        </div>
      </div>

      <div className={style.linkContainer}>
        <div className={style.link}>
          <div>
            <h3>Categhory</h3>
            <ul>
              {dataButtonFoter.map((item) => (
                <li className={style.ul} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Play better</h3>
            <ul>
              {dataButtonFoter.map((item) => (
                <li className={style.ul} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Usehul links</h3>
            <ul>
              {dataLinkFoter.map((item) => (
                <li key={item.id}>{item.txt}</li>
              ))}
            </ul>
          </div>
        </div>
        <p>Copyright © 2024. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export { Footer };
