import { useState } from "react";
import s from "./Navigation.module.scss";
import { Button } from "../Button/Index";

const LINKS = [
  { title: "Услуги", link: "#services" },
  { title: "О компании", link: "#about" },
  { title: "Наши юристы", link: "#lawyers" },
  { title: "Отзывы", link: "#reviews" },
  { title: "Новости", link: "#news" },
  { title: "Контакты", link: "#footer" },
];

const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className={s.container}>
      <ul className={s.links}>
        {LINKS.map((item, index) => (
          <li key={index}>
            <a href={item.link} className={s.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={s.menu}>
        {show ? (
          <nav className={s.mobContainer}>
            <ul className={s.mobMenu}>
              {LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className={s.mobLink}
                    onClick={() => setShow(!show)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              children="Закрыть"
              variant="blue"
              click={() => setShow(!show)}
            />
          </nav>
        ) : (
          <div className={s.mobNav} onClick={() => setShow(!show)}>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navigation };
