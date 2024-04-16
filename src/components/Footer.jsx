import React from 'react';

// styles imports
import '../css/Footer.css';

// image imports
import Copyright from '../img/Footer__Copyright.png';

function Footer() {
  return (
    <div className='Footer'>
      <section className="prefooter">
        <p className='SEOtext'>
          Bienvenido a mi sitio web, soy Eme, directora de arte y apasionada del diseño en todas sus facetas. Debido a mi multidisciplinar background, he podido trabajar en la creación de diseños para todo tipo de soportes, principalmente print y digital. Asimismo, gracias a mi experiencia en medios audiovisuales he obtenido bastante fluidez en fotografía, producción y edición de vídeo. Me motiva la conceptualización de ideas y el desarrollo de procesos creativos, desde la investigación de referentes hasta su resolución.            
        </p>
      </section>

      <footer className="footer">
        <img 
          src= {Copyright} 
          alt="Logo del copyright"
        />
        <span>
          Todo el contenido de este sitio web. El diseño de los proyectos y cualquier material publicado, ya sean fotografías o textos, están sujetos a la ley de Copyright.
        </span>
      </footer>
    </div>
  )
}

export default Footer;