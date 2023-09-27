import style from "./Testimonial.module.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

const Testimonial = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h2>Testimonio de Clientes</h2>
          </Col>

          <Col lg="6" className="m-auto">
            <Slider {...settings}>
              <div>
                <div className={style.single__testimonial}>
                  <p>Resolvió rápidamente los problemas de mi PC, fue profesional, amable y resolvió todas mis inquietudes de manera clara. Mi computadora funciona como nueva, ¡gracias al increíble equipo técnico por su servicio de calidad y atención al cliente excepcional!</p>
                  <h6>Natalia Ocampo</h6>
                  <p className={style.title}>Docente</p>
                </div>
              </div>

              <div>
                <div className={style.single__testimonial}>
                  <p>Capturó perfectamente mi visión creativa y la transformó en un diseño visualmente impactante. Cada detalle fue cuidadosamente considerado, y el resultado final superó mis expectativas. Profesionalismo, creatividad y atención al cliente de primer nivel. ¡Gracias por hacer que mi visión cobrara vida de una manera tan asombrosa!</p>
                  <h6>Jorge Moreno</h6>
                  <p className={style.title}>Contador</p>
                </div>
              </div>

              <div>
                <div className={style.single__testimonial}>
                  <p>Desde el diseño de la interfaz hasta la implementación del backend, cada fase fue manejada con profesionalismo y destreza técnica. La aplicación resultante no solo cumple con todas mis expectativas, sino que va más allá. Un equipo apasionado y comprometido que realmente entiende el desarrollo integral.</p>
                  <h6>Leonel Rojas</h6>
                  <p className={style.title}>Docente</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial;