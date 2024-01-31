import style from "./Services.module.css";
import { Container, Row, Col } from "reactstrap";

const Services = () => {

  const servicesData = [
    {
      icon: "ri-code-fill",
      title: "Diseñador Web",
      desc: "Transformar ideas creativas en experiencias digitales únicas.  Diseños intuitivos y atractivos que no solo reflejan la identidad de la empresa, sino que también garantizan una navegación fluida y agradable para los usuarios. Implementación de diseños responsivos y optimizados."
    },
    {
      icon: "ri-braces-fill",
      title: "Desarrollador",
      desc: "Crear aplicaciones web crea experiencias interactivas y eficientes. Con enfoque en la eficiencia, seguridad y seguimiento de las mejores prácticas de desarrollo para garantizar aplicaciones web modernas y sólidas."
    },
    {
      icon: "ri-image-edit-line",
      title: "Diseñador Gráfico",
      desc: "Manejo de herramientas de diseño como Photoshop, Illustrator y CorelDRAW. Transformar conceptos abstractos en diseños visuales impactantes, desde gráficos para impresión hasta elementos para la web."
    },
    {
      icon: "ri-server-fill",
      title: "Servidores",
      desc: "Gestión, implementación de lógica e interacción con bases de datos para garantizar un funcionamiento eficiente y seguro. Implementar operaciones CRUD para gestionar eficientemente la información, además de la encriptación para transformar datos legibles en un formato codificado."
    },
    {
      icon: "ri-database-2-fill",
      title: "Base de Datos",
      desc: "Gestión eficiente y segura de la información.  Consultas SQL para extraer, actualizar o manipular datos en bases de datos. Establecer relaciones entre tablas y garantizar la integridad de los datos mediante restricciones."
    },
    {
      icon: "ri-computer-line",
      title: "Servicio Técnico",
      desc: "Solucionar problemas al mal funcionamiento de Sistemas y equipos de computación. Reparación de hardware, instalación de Sistema Operativo, mantenimiento, reparación, actualización y optimización con programas y drivers."
    }
  ]

  return (
    <section id="services">
      <Container>
        <Row className={style.flexColumn}>
          <Col lg="12" className={`mb-4 ${style.service__top}`}>
            <h2>Servicios</h2>
          </Col>

          {servicesData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className={`mb-4 ${style.service__container}`}>
              <div className={style.single__service}>
                <span className={style.service__icon}><i className={item.icon}></i></span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;