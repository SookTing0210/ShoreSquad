// ShoreSquad App JS

document.addEventListener('DOMContentLoaded', () => {
  // Accessibility: Focus on main content
  document.querySelector('main').setAttribute('tabindex', '-1');

  // Event: Create Cleanup Event (placeholder)
  document.getElementById('createEventBtn').addEventListener('click', () => {
    alert('Event creation coming soon!');
  });

  // Weather API (NEA 24-hour forecast)
  const weatherInfo = document.getElementById('weatherInfo');
  const weatherEmoji = document.getElementById('weatherEmoji');
  async function loadWeather() {
    weatherInfo.innerHTML = '<span class="spinner" aria-label="Loading weather"></span>';
    try {
      const response = await fetch('https://api.data.gov.sg/v1/environment/24-hour-weather-forecast');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const forecast = data.items[0]?.general?.forecast || 'No forecast available';
      const tempLow = data.items[0]?.general?.temperature?.low;
      const tempHigh = data.items[0]?.general?.temperature?.high;
      // Set emoji based on forecast
      let emoji = '☀️';
      if (/rain|showers|thunder/i.test(forecast)) emoji = '🌧️';
      else if (/cloud/i.test(forecast)) emoji = '⛅';
      weatherEmoji.textContent = emoji;
      weatherInfo.innerHTML = `
        <strong>Forecast:</strong> ${forecast}<br>
        <strong>Temperature:</strong> ${tempLow}&deg;C – ${tempHigh}&deg;C
      `;
    } catch (err) {
      weatherInfo.innerHTML = '<span class="error-message">Weather data unavailable. Please try again later.</span>';
      weatherEmoji.textContent = '❓';
    }
  }
  loadWeather();

  // Map (placeholder)
  const mapContainer = document.getElementById('mapContainer');
  mapContainer.textContent = 'Map loading... (interactive map coming soon)';

  // Events (placeholder)
  const eventList = document.getElementById('eventList');
  eventList.innerHTML = '<li>World Oceans Day Cleanup - June 8, 10am, Sandy Beach</li>';
});
