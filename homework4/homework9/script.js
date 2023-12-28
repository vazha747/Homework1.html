  async function fetchCountryInfo() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/name/georgia');
        const data = await response.json();

        const country = data[0];

        // ინფორმაცია ქვეყანაზე
        document.getElementById('countryInfo').innerHTML = `
            <h2>${country.name.common}</h2>
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
            <p>Area: ${country.area} square kilometers</p>
            <p>Region: ${country.region}</p>
            <p>Subregion: ${country.subregion}</p>
        `;
    } catch (error) {
        console.error('Error fetching country information:', error);
        document.getElementById('countryInfo').innerHTML = '<h2>Error loading country information</h2>';
    }
}

document.addEventListener('DOMContentLoaded', fetchCountryInfo);

const country = {
    name: "georgia",
    language: "georgian",
    population: 3.9,
    area: 69700,
      capital: {
        name: "tbilisi",
        population: 1.2 ,
      },
    big_cityes:["kutaisi", "qobuleti", "rustavi"],
    unpopular_but_cool_georgian_names:["kukuti", "genodi", "ჟora", "valiko", "vefxvia", "vage", "ioska"]
}
console.log(country) 
document.write(country.name)
document.write("<br>")
document.write("unpopular but cool georgian names:")
document.write(country.unpopular_but_cool_georgian_names)
document.write("<br>")
document.write("georgias big cityes")
document.write("<br>")
country?.big_cityes?.forEach(function(big_cityes){
    document.write(country.big_cityes)
    document.write("<br>")
})

 

