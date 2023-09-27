import style from "./Skills.module.css"

const Skills = () => {

  const frontendSkills = [
    {
      title: "JavaScript",
      percentage: "85%"
    },
    {
      title: "React js",
      percentage: "86%"
    },
    {
      title: "Redux",
      percentage: "85%"
    },
    {
      title: "HTML",
      percentage: "70%"
    },
    {
      title: "CSS",
      percentage: "65%"
    }
  ]

  const backendSkills = [
    {
      title: "Node js",
      percentage: "86%"
    },
    {
      title: "Express",
      percentage: "88%"
    },
    {
      title: "MySQL",
      percentage: "83%"
    },
    {
      title: "TypeScript",
      percentage: "50%"
    },
    {
      title: "Nest js",
      percentage: "50%"
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
                <span>{item.percentage}</span>
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
                <span>{item.percentage}</span>
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