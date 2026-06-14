function weatherIcon(code: number): string {
  if (code === 0) return "☀️";
  if (code <= 2) return "⛅";
  if (code <= 3) return "☁️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "❄️";
  if (code <= 82) return "🌦️";
  return "⛈️";
}

async function getWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=34.0259&longitude=-118.7798&current=temperature_2m,weather_code&temperature_unit=fahrenheit",
      { next: { revalidate: 1800 } }
    );
    const data = await res.json();
    return {
      temp: Math.round(data.current.temperature_2m),
      icon: weatherIcon(data.current.weather_code),
    };
  } catch {
    return null;
  }
}

export default async function Footer() {
  const weather = await getWeather();
  const printDate = new Date().toLocaleDateString();

  return (
    <div className="flex flex-row justify-between text-sm text-gray-500 w-full mt-7 pt-4 border-t border-gray-200">
      <span>&copy; All Rights Reserved 2026</span>
      {weather && (
        <span title="Malibu, CA">{weather.icon} {weather.temp}°F</span>
      )}
      <span>{printDate}</span>
    </div>
  );
}
