import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // setName("");
    // setIsForGoodWeather(false);
    const newActivity = { name, isForGoodWeather };
    onAddActivity(newActivity);
    event.target.reset();
    document.querySelector('input[type="text"]').focus();
  }
  const handleWeatherCheckboxChange = (event) => {
    setIsForGoodWeather(event.target.checked);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity</h2>
      <label>
        name of activity{" "}
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        ></input>{" "}
      </label>{" "}
      <br />
      <label>
        good weather activity{" "}
        <input
          type="checkbox"
          checked={isForGoodWeather}
          onChange={handleWeatherCheckboxChange}
        ></input>
      </label>{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
