import { useEffect, useState } from "react";

export default function FetchWeather({ setWeather }) {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
      setWeather(data.isGoodWeather);
    }
    getData();
  }, [setWeather]);
  return (
    <div>
      {weatherData === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>
            {weatherData.condition} {weatherData.temperature}°C
          </h1>
          <p>{weatherData.description}</p>
        </div>
      )}
    </div>
  );
}
