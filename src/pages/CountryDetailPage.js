import React from "react";
import { useLocation } from "react-router-dom";

import "./CountryDetailPage.scss";

export const CountryDetailPage = () => {
  let location = useLocation();
  let countryData = location.state;

  return (
    <div className="CountryDetailPage">
      {/* <div className="country-flag"> */}
      <img src={countryData.flags.svg} alt="" />
      {/* </div> */}

      <div className="country-info">
        <div className="country-name">
          {countryData.name.common}
        </div>
        <div className="country-details">
          <p>
            <strong>Population:</strong>
            <span> {countryData.population}</span>
           
          </p>
          <p>
            <strong>Native Name:</strong>
            <span>
              {
                countryData.name.nativeName[
                  Object.keys(countryData.name.nativeName)[0]
                ].official
              }
            </span>
          </p>
          <p>
            <strong> Region:</strong>
            <span>{countryData.region}</span>
          </p>
          <p>
            <strong>Sub Region:</strong>
            <span>{countryData.subregion}</span>
          </p>
          <p>
            <strong>Capital:</strong>
            <span>{countryData.capital}</span>
          </p>
          <p>
            <strong> Top Level Domain:</strong>
            <span>{countryData.tld}</span>
          </p>
          <p>
            <strong> Currencies:</strong>
            <span>
              {
                countryData.currencies[Object.keys(countryData.currencies)[0]]
                  .name
              }
            </span>
          </p>
          <p>
            <strong>Languages:</strong>
            <span></span>{" "}
            {React.Children.toArray(
              Object.keys(countryData.languages).map((lang) => (
                <span>{countryData.languages[lang]}</span>
              ))
            )}
          </p>
          
        </div>
        <div className="border-countries">
          <strong>Border Countries:</strong>
            {React.Children.toArray(
              countryData.borders.map((country) => <span>{country}</span>)
            )}
          </div>
      </div>
    </div>
  );
};
