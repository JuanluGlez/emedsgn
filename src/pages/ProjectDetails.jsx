import React, { useState } from 'react';

// import hooks
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import styles
import '../css/ProjectDetails.css';

// import components
import Footer from '../components/Footer.jsx';
import Balls from '../components/BallsAnimation.jsx';
import TypingAnimation from '../components/TypingAnimation.jsx';

// image imports
import Copyright from '../img/Footer__Copyright.png';

export const ProjectDetails = ({ navDataController, project }) => {

  document.title = `Eme / ${project.title}`;

  // aquí hemos aceptado el valor procedente de Layout.jsx, el cual nos la está pasando App.jsx y creamos un toggle class para la apertura y cierre del nav.
    
    let growNav= !navDataController ? '' : 'resize__content';
    let resizeText= !navDataController ? {fontSize: '4,65vw'} : {fontSize: '3.5vw'};
    
  //

  // comunicar este componente con hijo BallsAnimation.jsx

    // conectamos los botones de color para inicializar las bolas.

      const [initiateBalls, setInitiateBalls] = useState();

      const project2balls = () => {
        setInitiateBalls(!initiateBalls);

      }
    
    // enviamos a BallsAnimation.jsx el valor de la variable ballsColor

      let ballsColor_1 = project.ballsColor_1;
      let ballsColor_2 = project.ballsColor_2;
      let ballsColor_3 = project.ballsColor_3;
      let ballsColor_4 = project.ballsColor_4;

      const [paintBalls, setPaintBalls] = useState();

      const sendColor = (color) => {
        setPaintBalls(color);

      }

    //

    // observamos si la ruta cambia para reestablecer el valor ballsColor_1 al cambiar de página

      const navigate = useNavigate();
      const location = useLocation();
    
      useEffect(() => {
        const handleRouteChange = () => {
          
          if (location.pathname !== '') {     
            sendColor(ballsColor_1);

          }
        };
    
        handleRouteChange();  // Comprobar la ruta al montar el componente
    
        // Limpiar efecto al desmontar el componente
        return () => {
          // No es necesario limpiar nada en este caso
        };
      }, [location]);

    //

  //

  // funciones onscroll

    useEffect(() => {

      // Mueve el scroll al principio de la página al montar ProjectDetails.jsx
        window.scrollTo(0, 0);

      //aquí detectamos el scroll para lanzar funciones
        let animation = document.getElementById('typedtext'); //guardamos los elementos con el id "typedtext"

        // aquí lo manejamos
          const handleScroll = () => {
            
            let scrollTop = document.documentElement.scrollTop; // guardamos la cantidad de scroll que hemos bajado
            let positionAnimation = animation.offsetTop; // detectamos la altura

            // con los if creamos las acciones que queremos que se ejecuten según el scroll
            if (positionAnimation - 600 < scrollTop) { // si la altura detectada es menor que la cantidad de scroll que hemos bajado
              
              // eslint-disable-next-line no-undef
              typewriter();
              removeScroll();
          
            }

            function removeScroll() { 
              // quitamos el evento después de pasar 1px de altura de scroll
              if (positionAnimation - 601 < scrollTop) {window.removeEventListener('scroll', handleScroll);}
          
            }

          };

        //

        window.addEventListener('scroll', handleScroll);

        // esto es para que sólo me haga una llamada al evento
        return () => {
          window.removeEventListener('scroll', handleScroll);

        };
      

      //
      
    }, []);

  //

  // Controlar secciones

    let typingController = !project.typing ? {display: 'none'} : null;
    let logoController = !project.logo ? {display: 'none'} : null;
    let characterController = !project.character ? {display: 'none'} : null;
    let artController = !project.art ? {display: 'none'} : null;
    let chromaticController = !project.chromatic ? {display: 'none'} : null; 
    let patternsController = !project.patterns ? {display:'none'} : null;
    let merchController = !project.merch ? {display: 'none'} : null;
    let merchHeaderController = !project.merchHeader ? {display:'none'} : null;
    let aditional_1Controller = !project.aditional_1 ? {display: 'none'} : null;
    let aditional_2Controller = !project.aditional_2 ? {display: 'none'} : null;

    let extraMargin = project.extraMargin ? {marginBottom: '80px'} : null;

  //

  // imágenes
    const image = "../img";

    // art
      let artImage = image + project.artImage;
    
    // character
      let characterImage = image + project.character;
    
    // patterns
      let patternsImage = image + project.patternsImage;

    // merch
      let merchImage1 = image + project.merchImage1;
      let merchImage2 = image + project.merchImage2;
      let merchImage3 = image + project.merchImage3;
      let merchImage4 = image + project.merchImage4;
      let merchImage5 = image + project.merchImage5;
      let merchImage6 = image + project.merchImage6;
      let merchImage7 = image + project.merchImage7;
      let merchImage8 = image + project.merchImage8;
      let merchImage9 = image + project.merchImage9;

      let merchImageController4 = !project.merchImage4 ? {display: 'none'} : null;
      let merchImageController5 = !project.merchImage5 ? {display: 'none'} : null;
      let merchImageController6 = !project.merchImage6 ? {display: 'none'} : null;
      let merchImageController7 = !project.merchImage7 ? {display: 'none'} : null;
      let merchImageController8 = !project.merchImage8 ? {display: 'none'} : null;
      let merchImageController9 = !project.merchImage9 ? {display: 'none'} : null;

    // aditional1
      let aditional1Image1 = image + project.aditional_1Image1;
      let aditional1Image2 = image + project.aditional_1Image2;
      let aditional1Image3 = image + project.aditional_1Image3;

    // aditional2  
      let aditional2Image1 = image + project.aditional_2Image1;
      let aditional2Image2 = image + project.aditional_2Image2;
      let aditional2Image3 = image + project.aditional_2Image3;

    //
    
  //

  // videos
    const video = "../video" + project.logo__video;

  //

  return (
    <div className='section__project'>

      <section 
        className= {`main__section section__presentation ${growNav}`}
        style={extraMargin}
      >

        <article>
          <h2>
            {project.title}
          </h2>
          <h3>
            {project.subtitle}
          </h3>
          <ul>
            <li>
              <span>Servicios</span>
              <span>{project.services}</span>
            </li>
            <li>
              <span>Cliente</span>
              <span>{project.client}</span>
            </li>
            <li>
              <span>Sobre el proyecto</span>
              <span>
                <p>
                  {project.about}
                </p>
              </span>
            </li>
          </ul>   
        </article>

        <article style= {typingController}>
          <div className= 'animation__singleWords__typing'>
            <div className= 'wrapper'>
              <div className= 'typing-demo__GWA'>
                {project.typing}
              </div>
            </div>
          </div>
        </article>

      </section>

      <section 
        className= {`main__section section__logoDesign ${growNav}`}
        style= {logoController}
      >
        <article>
          <h4>
            Diseño del logotipo
          </h4>
          <p>
            {project.logo}
          </p>
          <video controls key={location.pathname}>
            <source src= {video} type= 'video/mp4' />  
          </video>
        </article>

      </section>

      <section 
        className= {`main__section section__logoDesign ${growNav}`}
        style= {artController}
      >
            <article>
                <h4>
                    Arte
                </h4>
                <p>
                    {project.art} 
                </p>

                <img src= {artImage} />

            </article>

        </section>

      <section 
        className= {`main__section section__typography ${project.fontBackground} ${growNav}`}
        style= {characterController}
      >

        <article>
          <span className= 'header__typography'>
              <img src={characterImage}/>
          </span>
          <div>
            <h4>
              Elección tipográfica
            </h4>
            <p>
              {project.typography}
            </p>
          </div>
        </article>

        <article className= {`animation__typing ${project.fontFamily}`} style={resizeText}>
          <TypingAnimation id="typedtext"></TypingAnimation>
        </article>

      </section>

      <section 
        className= {`main__section section__colors ${growNav}`}
        style= {chromaticController}
      >

        <article>
          <h4>
            Gama cromática
          </h4>
          <p>
            {project.chromatic}
          </p>
        </article>
        <article>
          <ul>
            <li id= {project.colorButton_1} onClick={() => { project2balls(); sendColor(ballsColor_1); }}>{project.color_1}</li>
            <li id= {project.colorButton_2} onClick={() => { project2balls(); sendColor(ballsColor_2); }}>{project.color_2}</li>
            <li id= {project.colorButton_3} onClick={() => { project2balls(); sendColor(ballsColor_3); }}>{project.color_3}</li>
            <li id= {project.colorButton_4} onClick={() => { project2balls(); sendColor(ballsColor_4); }}>{project.color_4}</li>
          </ul>
        </article>
        <article>             
          <Balls project2balls = { initiateBalls } sendColor={ paintBalls }/>
        </article>

      </section>

      <section 
        className= {`main__section section__merch ${growNav}`}
        style= {patternsController}  
      >

        <article>
          <h4>Patterns</h4>
          <p>{project.patterns}</p>
        </article>

        <article>
            <img className= {project.patternsLayout} src= {patternsImage} />
        </article>
      
      </section>

      <section 
        className= {`main__section section__merch ${growNav}`}
        style= {merchController}
      >

        <article>
          <h4 style={merchHeaderController}>
            Adaptaciones y merchandising
          </h4>
          <p>
            {project.merch}
          </p>
        </article>
        <article>
          <img className= {project.merchImage1Layout} src= {merchImage1} />
          <img className= {project.merchImage2Layout} src= {merchImage2} />
          <img className= {project.merchImage3Layout} src= {merchImage3} />
          <img className= {project.merchImage4Layout} src= {merchImage4} style= {merchImageController4} />
          <img className= {project.merchImage5Layout} src= {merchImage5} style= {merchImageController5} />
          <img className= {project.merchImage6Layout} src= {merchImage6} style= {merchImageController6} />
          <img className= {project.merchImage4Layout} src= {merchImage7} style= {merchImageController7} />
          <img className= {project.merchImage5Layout} src= {merchImage8} style= {merchImageController8} />
          <img className= {project.merchImage6Layout} src= {merchImage9} style= {merchImageController9} />
        </article>

      </section>

      <section 
        className= {`main__section section__merch ${growNav}`}
        style= {aditional_1Controller}
        >

        <article>
          <h4>
            De camino a la moda sostenible
          </h4>
          <p>
            {project.aditional_1}
          </p>
        </article>

        <article>
          <img src= {aditional1Image1} />
          <img src= {aditional1Image2} />
          <img className= 'oneColumn' src= {aditional1Image3} />
        </article>

      </section>

      <section 
        className= {`main__section section__merch ${growNav}`}
        style= {aditional_2Controller}
        >

          <article>
            <h4>
              Versatilidad
            </h4>
            <p>
            {project.aditional_2} 
            </p>
          </article>

          <article>
            <img src= {aditional2Image1} />
            <img src= {aditional2Image2} />
            <img className= 'oneColumn' src= {aditional2Image3} />
          </article>
          
      </section> 

      <section className= {`footer__section ${growNav}`}>
        <Footer />
      </section>
    
    </div>
  )
}

export default ProjectDetails;