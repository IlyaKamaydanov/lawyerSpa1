import { Button } from "../Button/Index";
import s from "./Title.module.scss";

const Title = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1 className={s.head}>
          <span className={s.headUp}>Оказываем весь комплекс</span>
          Юридических услуг
        </h1>
        <p className={s.text}>
          Давно выяснено, что при оценке дизайна и композиции читаемый текст
          мешает сосредоточиться. Lorem Ipsum используют потому, что тот
          обеспечивает более или менее стандартное заполнение.
        </p>
      </div>
      <div className={s.button}>
        <Button variant="blue" children="Наши услуги" href="#services" />
      </div>
    </div>
  );
};

export { Title };
