async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "https://wttr.in"; // using wttr.in free API (no key needed)

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    // fetch weather in JSON from wttr.in
    const response = await fetch(`${apiKey}/${city}?format=j1`);
    const data = await response.json();

    const current = data.current_condition[0];
    const weatherHTML = `
      <p><b>City:</b> ${city}</p>
      <p><b>Temperature:</b> ${current.temp_C} °C</p>
      <p><b>Weather:</b> ${current.weatherDesc[0].value}</p>
      <p><b>Humidity:</b> ${current.humidity}%</p>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching weather data.";
  }
}
