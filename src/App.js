import './App.css';
import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Login from './Login'
import Addservice from './components/Addservice.js'
import Showservices from './components/Showservices.js'
import Servicedetails from './components/Servicedetails.js'
import Addprovider from './components/Addprovider';
// import Admin from './components/Admin';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Routes>
        {/* <Route path="/admin" element={<Admin />}> */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin_home" element={<Home />} />

          <Route path="/admin_addservice" element={<Addservice />} />
          <Route path="/admin_showservices" element={<Showservices />} />
          <Route path="/admin_servicesdetails/:id" element={<Servicedetails />} />

          <Route path="/admin_addprovider" element={<Addprovider />} />
        {/* </Route> */}
      </Routes>

    </>
  );
}

export default App;
