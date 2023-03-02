const API_KEY = 'db6baebc106f4a3fa6825341232802'; // Reemplaza 'YOUR_API_KEY' con tu propia API Key
const CITY = 'New York'; // Ciudad a la que se va a consultar la hora de salida del sol

// Hacer la solicitud a la API
fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${CITY}&dt=today`)
  .then(response => response.json())
  .then(data => {
    const sunrise = data.astronomy.astro.sunrise; // Extraer la hora de salida del sol de la respuesta de la API
    const sunset = data.astronomy.astro.sunset; 

    // Mostrar el resultado en la página web
    const outputElement = document.getElementById('sunrise');
    outputElement.innerHTML = `${sunrise}`;
    const outputElement2 = document.getElementById('sunset');
    outputElement2.innerHTML = `${sunset}`;
  })
  .catch(error => {
    console.error('Error al obtener la hora de salida del sol:', error);
  });
