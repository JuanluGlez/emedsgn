import React from 'react';
import { Link } from 'react-router-dom';

//styles imports
import "../css/ProjectCard.css";
import "../css/tokens.css";

function ProjectCard({ projects }) {

  // con esta constante hacemos que coja la ruta que no varía y luego se concadena el resto del string almacenado en el projects.json
  const imageUrl = "./img" + projects.posterImage;
  
  // con la varialbe colorAssigned damos por defecto a la bola un valor null.
  var colorAssigned = null;

  // luego con condicionales, en base al valor del string del tipo le asignamos un color, para luego dar al style dicho valor.
  if (projects.type === "Branding") {
    var colorAssigned = 'var(--branding__50)';

  } else if (projects.type === "Packaging") {
    var colorAssigned = 'var(--packaging__50)';

  } else if (projects.type === "Campañas") {
    var colorAssigned = 'var(--campaigns__100)';

  } else if (projects.type === "Editorial") {
    var colorAssigned = 'var(--editorial__50)';

  } else if (projects.type === "Ilustración") {
    var colorAssigned = 'var(--illustration__50)';

  } else {
   var colorAssigned = 'var(--principal__10)';
  }

  return (
    <div className="ProjectCard">
      <Link to={`/proyecto/${projects.ID}`}>
        <img 
          src={imageUrl}
          alt={projects.altImagen}
        />

        <ul>
          <li>
            <span>Proyecto</span>
            <span>{projects.type}
              <span 
                className="colorTag" 
                style= {{backgroundColor: colorAssigned}}
                >
              </span>
            </span>
          </li>
          <li>
            <span>Nombre</span>
            <span>{projects.name}</span>
          </li>
        </ul>
      </Link>
    </div>
      
  );

}

export default ProjectCard;