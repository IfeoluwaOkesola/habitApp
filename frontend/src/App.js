import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainLayout from './pages/MainLayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Community from './pages/Community';
import Habits from './pages/Habits';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='in' element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="community" element={<Community />} />
            <Route path="habits" element={<Habits />} />
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
