import React from "react";


import './CountryCard.scss'


  const CountryCard=({countryData,onItemClick})=>{
    // console.log(countryData?.capital?.[0]);
    
    return(   <div className="CountryCard" onClick={onItemClick}>
    <img src={countryData.flags.svg} alt=""/>

   
    <div className="card-details">

    
      
    
      <div className="country-name">{countryData.name.common}</div>

      <div className="country-info">
         <p><strong>Population:</strong>{countryData.population}</p>
         <p><strong>Region:</strong>{countryData.region}</p>
         <p><strong> Capital:</strong>{countryData.capital}</p>
      </div>

     

    </div>


  </div>)

}


export default CountryCard;