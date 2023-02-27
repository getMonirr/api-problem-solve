const countriesContainer = document.getElementById('country-container');
const loadCountriesData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    setCountriesData(data);
}

const setCountriesData = (data) => {
    countriesContainer.innerHTML = '';
    data.map(country => {
        displayCountriesUI(country);
    })
}


const displayCountriesUI = (country) => {

    const { name, flags, region, capital } = country;
    const lan = country?.languages
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src=" ${flags?.svg ? flags.svg : flags?.png} " /></figure>
          <div class="card-body">
            <h2 class="card-title">
              ${name?.common}
            </h2>
            <p> ${name?.official}</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Region: ${region}</div> 
              <div class="badge badge-outline">Capital city: ${capital ? capital[0] : "Capital Not Found"}</div>
              <div class="badge badge-outline">Language: ${lan ? (Object.keys(lan).map(k => lan[k])) : 'no language Found'}
              </div>
            </div>
          </div>
        </div>
    `;
    countriesContainer.appendChild(div);
    // create capital option
    const selectContainer = document.getElementById('selected-capital');
    const option = document.createElement('option');
    option.setAttribute('value', `${capital}`);
    option.innerText = `${capital}`;
    selectContainer.appendChild(option);

}

loadCountriesData();



// search by region handle
document.getElementById('search-btn').addEventListener('click', async () => {
    const selectedRegion = document.getElementById('selected-item').value;
    try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
        const data = await res.json();
        // console.log(data);
        setCountriesData(data);
    } catch (error) {
        console.log(error);
    }

})

// search by capital city
document.getElementById('search-btn-capital')
    .addEventListener('click', async () => {
        const selectedCapital = document.getElementById('selected-capital').value;
        try {
            const res = await fetch(`https://restcountries.com/v3.1/capital/${selectedCapital}`);
            const data = await res.json();
            // console.log(data[0]);
            countriesContainer.innerHTML = '';
            displayCountriesUI(data[0]);
        } catch (error) {
            console.log(error);
        }

    })

// search by language 
document.getElementById('search-btn-language')
    .addEventListener('click', async () => {
        const selectedLanguage = document.getElementById('selected-language').value;
        try {
            const res = await fetch(`https://restcountries.com/v3.1/lang/${selectedLanguage}`);
            const data = await res.json();
            // console.log(data);
            setCountriesData(data);
        } catch (error) {
            console.log(error);
        }

    })

// sorting the capital
// Get the select element and its options
const select = document.getElementById("selected-capital");
const options = Array.from(select.getElementsByTagName("option"));

// Sort the options array based on option text
options.sort((a, b) => a.textContent.localeCompare(b.textContent));

// Remove existing options from select element
select.innerHTML = "";

// Add sorted options back to select element
options.forEach(option => {
  select.appendChild(option);
});