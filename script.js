/*async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "019fab8681fe8c95a827cddd074a17fb"; // your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resultDiv = document.getElementById("weatherResult");
  const errorDiv = document.getElementById("errorMsg");

  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  if (!city) {
    errorDiv.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  try {
    console.log("Fetching:", url); // 🔎 check API request
    const response = await fetch(url);
    console.log("Response status:", response.status); // 🔎 check response code

    if (!response.ok) {
      throw new Error("City not found (status " + response.status + ")");
    }

    const data = await response.json();
    console.log("API Data:", data); // 🔎 log full API response

    const weatherHTML = `
      <div class="weather-card">
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><b>🌡 Temperature:</b> ${data.main.temp} °C</p>
        <p><b>🌥 Condition:</b> ${data.weather[0].description}</p>
        <p><b>💧 Humidity:</b> ${data.main.humidity}%</p>
        <p><b>💨 Wind Speed:</b> ${data.wind.speed} m/s</p>
      </div>
    `;
    resultDiv.innerHTML = weatherHTML;

  } catch (error) {
    console.error("Weather API Error:", error); // 🔎 log error details
    errorDiv.innerHTML = "⚠️ Error: " + error.message;
  }
}
*/
