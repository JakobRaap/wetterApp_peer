import Form from "./components/Form/Form";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import { act } from "react-dom/test-utils";
import Activity from "./components/Activity/Activity";
function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(activities);
  }
  return (
    <div className="App">
      <ul>
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
