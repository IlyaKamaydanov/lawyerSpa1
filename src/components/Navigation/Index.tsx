import s from "./Navigation.module.scss";

const LINKS = [
  { title: "Услуги", link: "#services" },
  { title: "О компании", link: "#" },
  { title: "Наши юристы", link: "#" },
  { title: "Отзывы", link: "#" },
  { title: "Новости", link: "#" },
  { title: "Контакты", link: "#" },
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
