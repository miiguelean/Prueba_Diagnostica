const forecastContainer = document.querySelector(".forecast-container");

// crear un objeto Date para la hora actual
const now = new Date();

// agregar 4 horas a la hora actual
const later = new Date(now.getTime() + 4 * 60 * 60 * 1000);

// formatear la hora resultante como una cadena legible para el usuario
const laterTimeString = later.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// construir la URL de la API con la hora de inicio y hacer la solicitud
const apiKey = "db6baebc106f4a3fa6825341232802";
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=New York&days=1&aqi=no&alerts=no&dt=${later.getTime() / 1000}`;
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const hourlyForecast = data.forecast.forecastday[0].hour;

    for (let i = 0; i < 4; i++) {
      const forecastHour = hourlyForecast[i];
      const forecastHourTime = forecastHour.time;
      const forecastHourRainChance = forecastHour.chance_of_rain;

      const forecastHourElement = document.createElement("div");
      forecastHourElement.classList.add("forecast-hour");

      const forecastTimeElement = document.createElement("span");
      forecastTimeElement.classList.add("forecast-time");
      forecastTimeElement.textContent = forecastHourTime;
      forecastHourElement.appendChild(forecastTimeElement);

      const forecastPillElement = document.createElement("div");
      forecastPillElement.classList.add("forecast-pill");
      forecastPillElement.style.width = forecastHourRainChance + "%";
      forecastHourElement.appendChild(forecastPillElement);

      const forecastPercentageElement = document.createElement("span");
      forecastPercentageElement.classList.add("forecast-percentage");
      forecastPercentageElement.textContent = forecastHourRainChance + "%";
      forecastHourElement.appendChild(forecastPercentageElement);

      forecastContainer.appendChild(forecastHourElement);
    }
  })
  .catch(error => console.log(error));
