import { Container } from "reactstrap";
import style from "./Header.module.css";

const Header = () => {
  const navLinks = [
    {
      display: "Home",
      url: "#home",
    },
    {
      display: "About",
      url: "#about",
    },
    {
      display: "Services",
      url: "#services",
    },
    {
      display: "Porfolio",
      url: "#porfolio",
    },
    {
      display: "Contact",
      url: "#contact",
    },
  ];

  return (
    <div className={style.header}>
      <Container>
        <div className={style.navigation}>
          <div className={style.logo}>
            <h5>José</h5>
          </div>

          <div className={style.nav__menu}>
            <ul className={style.nav__list}>
              {navLinks.map((item, index) => {
                return (
                  <li key={index} className={style.nav__item}>
                    <a href={item.url}>{item.display}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.nav__right}>
            <button className={style.btn}>Charlemos</button>
            <span className={style.mobile__menu}><i className="ri-menu-5-line"></i></span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
