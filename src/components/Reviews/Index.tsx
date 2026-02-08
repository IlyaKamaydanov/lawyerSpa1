import { useState } from "react";
import s from "./Reviews.module.scss";
import { ModalReview } from "../ModalReview/Index";
import { Button } from "../Button/Index";
import { createPortal } from "react-dom";

interface ReviewType {
  company: string;
  name: string;
  text: string;
}

const Reviews = () => {
  const [review] = useState<ReviewType[]>([
    {
      company: "ООО “ИТ Консалтинг”",
      name: "Логинова Анастасия",
      text: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов ...",
    },
    {
      company: "АО “ПРОМАРШ”",
      name: "Макаров Сергей",
      text: "Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.",
    },
    {
      company: "ООО “ИТ Консалтинг”",
      name: "Логинова Анастасия",
      text: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов ...",
    },
    {
      company: "АО “ПРОМАРШ”",
      name: "Макаров Сергей",
      text: "Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.",
    },
  ]);

  const [showAll, setShowAll] = useState(false);

  const show = () => {
    setShowAll(!showAll);
  };

  const [showModal, setShowModal] = useState(false);

  const ModalShow = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowModal(!showModal);
    event.preventDefault();
  };

  return (
    <div className={s.background}>
      <div className={s.container}>
        <h3 className={s.title}>Что о нас говорят клиенты</h3>
        <div className={s.reviews}>
          {!showAll
            ? review.slice(0, 2).map((item: ReviewType, index) => (
                <div className={s.review} key={index}>
                  <div className={s.nameText}>
                    <span className={s.company}>{item.company}</span>
                    <h4 className={s.titleName}>{item.name}</h4>
                  </div>
                  <p className={s.text}>{item.text}</p>
                </div>
              ))
            : review.map((item: ReviewType, index) => (
                <div className={s.review} key={index}>
                  <div className={s.nameText}>
                    <span className={s.company}>{item.company}</span>
                    <h4 className={s.titleName}>{item.name}</h4>
                  </div>
                  <p className={s.text}>{item.text}</p>
                </div>
              ))}
        </div>
        <div className={s.buttons}>
          {!showAll ? (
            <Button variant="blue" children="Все отзывы" click={show} />
          ) : (
            <Button variant="blue" children="Скрыть отзывы" click={show} />
          )}
          <Button variant="gray" children="Написать отзыв" click={ModalShow} />
        </div>
      </div>
      {createPortal(
        <div className={showModal ? s.show : s.none}>
          <ModalReview
            show={ModalShow}
            rew={review}
            closeModal={setShowModal}
            close={showModal}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export { Reviews };
