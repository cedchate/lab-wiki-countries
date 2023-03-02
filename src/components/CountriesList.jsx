import React from 'react'
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight : '90vh', overflow: "scroll"}}>
        <div className="list-group">
            {props.countries.map((country) => {
                return (
                  <>
                    <Link style={{display: 'flex', flexDirection:'column', alignItems: 'center'}} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}
                    ><img style={{width: '5vw'}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                    {country.name.common}</Link>
                  </>
                );
            })}
        </div>
    </div>
  )
}

export default CountriesList
