import React , {useState}  from 'react';
import './App.css';
import Footer from './components/Footer';

import { AppProvider } from './context/AppContext';
import {  BrowserRouter,  Route,   Routes, } from "react-router-dom";
import Home from './pages/Home'
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ReportCase from './pages/ReportCase';
import Map from './pages/Map';
import Chatbot from './pages/Chatbot';




const App = () => {

  const [loadingWeb , setLoadingWeb ] = useState(true);



  setTimeout(() => {
    setLoadingWeb(false);
  } , 1500)

  return (

    <AppProvider>

    {loadingWeb ? (
      <Loading />
    ) : (

      <div className="iwaiter_container  " >
   <BrowserRouter>

      <Navbar />
  
          <Routes>

          <Route
                path="/"
                element={
                  <GetStarted />
                }
              />
            
              <Route
                path="/home"
                element={
                  <Home />
                }
              />
            
              <Route
                path="/login"
                element={
                  <Login />
                }
              />
            
              <Route
                path="/signUp"
                element={
                  <Signup />
                }
              />
            
              <Route
                path="/report-case"
                element={
                  <ReportCase  isEmergancy={false} />
                }
              />
            
              <Route
                path="/emergancy-report"
                element={
                  <ReportCase  isEmergancy={true} />
                }
              />
            
              <Route
                path="/map"
                element={
                  <Map   />
                }
              />
            
            
              <Route
                path="/chatbot"
                element={
                  <Chatbot   />
                }
              />
            
            

          </Routes>
       
                <Footer />
        </BrowserRouter>

</div>

    )}
  

  


    </AppProvider>
  )
}

export default App