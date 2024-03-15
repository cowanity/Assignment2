import './css/style.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom'; // Fixed the import here
import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import Asset from './components/asset/assets.js';
import History from './components/history/history.js';
import Login from './components/login/form.js';
import Footer from './footer/footer.js';
import RequireAuth from '@auth-kit/react-router/RequireAuth' //  require to login to browse

function App() {
  return (
        <div className="App">
          <div className="main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/assets" element={ <RequireAuth fallbackPath={'/login'}> <Asset /> </RequireAuth>} /> {/* route to login to browse assets*/}
                <Route path="/history" element={ <RequireAuth fallbackPath={'/login'}> <History/> </RequireAuth>} />  {/* route to login to browse history*/} 
                <Route path="/login" element={<Login/>} />
            </Routes>
            <Footer />
          </div>
        </div>
  );
}

export default App;