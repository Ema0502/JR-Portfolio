import style from "./Portfolio.module.css";
import { Container, Row, Col } from "reactstrap";
import imgDogo from "../../img/Captura de pantalla (54).png"
import imgPokemon from "../../img/Captura de pantalla (56).png"
import imgVehiBuy from "../../img/Captura de pantalla 2023-09-27 153019.png"

const Portfolio = () => {

  const portfolioData = [
    {
      image: imgVehiBuy,
      title: "VehiBuy",
      url: "#https://github.com/GeroPazPapa1/Proyecto-Final-De-La-Graduacion"
    },
    {
      image: imgDogo,
      title: "Dogs App",
      url: "#https://github.com/Ema0502/PI-Dogs-main"
    },
    {
      image: imgPokemon,
      title: "Pokemons App",
      url: "#https://github.com/Ema0502/PI-Pokemon-main"
    }
  ]

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className={style.portfolio__top}>
            <h2 className="mb-4">Portfolio</h2>
          </Col>

          {
            portfolioData.map((item, index) =>(
              <Col lg="4" md="6" sm="6" key={index}>
                <div className={style.portfolio__card}>
                  <div className={style.portfolio__img}><img src={item.image} alt="" /></div>

                  <div className={style.portfolio__content}>
                      <h6>{item.title}</h6>
                      <a href={item.url}>Ver en vivo</a>
                    <h5>Landing page</h5>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio;