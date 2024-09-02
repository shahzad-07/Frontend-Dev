const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const borderCountries = document.querySelector(".border-countries");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;

    const countryBlock = document.querySelector(".details-text");

    const topLevelDomain = country.tld ? country.tld.join(", ") : "N/A";
    const subRegion = country.subregion ? country.subregion : "N/A";
    const nativeAll = country.name.nativeName
      ? Object.values(country.name.nativeName)
          .map((n) => `${n.official}`)
          .join(", ")
      : `${country.name.common}`;
    const currencies = country.currencies
      ? Object.values(country.currencies)
          .map((c) => c.name)
          .join(", ")
      : "N/A";
    const languages = country.languages
      ? Object.values(country.languages).join(", ")
      : "N/A";

    countryBlock.innerHTML = `
        <p><b>Native Name: </b>${nativeAll}</p>
        <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Sub Region: </b>${subRegion}</p>
        <p><b>Capital: </b>${country.capital?.[0] || "N/A"}</p>
        <p><b>Top Level Domain: </b>${topLevelDomain}</p>
        <p><b>Currencies: </b>${currencies}</p>
        <p><b>Languages: </b>${languages}</p>
      `;

    if (country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            const borderCountryTag = document.createElement("a");
            borderCountryTag.innerText = borderCountry.name.common;
            borderCountryTag.href = `country.html?name=${borderCountry.name.common}`;
            borderCountries.append(borderCountryTag);
          });
      });
    } else {
      borderCountries.innerHTML = `
        <b>Border Countries: </b>${"N/A"}`;
    }
  });
