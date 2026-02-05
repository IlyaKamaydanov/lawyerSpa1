import s from "./Lawyers.module.scss";
import { Lawyer } from "../Lawyer/Index";

interface LawyersType {
  img: string;
  name: string;
  activity: string;
  text: string;
  experience: string;
}

const LAWYERS = [
  {
    img: "../../img/lawyer1.png",
    name: "Горюнова Полина Алексеевна",
    activity: "Юрист международного права",
    text: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
    experience: "10 лет юридической практики",
  },
  {
    img: "../../img/lawyer2.png",
    name: "Миронов Александр Германович",
    activity: "Кредитный адвокат, банковский юрист",
    text: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
    experience: "15 лет юридической практики",
  },
  {
    img: "../../img/lawyer3.jpg",
    name: "Шестаков Олег Егорович",
    activity: "Юридический консультант",
    text: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
    experience: "12 лет юридической практики",
  },
  {
    img: "../../img/lawyer4.png",
    name: "Архипов Максим Константинович",
    activity: "Корпоративный юрист",
    text: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
    experience: "11 лет юридической практики",
  },
];

const Lawyers = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.head}>
          <h3 className={s.title}>Наши юристы</h3>
          <p className={s.text}>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение шаблона
          </p>
        </div>
        <div className={s.lawyers}>
          {LAWYERS.map((item: LawyersType) => (
            <Lawyer
              img={item.img}
              name={item.name}
              activity={item.activity}
              text={item.text}
              experience={item.experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Lawyers };
