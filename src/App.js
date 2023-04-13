import Form from "./components/Form/Form";
import "./App.css";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import Activity from "./components/Activity/Activity";
import FetchWeather from "./components/Fetch/FetchWeather";
function App() {
  // const isGoodWeather = false;
  const [isGoodWeather, setIsGoodWeather] = useState(false);
  const [activities, setActivities] = useLocalStorageState([], {
    defaultValue: [],
  });
  const [filter, setFilter] = useState("");
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(activities);
  }
  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather
  );
  const badWeatherActivities = activities.filter(
    (activity) => !activity.isForGoodWeather
  );
  return (
    <div className="App">
      <FetchWeather setWeather={setIsGoodWeather} />
      <ul>
        {isGoodWeather
          ? goodWeatherActivities.map((activity) => (
              <Activity key={activity.id} activity={activity} />
            ))
          : badWeatherActivities.map((activity) => (
              <Activity key={activity.id} activity={activity} />
            ))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
