//import routes
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';
import NoPage from './pages/NoPage';

//import hooks
import { useState } from 'react';

function App() {

  //aquí creamos este hook para crear la variable de datos que va a recibir de Layout.jsx
  const [navData, setNavData] = useState();

  //aquí manejamos la data recibida de Layout.jsx
  const navDataController = (childData) => {
    setNavData(childData);
      
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Layout navDataController = { navDataController } />}>
          <Route path='/' element= {<Home navDataController = { navData }/>} />
          <Route path='about' element= {<About navDataController = { navData } />} />
          <Route path='/proyecto/:ID' element= {<ProjectDetails navDataController = { navData } />} />
          <Route path='*' element= {<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
