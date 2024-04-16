// imports
  import React from 'react'

  // styles imports
    import '../css/Page__Styles.css';
    import '../css/Page__About.css';

  // image imports
    import portrait from '../img/About__Retrato.png';

  // components imports
    import Footer from '../components/Footer.jsx'

  // hooks imports
    import { useState } from 'react';


const About = ({ navDataController }) => {

  document.title = 'Eme / About';

  // aquí hemos aceptado el valor procedente de Layout.jsx, el cual nos la está pasando App.jsx y creamos un toggle class.
    let growNav= !navDataController ? '' : 'resize__content';

  // esto es para abrir o cerrar los acordeones
    const [grow1, setGrow1] = useState(null);
    const [grow2, setGrow2] = useState(null);

  return (
    <div className= {`about__section ${growNav}`}>
      <section className= 'main__section selfInfo__article'>
        <article>

          <img src= {portrait} />

          <div>
            <p>
              Bienvenido a mi sitio web, soy Eme, directora de arte y 
              apasionada del diseño en todas sus facetas.
              Debido a mi multidisciplinar background he podido trabajar en la creación de diseños 
              para todo tipo de soportes, principalmente print y digital.
              Asimismo, gracias a mi experiencia en medios audiovisuales he obtenido bastante fluidez en fotografía, 
              producción y edición de vídeo.
              Me motiva la conceptualización de ideas y el desarrollo de procesos creativos, 
              desde la investigación de referentes hasta su resolución.
            </p>
            <ul>
              Experiencia y formación <br /><br />

              <li>Dirección de Arte en Pool CP</li>
              <li>Diseño gráfico en The Wokis</li>
              <li>Diseño gráfico en Neoattack</li>
              <li>Diseño gráfico en Vogue España</li>

              <br />

              <li>Máster en diseño gráfico ESNE</li>
              <li>Máster en comunicación de moda y belleza UC3M</li>
              <li>Grado en diseño BAU</li>
            </ul>
          </div>

        </article>
      </section>

      <section className= 'main__section accordion__section'>

        <article className= {grow1 ? "accordion1 accordion__open" : "accordion1" }>
          <header onClick={() => setGrow1(!grow1)}>
              Values
          </header>
          <div className="content">
            <p>
                Creo firmemente en el poder que tiene el diseño 
                para transformar proyectos, haciendo posible catapultar
                ideas hasta límites que no habríamos imaginado.  
                Si tienes una buena idea solo es cuestión de trabajo en equipo 
                y experiencia para conseguir alcanzar tus objetivos.
            </p>
          </div>

        </article>

        <article className= {grow2 ? "accordion2 accordion__open" : "accordion2" }>
          <header onClick={() => setGrow2(!grow2)}>
              Skills
          </header>
          <div className="content">
            <p>
              Producción y edición de vídeo. Fotografía. Diseño editorial, 
              branding, packaging y web. Proyectos de ilustración y fotografía de bodegones.
            </p>
          </div>

        </article>

      </section>

      <div className= {growNav}>
        <Footer />
      </div>
        
    </div>
  )
}

export default About;
