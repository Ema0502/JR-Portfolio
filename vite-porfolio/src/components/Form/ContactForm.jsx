import { useForm, ValidationError } from '@formspree/react';
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const [submit, handleSubmit] = useForm("xaygllka");

  if (submit.succeeded) {
    return <div className={style.form}><h4>Muchas gracias por su consulta he recibido su mensaje</h4>
    <h4>me pondré en contacto pronto!</h4></div>;
  }

  return (
    <form
      action="https://formspree.io/f/xaygllka"
      method="POST"
      onSubmit={handleSubmit}
      className={style.form}
    >
      <h4>Consultas</h4>
      <div className={style.form__input}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese su nombre..."
        />
      </div>

      <div className={style.form__input}>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese su email..."
        />
      </div>

      <div className={style.form__input}>
        <label htmlFor="msj"></label>
        <textarea
          className={style.input__btn}
          id="msj"
          name="msj"
          rows="8"
          placeholder="Ingrese su mensaje..."
        ></textarea>
      </div>

      <ValidationError 
        prefix="Campo requerido" 
        field="name"
        errors={submit.errors}
      />
      <ValidationError 
        prefix="Campo requerido" 
        field="email"
        errors={submit.errors}
      />
      <ValidationError 
        prefix="Campo requerido" 
        field="msj"
        errors={submit.errors}
      />

      <button type="submit" className={style.submit__btn} disabled={submit.submitting}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;