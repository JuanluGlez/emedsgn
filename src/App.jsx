//import pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';
import NoPage from './pages/NoPage';

//import hooks
import { useState } from 'react';
import {  BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { useEffect } from 'react';

// data imports
import projectsData from './data/projects.json';

//import components
import Cursor from './components/Cursor.jsx';

function App() {

  //aquí creamos este hook para crear la variable de datos que va a recibir de Layout.jsx
  const [navData, setNavData] = useState();

  //aquí manejamos la data recibida de Layout.jsx
  const navDataController = (childData) => {
    setNavData(childData);
      
  }

  console.log(process.env.REACT_APP_PUBLIC_URL);

  return (
    <div>
      
      <Routes basename="/">
        <Route path='/' element= {<Layout navDataController = { navDataController } />}>
          <Route path='/' element= {<Home navDataController = { navData }/>} />
          <Route path='about' element= {<About navDataController = { navData } />} />
          {projectsData.map((project) => (
            <Route
              key= {project.ID}
              path={`/proyecto/${project.ID}`} 
              element= {<ProjectDetails navDataController = { navData } project={ project } />} 
            />
          ))}
          <Route path='*' element= {<NoPage />} />
        </Route>
      </Routes>

      <Cursor />
      
    </div>
  );
}

export default App;
