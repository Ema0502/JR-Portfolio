import { Container } from "reactstrap";
import style from "./Header.module.css";
import { useEffect, useState  } from "react";

const Header = () => {

  const [isHeaderShrink, setIsHeaderShrink] = useState(false);

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
      display: "Servicios",
      url: "#services",
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

  const handleClick = (event) => {
    event.preventDefault();
    const targetAttr = event.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offSetTop;

    window.scrollTo({
      left: 0,
      top: location - 70,
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderShrink(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${style.header} ${isHeaderShrink ? style.header__shrink : ''}`}>
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
                    <a href={item.url} onClick={handleClick}>{item.display}</a>
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
