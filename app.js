const apiKey = '541bc9f4ea50a514f38cd6971dcd5823'; // replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.getElementById('weather');
      weather.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
});
