import React from "react";

import { CountryPage } from "./pages/CountryPage";
import { CountryDetailPage } from "./pages/CountryDetailPage";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'



function App() {
   
 
  

   

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
   <Routes>
      <Route path="/" element={<CountryPage/>} />
      <Route path="/country" element={<CountryDetailPage/>} />
     
    </Routes>

 </BrowserRouter>
    
    </div>
  );
}

export default App;
