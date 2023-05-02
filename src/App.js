import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainLayout from './pages/MainLayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='w-full h-full'>
      <Router>
        <Routes>
          <Route path='/in' element={<MainLayout />}>

          </Route>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
