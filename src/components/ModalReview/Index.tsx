import { useState } from "react";
import { Button } from "../Button/Index";
import s from "./ModalReview.module.scss";
import { useForm } from "react-hook-form";
import { ReviewFormSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";

interface ModalType {
  show: (event: React.MouseEvent<HTMLButtonElement>) => void;
  rew: { company: string; name: string; text: string }[];
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  close: boolean;
}

const ModalReview = ({ show, rew, close, closeModal }: ModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ReviewFormSchema),
  });

  const [value, setValue] = useState({
    name: "",
    company: "",
    text: "",
  });

  const onSubmit = (data: { name: string; company: string; text: string }) => {
    setValue({
      ...data,
      name: value.name,
      company: value.company,
      text: value.text,
    });

    rew.push(value);
    setValue({
      ...data,
      name: "",
      company: "",
      text: "",
    });

    closeModal(!close);
  };

  return (
    <div className={s.background}>
      <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={s.title}>Ваш отзыв</h3>
          <label className={s.label}>
            Ваше имя и Фамилия
            <div className={s.err}>
              <input
                {...register("name")}
                type="text"
                className={s.input}
                placeholder="Имя и фамилия"
                onChange={(e) => setValue({ ...value, name: e.target.value })}
                value={value.name}
              />
              <p className={s.error}>{errors.name?.message}</p>
            </div>
          </label>
          <label className={s.label}>
            Название компании
            <div className={s.err}>
              <input
                {...register("company")}
                type="text"
                className={s.input}
                placeholder="Название компании"
                onChange={(e) =>
                  setValue({ ...value, company: e.target.value })
                }
                value={value.company}
              />
              <p className={s.error}>{errors.company?.message}</p>
            </div>
          </label>
          <label className={s.label}>
            Отзыв
            <div className={s.err}>
              <textarea
                {...register("text")}
                className={s.textarea}
                onChange={(e) => setValue({ ...value, text: e.target.value })}
                value={value.text}
                placeholder="Напишите отзыв"
              />
              <p className={s.error}>{errors.text?.message}</p>
            </div>
          </label>
          <input type="submit" value={"Отправить"} className={s.button} />
          <Button variant="gray" children="Закрыть" click={show} />
        </form>
      </div>
    </div>
  );
};

export { ModalReview };
