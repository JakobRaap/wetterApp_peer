import { useEffect, useState } from "react";

export default function FetchWeather({ setWeather }) {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    // let timerId;
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

    const timerId = setInterval(() => {
      getData();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
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
          <p>
            {weatherData.isGoodWeather
              ? "The Weather is awesome!! Go outside and : "
              : "Bad Weather outside! here is what you can do :"}
          </p>
        </div>
      )}
    </div>
  );
}
