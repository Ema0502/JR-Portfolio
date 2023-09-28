import style from "./Footer.module.css";
import { Container } from "reactstrap";
import logo_JR from "../../img/Captura de pantalla 2023-08-12 230401.png";

const Footer = () => {
  return (
    <footer className="pb-4">
      <Container className={style.footer}>
        <img className={style.logo} src={logo_JR} alt="Logo..." />
        <div className={style.container2}>
            <span>
              Potenciando la excelencia tecnológica y escalando la Vanguardia Digital, explora una selección exclusiva de habilidades y tecnologías en el desarrollo full stack que redefinen la elegancia y el rendimiento en el mundo digital. 
            </span>
        </div>
        
        <div className={style.containerList}>
          <p>Copyright ® 2023 | JR </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;