import s from "./Button.module.scss";

interface ButtonType {
  variant: "blue" | "gray" | "noBack";
  children: string;
  click?: () => void;
  href?: string;
}

const Button = ({ variant, children, click, href }: ButtonType) => {
  return (
    <a href={href}>
      <button
        onClick={click}
        className={
          variant === "blue"
            ? s.blue
            : variant === "gray"
              ? s.gray
              : variant === "noBack"
                ? s.noBack
                : undefined
        }
      >
        {children}
      </button>
    </a>
  );
};

export { Button };
