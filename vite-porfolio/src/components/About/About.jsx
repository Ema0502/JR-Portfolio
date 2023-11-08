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
          <Col lg={12} className="mb-5"><h2>Acerca de mí</h2></Col>

          <Col lg="4" md="3">
            <div className={style.about__btns}>
              <button className={`${style.about__btn} ${aboutFilter === "ABOUT" ? style.about__btn_active : ""}`} onClick={() => setAboutFilter("ABOUT")}>Acerca de mí</button>
              <button className={`${style.about__btn} ${aboutFilter === "EDUCATION" ? style.about__btn_active : ""}`} onClick={() => setAboutFilter("EDUCATION")}>Experiencia Académica</button>
              <button className={`${style.about__btn} ${aboutFilter === "SKILLS" ? style.about__btn_active : ""}`} onClick={() => setAboutFilter("SKILLS")}>Tecnologías</button>
            </div>
          </Col>

          <Col lg="8" md="9">
            <div className={style.about__content__wrapper}>
            {
              aboutFilter === "ABOUT" && (
                <div className="">
                  <div className={`${style.about__content} ${style.w75}`}>
                    <h3 className={style.about__padding_text}>Soy</h3>
                    <h3 className={style.about__padding_text}>José Emanuel Rosas</h3>
                    <p className={style.about__padding_text}>Desde chico estuve interesado en el mundo IT, por lo que estudié y trabajé como técnico en reparación de PC. Decidí enfocar mi camino como programador y cursé el BootCamp de Henry.
                    Actualmente me dedico a desarrollar proyectos que me permiten avanzar y potenciar mi formación como programador.
                    </p>

                    <div className={style.social__links}>
                      <p className={style.about__padding_text}>Puede conectar conmigo</p>
                      <span className={style.span}><a href="https://wa.me/543876298577" target="_blank" rel="noopener noreferrer"><i className="ri-whatsapp-fill"></i></a></span>
                      <span className={style.span}><a href="https://www.linkedin.com/in/jos%C3%A9-emanuel-rosas-31b1a8190/" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill"></i></a></span>
                      <span className={style.span}><a href="https://github.com/Ema0502" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill"></i></a></span>
                      <span className={style.span}><a href="https://www.instagram.com/ema_rosas05/" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill"></i></a></span>
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