import React from 'react';

//import hooks
import { useState } from "react";

//import images
import menuLink from '../icons/link__projects-21.svg';
import closeIcon from '../icons/link__projects-22.svg';
import closeIcon__Branding from '../icons/icon__close__branding.svg';
import closeIcon__Packaging from '../icons/icon__close__packaging.svg';
import closeIcon__Web from '../icons/icon__close__audiovisual.svg';
import closeIcon__Editorial from '../icons/icon__close__editorial.svg';
import closeIcon__Campaigns from '../icons/icon__close__campaigns.svg';
import closeIcon__Illustration from '../icons/icon__close__illustration.svg';

//import styles
import '../css/MainHeader.css';
import '../css/NavMobile.css';
import '../css/Nav.css';

//import routes
import { Outlet } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Layout= ({ navDataController })=> {

  // Nav mobile controller

    // Aquí mostramos el menú abriendo también el primer panel
    const [showNav, setShowNav]= useState();

    const navController= ()=> {
      setShowNav(!showNav);
      setBranding(!showBranding);
    }

    let growNav= !showNav ? 'hidden' : null;
  

  // Nav desktop controller

    // Aquí mostramos el menú abriendo también el primer panel
      const [showNavDesktop, setShowNavDesktop]= useState();
      // en esta constante seteamos el valor de showNavDesktop
        const passingData= !showNavDesktop;

      const navControllerDesktop= ()=> {
        // cada vez que se ejecuta esta función el valor de showNavDesktop cambia a su booleano contrario para mostrar el nav desktop
        setShowNavDesktop(!showNavDesktop);
        //con esta prop pasamos el valor de const 'passingData' (definido más arriba) al componente App.jsx
        navDataController(passingData);
        
      }

      // aquí mostramos u ocultamos el menú desktop cerrado
      let growNavDesktop= showNavDesktop ? 'showMenuDesktop' : null;
     
      // aquí mostramos u ocultamos el icono de 'X' en el header principal
      let showCloseIcon= showNavDesktop ? {opacity:'1'} : null;

  // Branding controller

    //variables para los hooks de abrir y cerrar un elemento del Nav.
    const [showBranding, setBranding]= useState();
    
    const openerControllerBranding= ()=> {
      // el set hace cambiar el valor de la variable por su valor booleano contrario
      setBranding(!showBranding);
  
      // cerrar los otros 'li' si están abiertos
      if (showPackaging) {setPackaging(!showPackaging)};
      if (showWeb) {setWeb(!showWeb)};
      if (showEditorial) {setEditorial(!showEditorial)};
      if (showCampaign) {setCampaign(!showCampaign)};
      if (showIllustration) {setIllustration(!showIllustration)};

    };

    // aquí comprobamos que valor booleano que trae el prop 'header2nav desde Layout.jsx para que cuando aparezca el menú se abra Branding
    let growBranding= showBranding ? 'grow' : null;
    let hideBranding= showBranding ? 'hidden' : null;

  // Packaging controller

    const [showPackaging, setPackaging]= useState(false);
    
    const openerControllerPackaging= ()=> {
      setPackaging(!showPackaging);
      if (showBranding) {setBranding(!showBranding)};
      if (showWeb) {setWeb(!showWeb)};
      if (showEditorial) {setEditorial(!showEditorial)};
      if (showCampaign) {setCampaign(!showCampaign)};
      if (showIllustration) {setIllustration(!showIllustration)};

    };

    let growPackaging= showPackaging ? 'grow' : null;
    let hidePackaging= showPackaging ? 'hidden' : null;

  // Web controller

    const [showWeb, setWeb]= useState(false);
      
    const openerControllerWeb= ()=> {
      setWeb(!showWeb);
      if (showBranding) {setBranding(!showBranding)};
      if (showPackaging) {setPackaging(!showPackaging)};
      if (showEditorial) {setEditorial(!showEditorial)};
      if (showCampaign) {setCampaign(!showCampaign)};
      if (showIllustration) {setIllustration(!showIllustration)};

    };

    let growWeb= showWeb ? 'grow' : null;
    let hideWeb= showWeb ? 'hidden' : null;

  // Editorial controller

    const [showEditorial, setEditorial]= useState(false);
        
    const openerControllerEditorial= ()=> {
      setEditorial(!showEditorial);
      if (showBranding) {setBranding(!showBranding)};
      if (showPackaging) {setPackaging(!showPackaging)};
      if (showWeb) {setWeb(!showWeb)};
      if (showCampaign) {setCampaign(!showCampaign)};
      if (showIllustration) {setIllustration(!showIllustration)};

    };

    let growEditorial= showEditorial ? 'grow' : null;
    let hideEditorial= showEditorial ? 'hidden' : null;

  // Campaign controller

    const [showCampaign, setCampaign]= useState(false);
        
    const openerControllerCampaign= ()=> {
      setCampaign(!showCampaign);
      if (showBranding) {setBranding(!showBranding)};
      if (showPackaging) {setPackaging(!showPackaging)};
      if (showWeb) {setWeb(!showWeb)};
      if (showEditorial) {setEditorial(!showEditorial)};
      if (showIllustration) {setIllustration(!showIllustration)};

    };

    let growCampaign= showCampaign ? 'grow' : null;
    let hideCampaign= showCampaign ? 'hidden' : null;

  // Illustration controller

    const [showIllustration, setIllustration]= useState(false);
          
    const openerControllerIllustration= ()=> {
      setIllustration(!showIllustration);
      if (showBranding) {setBranding(!showBranding)};
      if (showPackaging) {setPackaging(!showPackaging)};
      if (showWeb) {setWeb(!showWeb)};
      if (showEditorial) {setEditorial(!showEditorial)};
      if (showCampaign) {setCampaign(!showCampaign)};

    };

    let growIllustration= showIllustration ? 'grow' : null;
    let hideIllustration= showIllustration ? 'hidden' : null;

  // aquí ajustamos los efectos de aparición

    const changeMenuWidth= [
      showBranding ? 'showingMenuDesktop' : null,
      showPackaging ? 'showingMenuDesktop' : null,
      showWeb ? 'showingMenuDesktop' : null,
      showEditorial ? 'showingMenuDesktop' : null,
      showCampaign ? 'showingMenuDesktop' : null,
      showIllustration ? 'showingMenuDesktop' : null,
    ]; 

    const hideLiContent= [
      showBranding ? 'fade__in' : 'fade__out',
      showPackaging ? 'fade__in' : 'fade__out',
      showWeb ? null : 'fade__out',
      showEditorial ? null : 'fade__out',
      showCampaign ? null : 'fade__out',
      showIllustration ? null : 'fade__out'
    ];

  // Close pannel

    const closePannel= ()=> {
      setShowNav(!showNav);
      if (showBranding) {setBranding(!showBranding)};
      if (showPackaging) {setPackaging(!showPackaging)};
      if (showWeb) {setWeb(!showWeb)};
      if (showEditorial) {setEditorial(!showEditorial)};
      if (showCampaign) {setCampaign(!showCampaign)};
      if (showIllustration) {setIllustration(!showIllustration)};
    }

  return (

    <div className='MainHeader'>
  
      <nav>

        <div  id='principalMenu__mobile' className= {growNav}>
          <ul>
            
            <li className= {`menuElement__mobile ${growBranding}`} >

              <header 
                //aqui añadimos hidden si no lo tenía.
                className={`menuHeader0__mobile ${hideBranding}`}
                //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                onClick={openerControllerBranding}
              >
                <a className='menuLink0__mobile'>Branding</a>
              </header>

              <section className='menuContent0__mobile'>

                <div 
                  //aquí le quitamos o le ponemos la clase hidden
                  className= {`menuClose__mobile ${!hideBranding}`}
                  //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                  onClick={closePannel}
                >
                  <a>
                    <img 
                      src={closeIcon__Branding} 
                      alt='Botón de cierre'
                    />
                  </a>
                </div>
                <header>
                  <h2>Branding</h2>
                </header>
                <article>
                <h3>
                  <Link onClick={closePannel} to= {'/proyecto/peloodos'}>Peloodos</Link>
                </h3>
                <h3>
                  <Link onClick={closePannel} to= {'/proyecto/greenwalk'}>Greenwalk Awards</Link>
                </h3>
                </article>
              </section>
            </li>

            <li className= {`menuElement__mobile ${growPackaging}`}>

              <header 
                className={`menuHeader__mobile ${hidePackaging}`}
                onClick={openerControllerPackaging}
              >

                <a className='menuLink__mobile'>Packaging</a>
              </header>
              <section className='menuContent__mobile'>
                
                <div 
                  className={`menuClose__mobile ${!hidePackaging}`}
                  onClick={closePannel}
                >
                  <a>
                  <img 
                    src={closeIcon__Packaging} 
                    alt='Botón de cierre'
                  />
                  </a>
                </div>
                <header>
                  <h2>Packaging</h2>
                </header>
                <article>
                  <h3><Link onClick={closePannel} to= {'/proyecto/fortunatas'}>Fortunatas</Link></h3>
                </article>
              </section>
            </li>

            <li className= {`menuElement__mobile ${growWeb}`}>

              <header 
                className={`menuHeader__mobile ${hideWeb}`}
                onClick={openerControllerWeb}
              >
                <a className='menuLink__mobile'>Diseño web</a>
              </header>

              <section className='menuContent__mobile'>
                
                <div 
                  className={`menuClose__mobile ${!hideWeb}`}
                  onClick={closePannel}
                >
                  <a>
                  <img 
                    src={closeIcon__Web} 
                    alt='Botón de cierre'
                  />
                  </a>
                </div>
                <header>
                  <h2>Diseño web</h2>
                </header>
                <article>
                  <h3>
                    <a>
                      Proyecto en curso ¡Podrás verlo muy pronto!
                    </a>
                  </h3>
                </article>
              </section>
            </li>

            <li className= {`menuElement__mobile ${growEditorial}`}>

              <header 
                className={`menuHeader__mobile ${hideEditorial}`}
                onClick={openerControllerEditorial}
              >
                <a className='menuLink__mobile'>Editorial</a>

              </header>

              <section className='menuContent__mobile'>

                <div 
                  className={`menuClose__mobile ${!hideEditorial}`}
                  onClick={closePannel}
                >
                  <a>
                  <img 
                    src={closeIcon__Editorial} 
                    alt='Botón de cierre'
                  />
                  </a>
                </div>
                <header>
                  <h2>Editorial</h2>
                </header>
                <article>
                  <h3><Link onClick={closePannel} to= {'/proyecto/vogue'}>Vogue</Link></h3>
                </article>
              </section>
            </li>

            <li className= {`menuElement__mobile ${growCampaign}`}>

              <header 
                className={`menuHeader__mobile ${hideCampaign}`}
                onClick={openerControllerCampaign}
              >
                <a className='menuLink__mobile'>Campañas</a>

              </header> 

              <section className='menuContent__mobile'>

                <div 
                  className={`menuClose__mobile ${!hideCampaign}`}
                  onClick={closePannel}
                >
                    <a>
                    <img 
                    src={closeIcon__Campaigns} 
                    alt='Botón de cierre'
                  />
                    </a>
                </div>
                <header>
                  <h2>Campañas</h2>
                </header>
                <article>
                  <h3><Link onClick={closePannel} to= {'/proyecto/rojosalvaje'}>Rojo Salvaje</Link></h3>
                </article>
              </section>
            </li>

            <li className= {`menuElement__mobile ${growIllustration}`}>

              <header 
                className={`menuHeader__mobile ${hideIllustration}`}
                onClick={openerControllerIllustration}
              >
                <a className='menuLink__mobile'>Ilustración</a>
              </header>

              <section className='menuContent__mobile'>

                <div 
                  className={`menuClose__mobile ${!hideIllustration}`}
                  onClick={closePannel}
                >
                  <a>
                  <img 
                      src={closeIcon__Illustration} 
                      alt='Botón de cierre'
                    />
                  </a>
                </div>
                <header>
                  <h2>Ilustración</h2>
                </header>
                <article>
                  <h3><Link onClick={closePannel} to= {'/proyecto/elferrocarril'}>El Ferrocarril</Link></h3>
                </article>
              </section>
            </li>
          </ul>
        </div>

        <div 
          className= 
            {`
              principalMenu 
              ${growNavDesktop} 
              ${changeMenuWidth[0]} 
              ${changeMenuWidth[1]} 
              ${changeMenuWidth[2]} 
              ${changeMenuWidth[3]} 
              ${changeMenuWidth[4]} 
              ${changeMenuWidth[5]}
            `}>

          <ul>

            <li className= {`menuElement ${growBranding}`}>

              <header 
                //aqui añadimos hidden si no lo tenía.
                className={`menuHeader0 ${hideBranding}`}
                //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                onClick={openerControllerBranding}
                >
                  <a className="menuLink1">Branding</a>
              </header>

              <section className= {`menuContent ${hideLiContent[0]} `}>
                    
                <div className= {`menuClose ${!hideBranding}`}>

                  <span>
                    Proyectos
                  </span>

                  <div 
                    //aquí le quitamos o le ponemos la clase hidden
                    className= {`menuClose ${!hideBranding}`}
                    //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                    onClick={closePannel}
                  >
                    <a>
                    <img 
                      src={closeIcon__Branding} 
                      alt='Botón de cierre'
                    />
                    </a>
                  </div>

                </div>

                <header>
                    <h2>Branding</h2>
                </header>

                  <article>
                      <h3 onClick={closePannel}><Link to={'/proyecto/peloodos'}>Peloodos</Link></h3>
                      <h3 onClick={closePannel}><Link to={'/proyecto/greenwalk'}>Greenwalk Awards</Link></h3>
                  </article>

                </section>
            </li>

            <li className= {`menuElement ${growPackaging}`}>
                
            <header 
                //aqui añadimos hidden si no lo tenía.
                className={`menuHeader0 ${hidePackaging}`}
                //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                onClick={openerControllerPackaging}
                >
                  <a className="menuLink1">Packaging</a>
              </header>

               <section className= {`menuContent ${hideLiContent[1]} `}>

                    <div>

                        <span>
                            Proyectos
                        </span>

                        <div 
                          className= {`menuClose ${!hidePackaging}`}
                          onClick={closePannel}
                        >
                          <a>
                              <img 
                                src= {closeIcon__Packaging} 
                                alt= 'botón de cierre'
                              />
                          </a>
                        </div>

                    </div>

                    <header>
                        <h2>Packaging</h2>
                    </header>

                    <article>
                        <h3 onClick={closePannel}><Link to={'/proyecto/fortunatas'}>Fortunatas</Link></h3>
                    </article>
                    
                </section>
            </li>

            <li className= {`menuElement ${growWeb}`}>

              <header 
                //aqui añadimos hidden si no lo tenía.
                className={`menuHeader0 ${hideWeb}`}
                //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                onClick={openerControllerWeb}
                >
                  <a className="menuLink1">Diseño Web</a>
              </header>

                <section className= {`menuContent ${hideLiContent[2]} `}>

                    <div>

                        <span>
                            Proyecto
                        </span>

                        <div 
                          className= {`menuClose ${!hideWeb}`}
                          onClick={closePannel}
                        >
                            <a>
                                <img 
                                  src= {closeIcon__Web} 
                                  alt= 'botón de cierre'
                                />
                            </a>
                        </div>

                    </div>

                    <header>
                        <h2>Diseño Web</h2>
                    </header>

                    <article>
                        <h3>
                            <a>
                                Proyecto en curso ¡Podrás verlo muy pronto!
                            </a>
                        </h3>
                    </article>
                </section>
            </li>

            <li className= {`menuElement ${growEditorial}`}>

             <header 
                //aqui añadimos hidden si no lo tenía.
                className={`menuHeader0 ${hideEditorial}`}
                //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                onClick={openerControllerEditorial}
                >
                  <a className="menuLink1">Editorial</a>
              </header>

                <section className= {`menuContent ${hideLiContent[3]} `}>

                    <div>

                        <span>
                            Proyectos
                        </span>

                        <div 
                          className= {`menuClose ${!hideEditorial}`}
                          onClick={closePannel}
                        >
                            <a>
                                <img 
                                  src= {closeIcon__Editorial} 
                                  alt= 'botón de cierre'
                                />
                            </a>
                        </div>

                    </div>

                    <header>
                        <h2>Editorial</h2>
                    </header>

                    <article>
                      <h3 onClick={closePannel}><Link to={'/proyecto/vogue'}>Vogue</Link></h3>
                    </article>

                </section>
            </li>

            <li className= {`menuElement ${growCampaign}`}>

              <header 
                //aqui añadimos hidden si no lo tenía.
                className={`menuHeader0 ${hideCampaign}`}
                //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                onClick={openerControllerCampaign}
                >
                  <a className="menuLink1">Campañas</a>
              </header> 

              <section className= {`menuContent ${hideLiContent[4]} `}>

                <div>

                  <span>
                    Proyectos
                  </span>

                  <div 
                    className= {`menuClose ${!hideCampaign}`}
                    onClick={closePannel}
                  >
                    <a>
                      <img 
                        src= {closeIcon__Campaigns}
                        alt= 'botón de cierre'
                      />
                    </a>
                  </div>

                </div>

                <header>
                  <h2>Campañas</h2>
                </header>

                  <article>
                    <h3 onClick={closePannel}><Link to={'/proyecto/rojosalvaje'}>Rojo Salvaje</Link></h3>
                  </article>
              </section>
            </li>

            <li className= {`menuElement ${growIllustration}`}>

              <header 
                //aqui añadimos hidden si no lo tenía.
                className={`menuHeader0 ${hideIllustration}`}
                //aquí ponemos el event listener para hacer los cambios de clases pertinentes
                onClick={openerControllerIllustration}
                >
                  <a className="menuLink1">Ilustración</a>
              </header>

              <section className= {`menuContent ${hideLiContent[5]} `}>

                <div>

                  <span>
                    Proyectos
                  </span>

                  <div 
                    className= {`menuClose ${!hideIllustration}`}
                    onClick={closePannel}
                  >
                    <a>
                      <img 
                        src= {closeIcon__Illustration} 
                        alt= 'botón de cierre'
                        />
                    </a>
                  </div>

                </div>

                <header>
                  <h2>Ilustración</h2>
                </header>

                <article>
                  <h3 onClick={closePannel}><Link to={'/proyecto/elferrocarril'}>El Ferrocarril</Link></h3>
                </article>
              </section>
            </li>
              
          </ul>
        </div>

      </nav>

      <header className='page__header'>
        <a href='/'>
          <div className='logo__inner'></div>
        </a>

        <div 
          className='menu__mobile' 
          onClick={navController}
          >

        </div>

        <ul className='menu__list'>
          <li className='menu__element'>
            <Link to='/about'>about</Link>
          </li>
          <li className='menu__element'>
            <Link smooth to='/#form__section'>contacto</Link>
          </li>  
          <li className='menu__element'>
            <a>blog</a>
          </li> 
          <li className='menu__element'>
            <a id='menuProjects' onClick={navControllerDesktop}>
              <img src= {menuLink} />
              <img 
                id= 'closeIcon' 
                src= {closeIcon} 
                style={showCloseIcon}
              />
            </a>
          </li>                
        </ul>  
      </header>

      <Outlet />

    </div>
  )
}

export default Layout;