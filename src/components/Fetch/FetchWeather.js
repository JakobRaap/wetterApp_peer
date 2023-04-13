import { useEffect, useState } from "react";

export default function FetchWwather() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    async function fetch() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeatherData(data);
    }
  }, []);
  fetch();
  return <h1>{weatherData}</h1>;
}
