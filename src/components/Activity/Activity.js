export default function Activity({ activity }) {
  return (
    <li>
      {activity.name} {activity.isForGoodWeather}
    </li>
  );
}
