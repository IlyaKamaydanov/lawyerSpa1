import { useState } from "react";
import { Button } from "../Button/Index";
import s from "./ModalQuestion.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { QuestionsSchema } from "../../validation";

interface ModalQuestionType {
  showForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalQuestion = ({ showForm }: ModalQuestionType) => {
  const [question, setQuestion] = useState({
    mail: "",
    question: "",
  });

  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(QuestionsSchema),
  });

  const onSubmit = (data: { mail: string; question: string }) => {
    setQuestion({ ...data, mail: question.mail, question: question.question });
    console.log(question);
    setQuestion({ ...data, mail: "", question: "" });

    //написать функцию которая меняет форму на текст что вопрос отправлен. сделать проверку и менять форму на текст
  };

  return (
    <div className={s.background}>
      <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={s.title}>Вопрос юристу</h3>
          <label className={s.label}>
            Ваша почта
            <input
              {...register("mail")}
              className={s.input}
              type="text"
              placeholder="Укажите почту"
              onChange={(e) =>
                setQuestion({ ...question, mail: e.target.value })
              }
              value={question.mail}
            />
          </label>
          <label className={s.label}>
            Ваш вопрос
            <textarea
              {...register("question")}
              className={s.textarea}
              placeholder="Опишите вопрос"
              onChange={(e) =>
                setQuestion({ ...question, question: e.target.value })
              }
              value={question.question}
            />
          </label>
          <div className={s.buttons}>
            <Button variant="blue" children="Отправить вопрос" />
            <Button variant="gray" children="Закрыть" click={showForm} />
          </div>
        </form>
      </div>
    </div>
  );
};

export { ModalQuestion };
