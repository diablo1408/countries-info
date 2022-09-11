import React,{useState} from "react";
import CountryCard from "./CountryCard";
import {useNavigate} from 'react-router-dom'
import {Loader} from './Loader'


  const CountriesGrid=({countryList})=>{
    const [isLoading,setIsLoading]=useState(true);
    const navigate = useNavigate();
   // const handleOnClick = useCallback(() => navigate('/country', {replace: true,state:}), [navigate]);
   
   function handleOnClick(countryData) { 
    navigate('/country', {replace: false,state:countryData});

   }
   if(isLoading&&countryList.length>0){ 
     setIsLoading(false);
   }
   
    return(
    
    
    <main id='container'>
      {isLoading?  <Loader/>: countryList.length>0? countryList.map((countryData,i)=>{
        return <CountryCard key={i} countryData={countryData} onItemClick={()=>handleOnClick(countryData)} /> 
      }):<h1>No Countries Found Please Try Again</h1> } 
     

    </main>)
    
    

}


export default CountriesGrid;