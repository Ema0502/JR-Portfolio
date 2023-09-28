import style from "./Experience.module.css";
import { Container, Row, Col } from "reactstrap";

const Experience = () => {

  const developmentExperienceData = [
    {
      year: "2016 - 2019",
      title: "Graphic Ronnin",
      desc: "Tareas realizadas: Atención al publico, mantenimiento de hardware y software, asistencia en tareas de diseño gráfico con Photoshop, Corel Draw, Gigapixel Ai, entre otros."
    },
    {
      year: "2019 - 2022",
      title: "Técnico en Reparación de PC",
      desc: "Solucionar problemas al mal funcionamiento de Sistemas. Instalación de Sistema Operativo. Mantenimiento. Reparación. Actualización y optimización con programas y Drivers."
    },
  ]

  const developmentExperienceData2 = [
    {
      year: "2022 - 2023",
      title: "Zingueria Perón",
      desc: "Tareas realizadas: Atención al publico, asistencia en tareas administrativas y consultas tecnicas."
    },
    {
      year: "2023",
      title: "E-commerce de autos",
      desc: "Tareas realizadas: implementación LocalStorage con JWT, manejo de encriptacion utilizando Bcrypt, implementación del CRUD al servidor, entre otras tareas individual y grupalmente."
    },
  ]

  return (
    <section>
      <Container className={style.container}>
        <Row>
          <Col lg-12="true" className="mb-5">
            <h2>Experiencia</h2>
          </Col>

          <div className={style.divcontainer}>
            <Col lg="6" md="6">
              <div className={`${style.single__experience_container} ${style.custom_col}`}>
                {
                  developmentExperienceData.map((item, index) => (
                    <div className={style.single__experience} key={index}>
                      <span className={style.experience_icon}><i className="ri-briefcase-line"></i></span>
                      <h6>{item.year}</h6>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  ))
                }
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className={`${style.single__experience_container} ${style.custom_col}`}>
                {
                  developmentExperienceData2.map((item, index) => (
                    <div className={style.single__experience} key={index}>
                      <span className={style.experience_icon}><i className="ri-briefcase-line"></i></span>
                      <h6>{item.year}</h6>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  ))
                }
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;