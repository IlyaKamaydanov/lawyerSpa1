import { Connection } from "../Connection/Index";
import { Navigation } from "../Navigation/Index";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.container}>
      <Connection />
      <div className={s.mini}>
        <div className={s.title}>
          <h2 className={s.head}>Правозащитник</h2>
          <p className={s.text}>юридическая компания</p>
        </div>

        <Navigation />
      </div>
    </div>
  );
};

export { Header };
