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
      title: "Servicio Técnico JR",
      desc: "Solucionar problemas al mal funcionamiento de Sistemas y equipos de computación. Reparación de hardware, instalación de Sistema Operativo, mantenimiento, reparación, actualización y optimización con programas y drivers."
    },
    {
      year: "2022 - 2023",
      title: "E-commerce de Construcción",
      desc: "Tareas realizadas: Atención al publico, asistencia en tareas administrativas y consultas tecnicas."
    }
  ]

  const developmentExperienceData2 = [
    {
      year: "2023",
      title: "Proyecto E-commerce de Autos",
      desc: "Tareas realizadas: implementación LocalStorage con JWT, manejo de encriptación de la información utilizando Bcrypt, implementación y manejo del CRUD al servidor, participación  de la creación de una ApiRest para los datos utilizados, entre otras tareas individual y grupalmente."
    },
    {
      year: "2023 - 2024",
      title: "Pasante Full Stack en E-commerce",
      desc: "Tareas realizadas: Desempeñé un papel integral como Desarrollador en un Ecommerce especializado en chapas. Mis responsabilidades incluyeron el desarrollo y mantenimiento de aplicaciones web, la implementación de soluciones técnicas para mejorar la experiencia del usuario, así como la colaboración en el diseño. Potencié el manejo de frameworks como React y Node.js. Además, participé en la integración de servicios, la resolución de problemas para garantizar un rendimiento óptimo del sitio."
    }
  ]

  return (
    <section id="experience">
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