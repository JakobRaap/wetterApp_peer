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
      <label>Name of activity : </label> <br />{" "}
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
      ></input>{" "}
      <label>
        Good weather activity :{" "}
        <input
          type="checkbox"
          checked={isForGoodWeather}
          onChange={handleWeatherCheckboxChange}
        ></input>
      </label>{" "}
      <br />
      <button type="submit" className="submit__button">
        Submit
      </button>
    </form>
  );
}
