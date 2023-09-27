import style from "./Contact.module.css";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Contacto</h2>
          </Col>

          <Col lg="6" md="6">
            <div className={style.contact__info_container}>
              <div className={style.single__info_box}>
                <h6>Locación</h6>
                <p>Salta Capital, Argentina</p>
              </div>

              <div className={style.single__info_box}>
                <h6>Teléfono</h6>
                <p>+54 387 9 6298 577</p>
              </div>
            </div>

            <div className={style.contact__info_container}>
              <div className={style.single__info_box}>
                <h6>Email</h6>
                <p>ema050296@gmail.com</p>
              </div>

              <div className={style.single__info_box}>
                <h6>Dirección</h6>
                <p>Block 43 M, V. Palacios - Salta </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;