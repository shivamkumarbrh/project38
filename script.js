const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(response)
    const data = await response.json()
    showWeather(data)
}
const showWeather = (data) => {
    console.log(data)
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City not Found</h2>`
        return;
    }
    weather.innerHTML = `
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h1>${data.name}</h1>
    <h2>${Math.round(data.main.temp)}&#8451;</h2>
    <h4>${data.weather[0].main}</h4>
</div>
    `
}
// init call
getWeather("Lucknow")
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(search.value)
    getWeather(search.value)
})