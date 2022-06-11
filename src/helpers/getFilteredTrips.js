export function getFilteredTrips(trips, filterValues) {
  const { search, duration, level } = filterValues;
  console.log(filterValues);

  return trips.filter((item) => {
    const isNameMatch = item.title
      .toLowerCase()
      .includes(search.toString().toLowerCase());
    let isDurationMath;
    switch (duration) {
      case "< 5 days":
        isDurationMath = item.duration < 5;
        break;
      case "< 10 days":
        isDurationMath = item.duration > 5 && item.duration < 10;
        break;
      case "> 5 days":
        isDurationMath = item.duration > 10;
        break;
      default:
        isDurationMath = "duration";
    }

    const isLevelMath = item.level === level || level === "level";

    return isNameMatch && isDurationMath && isLevelMath;
  });
}
