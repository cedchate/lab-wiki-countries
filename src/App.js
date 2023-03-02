import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [Countries, setContries]= useState(null);
  useEffect(()=> {
    const apiCountries= fetch('https://ih-countries-api.herokuapp.com/countries')
    .then((res)=> res.json())
    .then((res)=> {setContries(res)})
    .catch((error)=> console.log(console.error()))
  }, [])
  if(!Countries){
    return <h1>Loading</h1>
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Routes>
            <Route path="/:alphaCode" element={ <CountryDetails countries={Countries}/> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
