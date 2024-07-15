const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweather.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=4a3df76f17c5b256e1cd8ba9731587ee';


async function apiFetch(){
    try {
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);//testing only 
            displayResults(data); // uncomment whern ready
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute ('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather.description); 
    captionDesck.textContent = `${desc}`;

}


