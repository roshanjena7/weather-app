function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'b4cf9b8518614f8cbe7192846251509';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('tempC').innerText = `${data.current.temp_c}°C`;
            document.getElementById('weatherCondition').innerText = data.current.condition.text;
            document.getElementById('cityName').innerText = `${data.location.name}, ${data.location.country}`;
            document.getElementById('humidity').innerText = `${data.current.humidity}%`;
            document.getElementById('wind').innerText = `${data.current.wind_kph} kph`;
            document.getElementById('feelsLike').innerText = `${data.current.feelslike_c}°C`;
            document.getElementById('weatherIcon').src = `https:${data.current.condition.icon}`;
        })
        .catch(err => alert('City not found! Please try again.'));
}



