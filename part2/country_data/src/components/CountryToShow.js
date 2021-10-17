
import Button from './Button'
import Weather from './Weather';

const CountryToShow = ({countryToShow,setFilter}) => {


    if (countryToShow.length >= 10) {
        return (
                <p>'too many results'</p>
        )
    } else if (countryToShow.length < 10 && countryToShow.length > 1) {
        return (
            <div>
                {countryToShow.map((c) => (
                <li key={c.name.common}>
                    {c.name.common}
                    <Button text='show' onClick={()=>setFilter(c.name.common)}/>
                </li>
                ))}
            </div>
        );

    }else if(countryToShow.length === 1) {

        return (
            <div>
                {countryToShow.map((c) => (
                <div key={c.name.common}>
                    <h1>{c.name.common}</h1>
                    <h2>Capital: {c.capital}</h2>
                    <p>Area: {c.area}</p>
                    <p>Population: {c.population}</p>
                    <p>language: {Object.values(c.languages).map((l) => <li key= {l}>{l}</li>)}</p>
                    <img src={c.flags.png} alt='flag'/>
                    <h2>Weather in {c.capital}</h2>
                    <Weather city={c.capital}/>
            
                </div>
                
                ))}
            </div>
        )
    } else {
        return null
    }
}

export default CountryToShow
