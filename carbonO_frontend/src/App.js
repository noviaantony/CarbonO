import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './screens/Landing';
import SignUpForm from './components/registration/SignUpForm';
import LogInForm from './components/registration/LogInForm';
import CarbonTracker from './screens/CarbonTracker';
import Dashboard from './screens/Dashboard';
import Donate from './screens/Donate';
import Rewards from './screens/Rewards';
import Payment from './screens/Payment';
import Footer from './components/footer/Footer';
import AuthContext from './context/AuthProvider';
import AuthNavbar from './components/navigation/AuthNavbar';
import NotAuthNavbar from './components/navigation/NotAuthNavbar';
import PageNotFound from './screens/PageNotFound';
import ResetPassword from "./components/registration/ResetPassword";
import ForgotPassword from "./components/registration/ForgotPassword";


function App() {
  
  const { auth } = useContext(AuthContext);
  console.log(auth.authenticated);
  return (
    <>
      {auth.authenticated ? <AuthNavbar /> : <NotAuthNavbar />}
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Landing />} />
          <Route path="/CarbonTracker" element={<CarbonTracker />} />
          <Route path="/Login" element={<LogInForm />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/ForgetPassword" element={<ForgotPassword />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="*" element={<PageNotFound />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
