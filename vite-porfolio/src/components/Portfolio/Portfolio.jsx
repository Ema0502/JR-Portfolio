import style from "./Portfolio.module.css";
import { Container, Row, Col } from "reactstrap";
import imgDogo from "../../img/Captura de pantalla (54).png"
import imgPokemon from "../../img/Captura de pantalla (56).png"
import imgToDo from "../../img/Captura de pantalla 2024-01-31 155313.png"
import imgVehiBuy from "../../img/Captura de pantalla 2023-09-27 153019.png"

const Portfolio = () => {

  const portfolioData = [
    {
      image: imgVehiBuy,
      title: "E-commerce VehiBuy",
      url: "https://vehibuy-rho.vercel.app/"
    },
    {
      image: imgToDo,
      title: "ToDo Ts",
      url: "https://todo-app-ts-gamma.vercel.app/"
    },
    {
      image: imgDogo,
      title: "Dogs App",
      url: "https://pi-dogs-main-two.vercel.app/"
    },
    {
      image: imgPokemon,
      title: "Pokemons App",
      url: "https://deploy-pokemon-pi-woad.vercel.app/"
    }
  ]

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg={12} className={style.portfolio__top}>
            <h2 className="mb-4">Portfolio</h2>
          </Col>

          {
            portfolioData.map((item, index) =>(
              <Col lg="4" md="6" sm="6" key={index}>
                <div className={style.portfolio__card}>
                  <div className={style.portfolio__img}><img src={item.image} alt="" /></div>

                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className={style.portfolio__content}>
                      <h5>{item.title}</h5>
                      <h6>Click aqui para ver en vivo</h6>
                    <h5>Landing page</h5>
                  </div>
                  </a>
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