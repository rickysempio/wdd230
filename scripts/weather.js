const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


const myKey = "4a3df76f17c5b256e1cd8ba9731587ee"
const myLat = "14.28416"
const myLong = "121.08876"


const myURL =`//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


async function apiFetch(){
    try {
        const response = await fetch (myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);//testing only 
            displayResults(data); // uncomment whern ready
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data){
    console.log('hello');
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute('alt', data.weather.description);
}


apiFetch();