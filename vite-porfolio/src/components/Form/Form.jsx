import style from "./Form.module.css";
import { useState } from "react";

const Form = () => {

  
  const [input, setInput] = useState({
    name: "",
    email: "",
    msj: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  return ( <form onSubmit={handleSubmit} className={style.form}>
    <div className={style.form__input}>
      <input type="text" onChange={handleChange} placeholder="Tu nombre..." />
    </div>

    <div className={style.form__input}>
      <input type="email" onChange={handleChange} placeholder="Tu email..." />
    </div>

    <div className={style.form__input}>
      <textarea className={style.input__btn} onChange={handleChange} rows="8" placeholder="Tu mensaje..."></textarea>
    </div>

    <button type="submit" className={style.submit__btn}>
      Enviar
    </button>
  </form>
  )
}

export default Form