import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Photos from './pages/Photos';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div>

     <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route path='/login' element={<Auth/>} />
      
      <Route path='/register' element={<Auth register />} />
      
      <Route path='/dashboard' element={<Dashboard Dashboard />} />
      
      <Route path='/photos' element={<Photos/>} />
     
     </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;
