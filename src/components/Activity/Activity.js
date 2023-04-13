export default function Activity({ activity, id, onDeleteActivity }) {
  return (
    <li>
      <span>
        {activity.name} {activity.isForGoodWeather}{" "}
      </span>
      <button type="button" onClick={() => onDeleteActivity(id)}>
        X
      </button>
      {/* <span>{activity.isForGoodWeather ? "Good weather" : "Bad weather"}</span> */}
    </li>
  );
}
