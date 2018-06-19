const average = (series) => series.reduce((sum, current) => sum += current.visits, 0) / series.length;
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const getAverage = (series, byWeekDay) => {
  if (byWeekDay) {
    return weekdays.reduce((result, dayName, dayIdx) => {
      result[dayName] = { averageVisits: average(series.filter(value => value.date.getDay() === dayIdx)) };
      return result;
    }, {});
  }
  else {
    return { averageVisits: average(series) };
  }
}

module.exports = getAverage;
