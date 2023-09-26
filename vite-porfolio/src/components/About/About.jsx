import style from "./About.module.css"
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../img/Captura_de_pantalla_2023-08-20_081923-removebg-preview.png";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5"><h2>Acerca de mi</h2></Col>

          <Col lg="4" md="3">
            <div className={style.about__btns}>
              <button className={style.about__btn}>Acerca de mi</button>
              <button className={style.about__btn}>Experiencia Academica</button>
              <button className={style.about__btn}>Habilidades</button>
              <button className={style.about__btn}>Award</button>
            </div>
          </Col>

          <Col lg="8" md="9">
            <div className={style.about__content__wrapper}>
              <div className={style.about__img}>
                <img src={aboutImg} alt="" className="w-100" />
              </div>

              <div className={style.about__content}>
                <h2>Yo soy José Rosas</h2>
                <p></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;