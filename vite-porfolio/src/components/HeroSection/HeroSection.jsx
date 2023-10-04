import style from "./HeroSection.module.css";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../../img/Captura_de_pantalla_2023-08-20_081923-removebg-preview.png";
import { useRef, useEffect } from "react";
import { init } from "ityped";

const HeroSection = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [' Jose Rosas',' Full Stack Developer']
    })
  }, [])

  return (
    <section className={style.hero__section} id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={style.hero__content}>
              <h1 className={style.mp__4}>Bienvenido!</h1>
              <h2 className={`${style.hero__title} ${style.mp__4}`}>Soy
                <span ref={textRef}></span>
              </h2>
              <p className={style.mp__4}>Soy un Desarrollador orientado al Back-end. Cuento con +800 horas de codeo gracias al Bootcamp de soyHenry.
                Actualmente me dedico a desarrollar proyectos que me permiten avanzar y potenciar mi formación como programador. Me fascina poder encontrar la solución a los problemas de la vida codeando.
                Si puedo ayudarlo/a no dude a escribirme!</p>

              <div className={`${style.hero__btns} ${style.mp__4}`}>
                <button className={style.btncito}><a href="https://www.linkedin.com/in/jos%C3%A9-emanuel-rosas-31b1a8190/" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-box-fill">   </i>Contacto</a></button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div>
              <img src={heroImage} alt="" className={style.hero__img} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;