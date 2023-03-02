// Función para obtener y mostrar los datos de la API
function obtenerDatosAPI() {
  // URL de la API (en este caso, usaremos la de WeatherAPI)
  const url = 'https://api.weatherapi.com/v1/current.json?key=db6baebc106f4a3fa6825341232802&q=New%20York&lang=es';

  // Obtener la información de la API utilizando fetch()
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extraer los datos que necesitamos
      const ciudad = data.location.name;
      const pais = data.location.country;
      const fecha = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      const hora = new Date(data.current.last_updated_epoch * 1000).toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });
      const temperatura = data.current.temp_c;
      const viento = data.current.wind_kph;
      const presion = data.current.pressure_mb;
      const lluvia = data.current.precip_mm;
      const uv = data.current.uv;
      const descripcion = data.current.condition.text;
      const iconCode = data.current.condition.code;
      
      // Mostrar los datos en los elementos correspondientes del HTML
      document.getElementById('city').innerHTML = ciudad;
      document.getElementById('weather-celsius').innerHTML = `${temperatura}°C`;
      document.getElementById('country').innerHTML = pais;
      //document.getElementById('fecha').innerHTML = fecha;
      document.getElementById('hour').innerHTML = hora;
      document.getElementById('wind-speed').innerHTML = `${viento} km/h`;
      document.getElementById('pressure').innerHTML = `${presion} mb`;
      const probabilidadLluvia = data.current.precip_mm / 10;
      document.getElementById('rain-chanse').innerHTML = `${probabilidadLluvia}%`;
      document.getElementById('uv-index').innerHTML = uv;
      const iconImg = document.createElement('img');
      iconImg.src = `https:${data.current.condition.icon}`;
      iconImg.alt = data.current.condition.text;
      document.getElementById('icon-weather').appendChild(iconImg);
      document.getElementById('description').innerHTML = descripcion;
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}

// Llamar a la función para obtener y mostrar los datos de la API
obtenerDatosAPI();