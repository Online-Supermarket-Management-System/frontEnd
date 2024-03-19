
import './App.css';
import TopHeader from './components/TopHeader/TopHeader';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './pages/login/Login';
import Footer from './components/Footer/Footer';
import React, { useEffect } from 'react';
import Register from './pages/register/Register'
import ForgotPw from './pages/ForgotPW/ForgotPW'; 

function App() {
  useEffect(() => {
    document.title = "Northway Familymart";
  }, []);
  
  return (
    <div className="App">
     
      <TopHeader />
      <NavigationBar />
      <Register />



      <Footer />
    </div>
  );
}

export default App;
