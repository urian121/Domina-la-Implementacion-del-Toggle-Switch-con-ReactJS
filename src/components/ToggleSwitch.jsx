import { useState } from "react";
import "../assets/css/toggle.css";
import Titulo from "./Titulo";
import Tecnologias from "./Tecnologias";

function ToggleSwitch() {
  // Definimos un estado para manejar las tecnologías seleccionadas
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // Array de tecnologías
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Bootstrap",
    "Vue.js",
    "PHP",
    "Python",
    "Nodejs",
  ];

  // Manejador de eventos para actualizar las tecnologías seleccionadas
  const handleTechnologyChange = (event) => {
    const technology = event.target.value;
    if (selectedTechnologies.includes(technology)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((t) => t !== technology)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  return (
    <>
      <Titulo />
      <div className="row justify-content-md-center">
        <div className="col-md-6" style={{ borderRight: "1px solid #ccc" }}>
          <h2 className="text-center mb-5">
            ¿Que tecnologías deseas aprender?
          </h2>

          {technologies.map((technology, index) => (
            <label key={index} className="toggle">
              <input
                className="toggle-checkbox"
                type="checkbox"
                value={technology}
                checked={selectedTechnologies.includes(technology)}
                onChange={handleTechnologyChange}
              />
              <div className="toggle-switch"></div>
              <span className="toggle-label">{technology}</span>
            </label>
          ))}
        </div>
        <Tecnologias data={selectedTechnologies} />
      </div>
    </>
  );
}

export default ToggleSwitch;
