import React from "react";
import {useState} from "react";
import {debounce} from "../utils.js"

import {BASE_URL} from '../constants'

const SearchFilter = ({setCountryList}) => {
  
  const [searchQuerytext,setSearchQueryText] = useState("");
  const [filterRegion,setFilterRegion]=useState("default");

   function handleSearchQueryChange(e){
    let query = e.target.value;
    console.log(e.target.value);
    setSearchQueryText(query);
   debounce(getSearchResults,500)(query);
   //console.log(func);
   //func(query);
   
    
    //getSearchResults(e.target.value);
   }
   function handleFilterRegionChange(e){
    console.log(e.target.value);
      setFilterRegion(e.target.value);
      getCountriesbyRegion(e.target.value);
   }

   function getCountriesbyRegion(value){
    fetch(`${BASE_URL}/region/${value}`)
    .then((response)=>response.json())
    .then((data)=>{
    setCountryList(data)
   })
   .catch((error)=>{console.error(error)})
   }

   function getSearchResults(query){
   //console console.log(this);
    fetch(`${BASE_URL}/name/${query}`)
    .then((response)=>response.json())
    .then((data)=>{
    setCountryList(data)
   })
   .catch((error)=>{console.error(error)})
  }


  return (
    <div className="SearchFilter">
      <input type="search" value={searchQuerytext} onChange={(e)=>handleSearchQueryChange(e)} placeholder="Search for the country" />

      <select  value ={filterRegion} className="filter-dropdown" onChange={(e)=>handleFilterRegionChange(e)}>
        <option value='default' hidden>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option  value='oceania'>Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;
