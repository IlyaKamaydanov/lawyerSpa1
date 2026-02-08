import * as yup from "yup";

const ReviewFormSchema = yup.object({
  name: yup
    .string()
    .required("Введите имя и фамилию")
    .min(2, "Минимум 2 символа")
    .typeError("Введите имя и фамилию"),
  company: yup
    .string()
    .required("Введите название компании")
    .min(2, "Минимум 2 символа")
    .typeError("Введите название компании"),
  text: yup
    .string()
    .required("Напишите отзыв")
    .min(10, "Минимум 10 символов")
    .typeError("Напишите отзыв"),
});

export { ReviewFormSchema };
