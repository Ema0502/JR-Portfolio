import style from "./HeroSection.module.css";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../../img/Captura de pantalla 2023-09-26 174445.png";
import { useRef, useEffect } from "react";
import { init } from "ityped";

const HeroSection = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ['Jose Rosas','Full Stack Developer']
    })
  }, [])

  return (
    <section className={style.hero__section} id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={style.hero__content}>
              <p className={style.mp__4}>Bienvenido!</p>
              <h2 className={`${style.hero__title} ${style.mp__4}`}>Yo soy 
                <span ref={textRef}></span>
              </h2>
              <p className={style.mp__4}>Soy un Desarrollador orientado al Back-end. Tengo mas de 700horas de codeo gracias al Bootcamp de soyHenry.
                Actualmente me dedico a desarrollar proyectos que me permiten avanzar y potenciar mi formación como programador. Me fascina poder encontrar la solución a los problemas de la vida codeando.
                Si puedo ayudarlo/a no dude a escribirme!</p>

              <div className={`${style.hero__btns} ${style.mp__4}`}>
                <button className={style.btncito}><a aria-label="Chat en WhatsApp" href="https://wa.me/543876298577">Contacto</a></button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={style.hero__img}>
              <img src={heroImage} alt="" className={style.hero__img} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;