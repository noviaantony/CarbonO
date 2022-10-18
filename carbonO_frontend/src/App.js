import React, {useContext} from 'react';
import Landing from './screens/Landing';
import SignUpForm from './components/registration/SignUpForm';
import LogInForm from './components/registration/LogInForm';
import CarbonTracker from './screens/CarbonTracker';
import Dashboard from './screens/Dashboard';
import Donate from './screens/Donate';
import Rewards from './screens/Rewards';
import Payment from './screens/Payment';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import AuthContext from './context/AuthProvider';
import AuthNavbar from './components/navigation/AuthNavbar';
import NotAuthNavbar from './components/navigation/NotAuthNavbar';


function App() {
  const {auth} = useContext(AuthContext);
  console.log(auth.authenticated);
  return (
  <>
    {auth.authenticated ? <AuthNavbar /> : <NotAuthNavbar />}
    <Routes>
      <Route path='*' element={<Landing />} />
      <Route path='/CarbonTracker' element={<CarbonTracker />} />
      <Route path='/Login' element={<LogInForm />} />
      <Route path='/Signup' element={<SignUpForm />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Donate' element={<Donate />} />
      <Route path='/Rewards' element={<Rewards />} />
      <Route path='/Payment' element={<Payment />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
