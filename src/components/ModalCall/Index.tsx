import { useState } from "react";
import { Button } from "../Button/Index";
import s from "./ModalCall.module.scss";
import { useForm } from "react-hook-form";
import { CallFormSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";

interface ModalCallType {
  show: () => void;
}

const ModalCall = ({ show }: ModalCallType) => {
  const [value, setValue] = useState({
    phone: "",
    name: "",
  });
  const [send, setSend] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(CallFormSchema),
  });

  const onSubmit = (data: { name: string; phone: string }) => {
    setValue({
      ...data,
      name: value.name,
      phone: value.phone,
    });

    console.log(data);

    setSend(!send);

    reset();
  };

  return (
    <div className={s.background}>
      <div className={s.container}>
        {!send ? (
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h3 className={s.title}>Заказать обратный звонок</h3>
            <label className={s.label}>
              Ваше имя
              <div className={s.err}>
                <input
                  {...register("name")}
                  className={s.input}
                  type="text"
                  placeholder="Введите имя"
                />
                <p className={s.error}>{errors.name?.message}</p>
              </div>
            </label>
            <label className={s.label}>
              Номер телефона
              <div className={s.err}>
                <input
                  {...register("phone")}
                  className={s.input}
                  type="tel"
                  placeholder="Введите номер телефона 8(...)"
                />
                <p className={s.error}>{errors.phone?.message}</p>
              </div>
            </label>
            <input type="submit" value={"Заказать"} className={s.button} />
            <Button variant="gray" children="Закрыть" click={show} />
          </form>
        ) : (
          <div className={s.form}>
            <p className={s.message}>
              Мы приняли вашу заявку на звонок. Свяжемся с вами в течение часа
            </p>
            <Button variant="gray" children="Закрыть" click={show} />
          </div>
        )}
      </div>
    </div>
  );
};

export { ModalCall };
