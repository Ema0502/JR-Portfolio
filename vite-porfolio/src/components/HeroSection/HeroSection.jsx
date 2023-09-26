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
              <p className={style.mp__4}>Soy un Desarrollador orientado al Back-end. Desde chico estuve interesado en el mundo IT, hoy tengo mas de 700horas de codeo gracias al Bootcamp de soyHenry, mi motivación mas grande fue mi acercamiento al código.
                Actualmente me dedico a desarrollar proyectos que me permiten avanzar y potenciar mi formación como programador. Me fascina poder encontrar la solución a los problemas de la vida codeando.
                Si puedo ayudarlo/a no dude a escribirme!</p>

              <div className={`${style.hero__btns} ${style.mp__4}`}>
                <button className={`${style.btn} ${style.hire__btn}`}><a href="#">Contratar</a></button>
                <button className={style.btncito}>Contacto</button>
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