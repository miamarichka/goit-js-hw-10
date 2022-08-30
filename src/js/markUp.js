export function countriesMarkUp(countries){
    return countries.map(
        ({ name, flags }) =>
          `<li style="list-style: none;font-size: 30px; margin-bottom: 20px">
          <img src="${flags.png}" alt="${name.official}" width="100" height="50" style="margin-right: 30px;">
          <strong>${name.official}</strong>
          </li>`,)
    .join('');
};


export function oneCountryMarkUp(country){
    return country.map(
        ({ name, capital, population, flags, languages }) =>
          `<h1>
          <img src="${flags.png}" alt="${name.official}" width="80" height="40" style="margin-right: 30px">${name.official}
          </h1>
          <p style="font-size: 20px;"> <strong > Capital:</strong> ${capital}</p>
          <p style="font-size: 20px;"> <strong > Population:</strong> ${population}</p>
          <p style="font-size: 20px;"> <strong > Languages:</strong> ${Object.values(languages,).join(', ')}</p>`,
      );
    };