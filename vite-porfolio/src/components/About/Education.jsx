import style from "./Education.module.css"

const Education = () => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Especialidad</th>
          <th>Instituto</th>
          <th>Año</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Desarrollador Full Stack</td>
          <td>Back-End/Front-End</td>
          <td>BootCamp Henry</td>
          <td>1 Año</td>
        </tr>

        <tr>
          <td>Japones N5</td>
          <td>Escritura/Gramática/Comp. Auditiva</td>
          <td>Salta Nihongo no Gakuen</td>
          <td>2 años</td>
        </tr>

        <tr>
          <td>Secundario</td>
          <td>Economía y Gestión de las Organizaciones</td>
          <td>Instituto Nº 7062</td>
          <td>4 años</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Education;