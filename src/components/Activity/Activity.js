export default function Activity({ activity }) {
  return (
    <li>
      <span>
        {activity.name} {activity.isForGoodWeather}
      </span>
      {/* <span>{activity.isForGoodWeather ? "Good weather" : "Bad weather"}</span> */}
    </li>
  );
}
