import s from "./Navigation.module.scss";

const LINKS = [
  { title: "Услуги", link: "#services" },
  { title: "О компании", link: "#about" },
  { title: "Наши юристы", link: "#lawyers" },
  { title: "Отзывы", link: "#reviews" },
  { title: "Новости", link: "#news" },
  { title: "Контакты", link: "#footer" },
];

const Navigation = () => {
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
    </nav>
  );
};

export { Navigation };
