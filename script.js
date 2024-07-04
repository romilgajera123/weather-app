const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '18ae74f263mshe1555e104b735a8p16964djsn1d7bd0f48b5f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function getWeather(city) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json();
        console.log(data);

        // Update the DOM elements with the fetched data
        document.getElementById('h4title').innerText = city.toUpperCase();
        document.getElementById('temp').innerText = data.temp + '°C';
        document.getElementById('feels_like').innerText = data.feels_like + '°C';
        document.getElementById('min_temp').innerText = data.min_temp + '°C';
        document.getElementById('max_temp').innerText = data.max_temp + '°C';
        document.getElementById('humidity').innerText = data.humidity + '%';
        document.getElementById('wind_speed').innerText = data.wind_speed + ' m/s';
    } catch (error) {
        console.error(error);
    }
}
getWeather("Vadodara");
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const city = document.getElementById('city').value;
    getWeather(city);
});


async function getWeatherAnand(city) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json();
        console.log(data);

        document.getElementById('anand_temp').innerText = data.temp + '°C';
        document.getElementById('anand_feels_like').innerText = data.feels_like + '°C';
        document.getElementById('anand_min_temp').innerText = data.min_temp + '°C';
        document.getElementById('anand_max_temp').innerText = data.max_temp + '°C';
    } catch (error) {
        console.error(error);
    }
}
getWeatherAnand("Anand");

async function getWeatherRajkot(city) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json();
        console.log(data);

        document.getElementById('rajkot_temp').innerText = data.temp + '°C';
        document.getElementById('rajkot_feels_like').innerText = data.feels_like + '°C';
        document.getElementById('rajkot_min_temp').innerText = data.min_temp + '°C';
        document.getElementById('rajkot_max_temp').innerText = data.max_temp + '°C';
    } catch (error) {
        console.error(error);
    }
}
getWeatherRajkot("Rajkot");

async function getWeatherAhmedabad(city) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json();
        console.log(data);

        document.getElementById('ahmedabad_temp').innerText = data.temp + '°C';
        document.getElementById('ahemdabad_feels_like').innerText = data.feels_like + '°C';
        document.getElementById('ahemdabad_min_temp').innerText = data.min_temp + '°C';
        document.getElementById('ahemdabad_max_temp').innerText = data.max_temp + '°C';
    } catch (error) {
        console.error(error);
    }
}
getWeatherAhmedabad("Ahmedabad");

async function getWeatherBhavnagar(city) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json();
        console.log(data);

        document.getElementById('bhavnagar_temp').innerText = data.temp + '°C';
        document.getElementById('bhavnagar_feels_like').innerText = data.feels_like + '°C';
        document.getElementById('bhavnagar_min_temp').innerText = data.min_temp + '°C';
        document.getElementById('bhavnagar_max_temp').innerText = data.max_temp + '°C';
    } catch (error) {
        console.error(error);
    }
}
getWeatherBhavnagar("bhavnagar");

async function getWeatherGandhinagar(city) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json();
        console.log(data);

        document.getElementById('gandhinagar_temp').innerText = data.temp + '°C';
        document.getElementById('gandhinagar_feels_like').innerText = data.feels_like + '°C';
        document.getElementById('gandhinagar_min_temp').innerText = data.min_temp + '°C';
        document.getElementById('gandhinagar_max_temp').innerText = data.max_temp + '°C';
    } catch (error) {
        console.error(error);
    }
}
getWeatherGandhinagar("gandhinagar");

async function getWeatherSurat(city) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json();
        console.log(data);

        document.getElementById('surat_temp').innerText = data.temp + '°C';
        document.getElementById('surat_feels_like').innerText = data.feels_like + '°C';
        document.getElementById('surat_min_temp').innerText = data.min_temp + '°C';
        document.getElementById('surat_max_temp').innerText = data.max_temp + '°C';
    } catch (error) {
        console.error(error);
    }
}
getWeatherSurat("surat");