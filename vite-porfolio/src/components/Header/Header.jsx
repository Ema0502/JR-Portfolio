import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import style from "./Header.module.css";
import logo_JR from "../../img/Captura de pantalla 2023-08-12 230401.png";

const Header = () => {

  const [isHeaderShrink, setIsHeaderShrink] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const navLinks = [
    {
      display: "Inicio",
      url: "#home",
    },
    {
      display: "Sobre mi",
      url: "#about",
    },
    {
      display: "Servicios",
      url: "#services",
    },
    {
      display: "Experiencia",
      url: "#experience",
    },
    {
      display: "Portfolio",
      url: "#portfolio",
    },
    {
      display: "Contacto",
      url: "#contact",
    },
  ];

  const handleClickLogo = () => {
    const bodyElement = document.querySelector("body");
    bodyElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMenuToggle = (event) => {
    event.stopPropagation();
    setIsMenuActive(!isMenuActive);
  };

  const handleDocumentClick = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderShrink(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isMenuActive]);

  const handleClick = (event) => {
    event.preventDefault();
    const targetAttr = event.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 70,
    });

    setIsMenuActive(false);
  };

  return (
    <div className={`${style.header} ${isHeaderShrink ? style.header__shrink : ""}`}>
      <Container>
        <div className={style.navigation}>
          <div className={style.logo}>
            <img
              className={style.logoJR}
              src={logo_JR}
              alt="Logo..."
              onClick={handleClickLogo}
            />
          </div>

          <div
            className={`${style.nav__menu} ${isMenuActive ? style.menu__active : ""}`}
          >
            <ul className={style.nav__list}>
              {navLinks.map((item, index) => (
                <li key={index} className={style.nav__item}>
                  <a href={item.url} onClick={handleClick}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={style.nav__right}>
            <button className={style.btn}>
              <a
                aria-label="Chat en WhatsApp"
                href="https://wa.me/543876298577"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-whatsapp-line"></i> Consultas
              </a>
            </button>
            <span className={style.mobile__menu} onClick={handleMenuToggle}>
              <i className="ri-menu-5-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;