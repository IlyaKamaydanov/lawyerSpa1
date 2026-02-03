import { useState } from "react";
import { Button } from "../Button/Index";
import s from "./Services.module.scss";

interface ServicesType {
  img: string;
  title: string;
  text: string;
  alt: string;
}

const SERVICES = [
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Банкротство физических лиц",
    text: "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Сопровождение сделок",
    text: "Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Корпоративные споры",
    text: "Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Недвижимость и строительство",
    text: "Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Возврат страховых премий",
    text: "Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя; оригинал страхового полиса",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Налоговое право и споры",
    text: "Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах.",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Банкротство физических лиц",
    text: "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Сопровождение сделок",
    text: "Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Корпоративные споры",
    text: "Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Недвижимость и строительство",
    text: "Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Возврат страховых премий",
    text: "Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя; оригинал страхового полиса",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Налоговое право и споры",
    text: "Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах.",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Банкротство физических лиц",
    text: "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Сопровождение сделок",
    text: "Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Корпоративные споры",
    text: "Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Недвижимость и строительство",
    text: "Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Возврат страховых премий",
    text: "Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя; оригинал страхового полиса",
  },
  {
    img: "../../img/check.svg",
    alt: "checkIMG",
    title: "Налоговое право и споры",
    text: "Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах.",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const show = () => {
    setShowAll(!showAll);
    console.log(showAll);
  };

  return (
    <div className={s.background} id="services">
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>Наши услуги</h2>
          <p className={s.text}>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение шаблона
          </p>
        </div>
        <div className={s.services}>
          {!showAll
            ? SERVICES.slice(0, 6).map((item: ServicesType, index) => (
                <div className={s.service} key={index}>
                  <img className={s.img} src={item.img} alt={item.alt} />
                  <h3 className={s.serviceTitle}>{item.title}</h3>
                  <p className={s.serviceText}>{item.text}</p>
                </div>
              ))
            : SERVICES.map((item: ServicesType, index) => (
                <div className={s.service} key={index}>
                  <img className={s.img} src={item.img} alt={item.alt} />
                  <h3 className={s.serviceTitle}>{item.title}</h3>
                  <p className={s.serviceText}>{item.text}</p>
                </div>
              ))}
        </div>

        <div className={s.button}>
          {!showAll ? (
            <Button variant="blue" children="Все услуги" click={show} />
          ) : (
            <Button variant="blue" children="Скрыть" click={show} />
          )}
        </div>
      </div>
    </div>
  );
};

export { Services };
