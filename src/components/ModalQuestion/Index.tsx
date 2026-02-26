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

  const [message, setMessage] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(QuestionsSchema),
  });

  const onSubmit = (data: { mail: string; question: string }) => {
    setQuestion({ ...data, mail: question.mail, question: question.question });
    console.log(question);
    setQuestion({ ...data, mail: "", question: "" });
    setMessage(!message);
  };

  return (
    <div className={s.background}>
      <div className={s.container}>
        {message ? (
          <div className={s.message}>
            <p>Ваш вопрос отправлен юристу</p>
            <Button variant="blue" children="Закрыть" click={showForm}></Button>
          </div>
        ) : (
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
            <p className={s.error}>{errors.mail?.message}</p>
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
            <p className={s.error}>{errors.question?.message}</p>
            <div className={s.buttons}>
              <Button variant="blue" children="Отправить вопрос" />
              <Button variant="gray" children="Закрыть" click={showForm} />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export { ModalQuestion };
