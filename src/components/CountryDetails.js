import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CountryDetails = (props) => {
  const [country, setCountry] = useState(null);
  const { alphaCode } = useParams();

  const getBorder = (code) => {
    return props.countries.find((country) => country.alpha3Code === code);
  };

  useEffect(() => {
    const apiSearch= fetch('https://ih-countries-api.herokuapp.com/countries/'+alphaCode)
    .then((res)=> res.json())
    .then((res)=> {
      res.borders = res.borders.map((countryCode) =>  getBorder(countryCode));;
      setCountry(res)})
    .catch((error)=> console.log(error))
    // props.countries.forEach((el) => {
    //   // console.log(el.alpha2Code)
    //   if (el.alpha3Code === alphaCode) {
    //     // console.log(el.name.common)
    //     const copy = {...el}
    //     copy.borders = el.borders.map((countryCode) =>  getBorder(countryCode));
    //     setCountry(copy);
    //   }
    // });
  }, [alphaCode]);
  // console.log(country)

  if (!country) {
    return <></>;
  }

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((el) => {
                  {/* console.log(el) */}

                  return (
                    <li>
                      <Link
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                        className="list-group-item list-group-item-action"
                        to={`/${el.alpha3Code}`}
                      >
                        <img
                          style={{ width: '5vw' }}
                          src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`}
                          alt={el.name.common}
                        />
                        {el.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
