import './App.css';
import Landing from "./screens/Landing.jsx";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from 'react';
import Loader from './components/loader/Loader.jsx';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
        {
          loading ? <Loader /> : (<div>
            <Helmet>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
            </Helmet>
            <Landing />
          </div>)
        }
 
    </>
  );
}

export default App;
