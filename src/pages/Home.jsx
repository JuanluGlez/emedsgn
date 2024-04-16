import React from 'react';
import { useEffect, useState } from 'react';

// styles imports
import '../css/Page__Styles.css';
import '../css/page__Home.css';

// components imports
import ProjectGrid from '../components/ProjectGrid.jsx';
import Form from '../components/Form.jsx';
import Footer from '../components/Footer';

export const Home= ({ navDataController })=> {

// aquí hemos aceptado el valor procedente de Layout.jsx, el cual nos la está pasando App.jsx y creamos un toggle class.
let growNav= !navDataController ? null : 'resize__content';

// aquí redimensionamos los pasos de la sección de pasos
let resizeStepsNumber= !navDataController ? null : {fontSize: '7vw', marginRight: '15px'};
let resizeStepsTitle= !navDataController ? null : {fontSize: '1.1vw'};
let resizeStepsText= !navDataController ? null : {fontSize: '1vw'};

document.title = 'Eme / Inicio';

  return (

    <div>

      <section className= {`main__section presentation__section ${growNav}`} >
        <article>

          <h1 id="pageTitle">
            Cuenta tu historia a través
            del <strong>branding</strong>, del <strong>packaging</strong>,
            del diseño <strong>editorial</strong> y <strong>web</strong>.
          </h1>

        </article>
      </section>

      <section className= {`main__section steps__section ${growNav}`} >
        <article>

          <h3>
              Tu proyecto en 3 pasos 
          </h3>

          <p className='p__big'>
            <strong>Hola, soy Eme, diseñadora gráfica freelance</strong> y amante del arte.
            Combino el <strong>desarrollo conceptual</strong> y una <strong>ejecución creativa</strong> para <strong>resolver
            desafíos</strong> comerciales a través del <strong>branding</strong>, del <strong>packaging</strong>, del diseño
            <strong>editorial</strong> y también del <strong>web</strong>.
              
          </p>

          <hr />
        </article>

        <article className='steps__article'>
          <div>

            <div className= "step1" style={resizeStepsNumber}>
              <span>
                01
              </span>
            </div>
                
            <div>
              <span className= "step__title1" style= {resizeStepsTitle} >Estrategia</span>
              <span className= "step__decription1" style= {resizeStepsText}>
                Comenzaremos la investigación
                y agendaremos en el calendario
                las fases del proyecto.
              </span>
            </div>

          </div>

          <div>
            <div className= "step2" style={resizeStepsNumber}>
              <span>
                02
              </span>
            </div>
                
            <div>
              <span className="step__title2" style= {resizeStepsTitle} >Diseño</span>
              <span className="step__decription2" style= {resizeStepsText}>
                Una vez definida la estrategia
                nos pondremos manos a la obra
                con los diseños.
              </span>
            </div>
                    
          </div>

          <div>
            <div className= "step3" style={resizeStepsNumber}>
              <span>
                03
              </span>
            </div>
                
            <div>
              <span className="step__title3" style= {resizeStepsTitle} >Entrega</span>
              <span className="step__decription3" style= {resizeStepsText}>
                Cuando tengamos los diseños
                definitivos se procederá a la
                entrega de los archivos.
              </span>
            </div>
                    
          </div>

        </article>
      </section>

      <section className= {`main__section projects__section ${growNav}`}>
        <h3>
          Proyectos <br />
          Destacados
        </h3>

          <ProjectGrid />

      </section>

      <section className= {`main__section form__section ${growNav}`} id='form__section'>
      <article>
        <h3>
          Siempre es un placer <br />
          escuchar ideas nuevas
        </h3>
        <p>
          Trabajo de manera <strong>independiente</strong> y colaborando <strong>con empresas</strong>, siempre de forma 
          <strong> flexible</strong> y adaptándome a las necesidades de cada cliente. <br />
          Si tienes algún proyecto en marcha <strong>mándame un email</strong>, estaré encantada de hablar 
          y conocer más acerca de tus ideas.
        </p>
        </article>

        <Form />

      </section>

      <section className= {`footer__section ${growNav}`}>
        <Footer />
      </section>

    </div>
  )
}

export default Home;
