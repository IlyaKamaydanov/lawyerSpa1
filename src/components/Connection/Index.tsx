import s from "./Connection.module.scss";

const CONNECT = [
  {
    title: "+7 (922) 022-94-82",
    href: "tel: +7 (922) 022-94-82",
    img: "../../img/phone.svg",
    alt: "phone",
  },
  {
    title: "janis62@yahoo.com",
    href: "mailto: janis62@yahoo.com",
    img: "../../img/mail.svg",
    alt: "mail",
  },
];

const Connection = () => {
  return (
    <div className={s.container}>
      <div className={s.connect}>
        {CONNECT.map((item, index) => (
          <a key={index} className={s.link} href={item.href}>
            <img className={s.img} src={item.img} alt={item.alt}></img>
            {item.title}
          </a>
        ))}
      </div>
      <div className={s.button}></div>
    </div>
  );
};

export { Connection };
