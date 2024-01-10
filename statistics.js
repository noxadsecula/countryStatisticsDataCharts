import countries_data from './countries_data.js';

const popButton = document.querySelector('#population')
const langButton = document.querySelector('#language')

popButton.addEventListener('click', () => {
    const sortedCountriesPop = countries_data.sort((a,b) => {return b.population - a.population})
    const slicedCountriesPop = sortedCountriesPop.slice(0,10)
    const wrapperDatas = document.querySelector('.wrapperDatas')
    const infoData = document.querySelector('p')
    infoData.innerText = ''
    infoData.innerText = '10 Most Crowded Countries'
    wrapperDatas.innerHTML = ''
    

    slicedCountriesPop.forEach(createCountryInfoBar);

})




langButton.addEventListener('click', () => {
    const wrapperDatas = document.querySelector('.wrapperDatas')
    const infoData = document.querySelector('p')

    infoData.innerText = ''
    infoData.innerText = '10 Most Spoken Languages'
    wrapperDatas.innerHTML = ''

    const languageMap = countries_data.flatMap(country => country.languages)
    const numberLang = languageMap.reduce((acc,language) => {
        acc[language] = (acc[language] || 0) + 1;
        return acc;
    },{})

    const languageArray = Object.entries(numberLang).map(([language, count]) => ({language, count}))
    const sortedArray = languageArray.sort((a,b) =>  b.count - a.count
    )

    sortedArray.forEach(createLanguageInfoBar)


    
})


function createCountryInfoBar(country) {
    const countryList = document.querySelector('.wrapperDatas');

    const infoBar = document.createElement('div');
    infoBar.classList.add('info-bar');

    const countryName = document.createElement('div');
    countryName.classList.add('country-name');
    countryName.textContent = country.name;

    const populationBar = document.createElement('div');
    populationBar.classList.add('population-bar');

    const populationFill = document.createElement('div');
    populationFill.classList.add('population-fill');
    populationFill.style.width = `${(country.population / 1000000000) * 100}%`; // Adjust the scale as needed

    populationBar.appendChild(populationFill);

    const populationData = document.createElement('div');
    populationData.classList.add('population-data');
    const formattedNumber = country.population.toLocaleString();
    populationData.textContent = formattedNumber;

    infoBar.appendChild(countryName);
    infoBar.appendChild(populationBar);
    infoBar.appendChild(populationData);

    

    countryList.appendChild(infoBar);
}


function createLanguageInfoBar(country) {
    const languageList = document.querySelector('.wrapperDatas')

    const infoBar = document.createElement('div');
    infoBar.classList.add('info-bar')
    
    const countryName = document.createElement('div')
    countryName.classList.add('country-name')
    countryName.textContent = country.language

    const langBar = document.createElement('div')
    langBar.classList.add('population-bar')

    const langBarFill = document.createElement('div')
    langBarFill.classList.add('population-fill')
    langBarFill.style.width = (`${(country.count/2) }%`)

    langBar.appendChild(langBarFill)

    const countData = document.createElement('div')
    countData.classList.add('population-data');
    countData.textContent = country.count

    infoBar.appendChild(countryName)
    infoBar.appendChild(langBar)
    infoBar.appendChild(countData)

    languageList.appendChild(infoBar)

}