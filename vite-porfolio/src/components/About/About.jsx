import style from "./About.module.css"
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {

  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5"><h2>Acerca de mi</h2></Col>

          <Col lg="4" md="3">
            <div className={style.about__btns}>
              <button className={`${style.about__btn} ${aboutFilter === "ABOUT" ? style.about__btn_active : ""}`} onClick={() => setAboutFilter("ABOUT")}>Acerca de mi</button>
              <button className={`${style.about__btn} ${aboutFilter === "EDUCATION" ? style.about__btn_active : ""}`} onClick={() => setAboutFilter("EDUCATION")}>Experiencia Academica</button>
              <button className={`${style.about__btn} ${aboutFilter === "SKILLS" ? style.about__btn_active : ""}`} onClick={() => setAboutFilter("SKILLS")}>Tecnologías</button>
            </div>
          </Col>

          <Col lg="8" md="9">
            <div className={style.about__content__wrapper}>
            {
              aboutFilter === "ABOUT" && (
                <div className="">
                  <div className={`${style.about__content} ${style.w75}`}>
                    <h3 className={style.about__padding_text}>Mi nombre es José Emanuel Rosas</h3>
                    <p className={style.about__padding_text}>Desde chico estuve interesado en el mundo IT, estudié y trabajé como técnico en reparación de PC. Hoy tengo mas de 700horas de codeo gracias al Bootcamp de soyHenry.
                    Actualmente me dedico a desarrollar proyectos que me permiten avanzar y potenciar mi formación como programador.
                    </p>

                    <div className={style.social__links}>
                      <h6 className={style.about__padding_text}>Conectate conmigo</h6>
                      <span><a href="#"><i className="ri-whatsapp-fill"></i></a></span>
                      <span><a href="#"><i className="ri-linkedin-fill"></i></a></span>
                      <span><a href="#"><i className="ri-github-fill"></i></a></span>
                      <span><a href="#"><i className="ri-instagram-fill"></i></a></span>
                    </div>
                  </div>
                </div>)
            }

            {
              aboutFilter === "EDUCATION" && <Education />
            }

            {
              aboutFilter === "SKILLS" && <Skills />
            }
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;