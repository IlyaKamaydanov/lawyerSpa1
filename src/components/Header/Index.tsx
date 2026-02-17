import { Connection } from "../Connection/Index";
import { Navigation } from "../Navigation/Index";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.container} id="head">
      <Connection />
      <div className={s.mini}>
        <a className={s.title} href="#head">
          <h2 className={s.head}>Правозащитник</h2>
          <p className={s.text}>юридическая компания</p>
        </a>

        <Navigation />
      </div>
    </div>
  );
};

export { Header };
