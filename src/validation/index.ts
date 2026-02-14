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

const CallFormSchema = yup.object({
  name: yup
    .string()
    .required("Введите имя")
    .min(2, "Минимум 2 символа")
    .typeError("Введите имя "),
  phone: yup
    .string()
    .required("Введите номер")
    .min(11, "Минимум 11 цифр, только цифры")
    .max(11, "Максимум 11 цифр")
    .typeError("Введите номер "),
});
export { ReviewFormSchema, CallFormSchema };
