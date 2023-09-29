import style from "./Skills.module.css"

const Skills = () => {

  const frontendSkills = [
    {
      title: "JavaScript",
      percentage: "100%",
      grade: "Avanzado"
    },
    {
      title: "React js",
      percentage: "100%",
      grade: "Avanzado"
    },
    {
      title: "Redux",
      percentage: "100%",
      grade: "Avanzado"
    },
    {
      title: "HTML",
      percentage: "100%",
      grade: "Avanzado"
    },
    {
      title: "CSS",
      percentage: "100%",
      grade: "Intermedio"
    }
  ]

  const backendSkills = [
    {
      title: "Node js",
      percentage: "100%",
      grade: "Avanzado"
    },
    {
      title: "Express",
      percentage: "100%",
      grade: "Avanzado"
    },
    {
      title: "MySQL",
      percentage: "100%",
      grade: "Avanzado"
    },
    {
      title: "TypeScript",
      percentage: "100%",
      grade: "Inicial"
    },
    {
      title: "Nest js",
      percentage: "100%",
      grade: "Inicial"
    }
  ]

  return (
    <div className={style.skills__wrapper}>
      <div className={style.frontend__skills}>
        {
          frontendSkills.map((item, index) => (
            <div className={style.skill__data} key={index}>
              <div className={style.skill__title}>
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