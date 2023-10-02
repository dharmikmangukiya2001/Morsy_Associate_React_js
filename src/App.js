import './App.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Login from './Login'
import Addservice from './components/Addservice.js'
import Showservices from './components/Showservices.js'
import Servicedetails from './components/Servicedetails.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={ <Login/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/addservice" element={<Addservice/>}/>
        <Route path="/showservices" element={<Showservices/>}/>
        <Route path="/servicesdetails/:id" element={<Servicedetails/>}/>

        

      </Routes>

    </>
  );
}

export default App;
