import { Route, Routes } from "react-router-dom"; //Routes funciona como envoltorio de rutas
import Navigation from './Components/Navigation'
import HomePage from './views/HomePage'
import Informationpage from './views/InformationPage'
import NotFound from './views/NotFound'


function App() {
  

  return (
   <div>
    <Navigation />
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* element es el componente que se carga cuando la url coincide con esta ruta */}
        <Route path="/Contacto" element={<Informationpage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>


   </div>

  )
}

export default App
