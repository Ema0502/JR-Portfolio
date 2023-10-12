import style from "./Skills.module.css"
import cSharpIcon from "../../svg/csharp-icon.svg";
import css3Icon from "../../svg/css-3-icon.svg";
import dotnetIcon from "../../svg/dotnet-icon.svg";
import expressIcon from "../../svg/express-icon.svg";
import html5Icon from "../../svg/html-5-icon.svg";
import javaScriptIcon from "../../svg/javascript-icon.svg";
import noseJsIcon from "../../svg/node-js-icon.svg";
import postgreSqlIcon from "../../svg/postgresql-icon.svg";
import reactJsIcon from "../../svg/react-icon.svg";
import reduxIcon from "../../svg/redux-icon.svg";
import sequelizeIcon from "../../svg/sequelize-icon.svg";
import typeScriptIcon from "../../svg/typescript-icon.svg";
import gitIcon from "../../svg/git-icon.svg";
import gitHubIcon from "../../svg/github-icon.svg";

const Skills = () => {

  const frontendSkills = [
    {
      title: "JavaScript",
      percentage: "100%",
      grade: "Avanzado",
      icon: javaScriptIcon
    },
    {
      title: "React js",
      percentage: "100%",
      grade: "Avanzado",
      icon: reactJsIcon
    },
    {
      title: "Redux",
      percentage: "100%",
      grade: "Avanzado",
      icon: reduxIcon
    },
    {
      title: "HTML",
      percentage: "100%",
      grade: "Avanzado",
      icon: html5Icon
    },
    {
      title: "CSS",
      percentage: "100%",
      grade: "Intermedio",
      icon: css3Icon
    },
    {
      title: "Git",
      percentage: "100%",
      grade: "Intermedio",
      icon: gitIcon
    },
    {
      title: "GitHub",
      percentage: "100%",
      grade: "Intermedio",
      icon: gitHubIcon
    }
  ]

  const backendSkills = [
    {
      title: "Node js",
      percentage: "100%",
      grade: "Avanzado",
      icon: noseJsIcon
    },
    {
      title: "Express",
      percentage: "100%",
      grade: "Avanzado",
      icon: expressIcon
    },
    {
      title: "TypeScript",
      percentage: "100%",
      grade: "Inicial",
      icon: typeScriptIcon
    },
    {
      title: "PostgreSQL",
      percentage: "100%",
      grade: "Avanzado",
      icon: postgreSqlIcon
    },
    {
      title: "Sequelize",
      percentage: "100%",
      grade: "Avanzado",
      icon: sequelizeIcon
    },
    {
      title: "C#",
      percentage: "100%",
      grade: "Inicial",
      icon: cSharpIcon
    },
    {
      title: ".NET",
      percentage: "100%",
      grade: "Inicial",
      icon: dotnetIcon
    }
  ]

  return (
    <div className={style.skills__wrapper}>
      <div className={style.frontend__skills}>
        {
          frontendSkills.map((item, index) => (
            <div className={style.skill__data} key={index}>
              <div className={style.skill__title}>
                <img src={item.icon} alt="Programming Icon" />
                <h6>{item.title}</h6>
                <span>{item.grade}</span>
              </div>

              <div className={style.skill__bar}>
                <span className={style.skill__bar_percentage} style={{width: `${item.percentage}`}}></span>
              </div>
            </div>
          ))
        }
      </div>

      <div className={style.backend__skills}>
      {
          backendSkills.map((item, index) => (
            <div className={style.skill__data} key={index}>
              <div className={style.skill__title}>
                <img src={item.icon} alt="Programming Icon" />
                <h6>{item.title}</h6>
                <span>{item.grade}</span>
              </div>

              <div className={style.skill__bar}>
                <span className={style.skill__bar_percentage} style={{width: `${item.percentage}`}}></span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills;