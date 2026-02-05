import { useState } from "react";
import s from "./Lawyer.module.scss";

interface LawyerType {
  img: string;
  name: string;
  activity: string;
  text: string;
  experience: string;
}

const Lawyer = ({ img, name, activity, text, experience }: LawyerType) => {
  const [toggleLawyer, setToggleLawyer] = useState(true);

  return (
    <div className={s.lawyer}>
      {toggleLawyer ? (
        <div className={s.before} onMouseEnter={() => setToggleLawyer(false)}>
          <img className={s.img} src={img} alt={name} />
          <h3 className={s.name}>{name}</h3>
          <p className={s.activity}>{activity}</p>
        </div>
      ) : (
        <div className={s.after} onMouseLeave={() => setToggleLawyer(true)}>
          <div>
            <h3 className={s.name}>{name}</h3>
            <p className={activity}>{activity}</p>
          </div>
          <p className={s.text}>{text}</p>
          <p className={s.experience}>{experience}</p>
        </div>
      )}
    </div>
  );
};

export { Lawyer };
