import { Button } from "../Button/Index";
import s from "./AboutCompany.module.scss";

const AboutCompany = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <h3 className={s.title}>
          юридическая компания <span className={s.blue}>правозащитник</span>
        </h3>
        <div className={s.texts}>
          <p className={s.text}>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение.
          </p>
          <p className={s.text}>
            Есть много вариантов Lorem Ipsum, но большинство из них имеет не
            всегда приемлемые модификации, например, юмористические вставки или
            слова, которые даже отдалённо не напоминают латынь. Если вам нужен
            Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
            какой-нибудь шутки, скрытой в середине абзаца.
          </p>
          <p className={s.text}>
            За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
            версии появились по ошибке, некоторые - намеренно (например,
            юмористические варианты).
          </p>
        </div>
        <div className={s.buttons}>
          <Button variant="blue" children="История компании" />
          <Button variant="gray" children="Сертификаты" />
        </div>
      </div>
      <div className={s.img}>
        <img src="../../img/aboutIMG.png" alt="aboutIMG" />
      </div>
    </div>
  );
};

export { AboutCompany };
