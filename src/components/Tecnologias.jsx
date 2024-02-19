import PropTypes from "prop-types";
const Tecnologias = ({ data }) => {
  return (
    <div className="col-md-6">
      <h3>
        Tecnologías seleccionadas:{" "}
        <span className="circulo"> {data.length}</span>
      </h3>
      {data.length > 0 && (
        <ul className="flex-container">
          {data.map((tech, index) => (
            <li className="flex-item" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tecnologias.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Tecnologias;
