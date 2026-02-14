import { useState } from "react";
import { Button } from "../Button/Index";
import s from "./Connection.module.scss";
import { createPortal } from "react-dom";
import { ModalCall } from "../ModalCall/Index";

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
  const [callForm, setCallForm] = useState(false);

  const ShowForm = () => {
    setCallForm(!callForm);
  };

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
      <div className={s.button}>
        <Button variant="noBack" children="Заказать звонок" click={ShowForm} />
      </div>
      {createPortal(
        <div className={callForm ? s.show : s.none}>
          <ModalCall show={ShowForm} />
        </div>,
        document.body
      )}
    </div>
  );
};

export { Connection };
