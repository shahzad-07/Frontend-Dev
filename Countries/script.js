const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-container input");
const themeChanger = document.querySelector(".theme-changer");
let allCountriesData;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    allCountriesData = data;
    data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `/country.html?name=${country.name.common}`;

      countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.common} flag" />
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>
        `;

      countriesContainer.append(countryCard);
    });
  });

filterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then((data) => {
      countriesContainer.innerHTML = "";

      data.forEach((country) => {
        const countryCard = document.createElement("a");
        countryCard.classList.add("country-card");
        countryCard.href = `/country.html?name=${country.name.common}`;

        countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.common} flag" />
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>
        `;

        countriesContainer.append(countryCard);
      });
    });
});

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  const filteredCountries = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue)
  );

  countriesContainer.innerHTML = "";

  filteredCountries.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/country.html?name=${country.name.common}`;

    countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.common} flag" />
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>
        `;

    countriesContainer.append(countryCard);
  });
});

themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
