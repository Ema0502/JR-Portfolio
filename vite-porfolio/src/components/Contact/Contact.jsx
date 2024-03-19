import style from "./Contact.module.css";
import { Container, Row, Col } from "reactstrap";
import ContactForm from "../Form/ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <h2>Contacto</h2>
          </Col>

          <Col lg="6" md="6" className="w-100">
            <div className={style.contact__info_container}>
              <div className={style.single__info_box}>
                <h6>Locación</h6>
                <p>Buenos Aires, Argentina</p>
              </div>

              <div className={style.single__info_box}>
                <h6>Teléfono</h6>
                <p>+54 11 3063 2686</p>
              </div>
            </div>

            <div className={style.contact__info_container}>
              <div className={style.single__info_box}>
                <h6>Email</h6>
                <p>ema050296@gmail.com</p>
              </div>

              <div className={style.single__info_box}>
                <h6>Dirección</h6>
                <p>GBA Zona Norte, Argentina </p>
              </div>
            </div>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;