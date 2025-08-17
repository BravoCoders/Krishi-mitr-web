async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "019fab8681fe8c95a827cddd074a17fb"; // your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    const weatherHTML = `
      <div class="weather-card">
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><b>🌡 Temperature:</b> ${data.main.temp} °C</p>
        <p><b>🌥 Condition:</b> ${data.weather[0].description}</p>
        <p><b>💧 Humidity:</b> ${data.main.humidity}%</p>
        <p><b>💨 Wind Speed:</b> ${data.wind.speed} m/s</p>
      </div>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">⚠️ ${error.message}</p>`;
  }
}
