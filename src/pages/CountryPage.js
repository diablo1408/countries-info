import React from "react";
import Navbar from "../components/Navbar";
import Searchbox from "../components/SearchFilter";
import CountriesGrid from "../components/CountriesGrid";
import { useEffect,useState } from "react";



import {BASE_URL} from '../constants'


export const CountryPage=()=>{
    const [countryList,setCountryList]=useState([]);
  
  // console.log(countryList);
 
     useEffect(()=>{
          
         fetch(`${BASE_URL}/all`)
         .then((response)=>response.json())
         .then((data)=>{
         setCountryList(data)
       
         }
         ).catch((err) => {
             console.log(err.message);
          });
 
       
     },[])

    return(
        <>
        
     <Searchbox  setCountryList={setCountryList} />
     <CountriesGrid countryList={countryList}/>
        </>
    )
}