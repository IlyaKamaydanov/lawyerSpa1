import { createPortal } from "react-dom";
import { Button } from "../Button/Index";
import s from "./Footer.module.scss";
import { ModalQuestion } from "../ModalQuestion/Index";
import { useState } from "react";

const CONNECT = [
  {
    img: "../../img/locationFooter.svg",
    alt: "Location",
    title: "Наш адрес",
    text: "г. Одинцово, пр. Будапештсткий, 40",
    link: "https://yandex.ru/maps/?text=55.671925,37.281809",
    target: "_blank",
  },
  {
    img: "../../img/phoneFooter.svg",
    alt: "Phone",
    title: "Запись на консультацию",
    text: "+7 (922) 022-94-82",
    link: "tel: +7 (922) 022-94-82",
  },
  {
    img: "../../img/mailFooter.svg",
    alt: "mail",
    title: "Корреспонденция",
    text: "janis62@yahoo.com",
    link: "mailto: janis62@yahoo.com",
  },
];

interface ConnectType {
  img: string;
  alt: string;
  title: string;
  text: string;
  link: string;
  target?: string;
}

const LINKS = [
  { title: "Услуги", link: "#services" },
  { title: "О компании", link: "#about" },
  { title: "Сертификаты", link: "#lawyers" },
  { title: "Отзывы", link: "#reviews" },
  { title: "Полезные материалы", link: "#news" },
  { title: "Благотворительность", link: "#" },
];

interface LinksType {
  title: string;
  link: string;
}

const Footer = () => {
  const [show, setShow] = useState(false);

  const questionForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShow(!show);
    event.preventDefault();
  };

  return (
    <div className={s.container} id="footer">
      <div className={s.head}>
        <a href="#head">
          <div className={s.logo}>
            <h3 className={s.title}>
              Правозащитник
              <span className={s.span}>Юридическая компания</span>
            </h3>
          </div>
        </a>
        <p className={s.text}>
          Предварительные выводы неутешительны: синтетическое тестирование, а
          также свежий взгляд на привычные вещи — безусловно открывает новые
          горизонты для экономической целесообразности принимаемых решений.
        </p>
      </div>
      <div className={s.foot}>
        <div className={s.connection}>
          {CONNECT.map((item: ConnectType, index) => (
            <div className={s.connect} key={index}>
              <img src={item.img} alt={item.alt} />
              <div className={s.texts}>
                <h5 className={s.conTitle}>{item.title}</h5>
                <a className={s.footLink} href={item.link} target={item.target}>
                  <p className={s.conText}>{item.text}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <ul className={s.links}>
          {LINKS.map((item: LinksType, index) => (
            <li className={s.li} key={index}>
              <a href={item.link} className={s.linkLink}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className={s.lawyer}>
          <div className={s.lawyerHead}>
            <img src="../../img/footerPhoto.svg" alt="lawyer" />
            <div className={s.headText}>
              <h5 className={s.name}>Миронов Александр</h5>
              <span className={s.specialty}>Ведущий юрист</span>
            </div>
          </div>
          <p className={s.lawyerText}>
            Есть над чем задуматься: тщательные исследования конкурентов
            разоблачены. Идейные соображения высшего порядка, а также
            перспективное планирование играет{" "}
          </p>
          <Button
            variant="blue"
            children="Задать вопрос юристу"
            click={questionForm}
          />
        </div>
      </div>
      {createPortal(
        <div className={show ? s.show : s.none}>
          <ModalQuestion showForm={questionForm} />
        </div>,
        document.body
      )}
    </div>
  );
};

export { Footer };
