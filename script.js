/*
  From https://stackoverflow.com/a/6117889/4982408
  For a given date, get the ISO 8601 week number
  Based on comments from https://weeknumber.net/how-to/javascript

  Algorithm is to find nearest thursday, it's year
  is the year of the week number. Then get weeks
  between that date and the first day of that year.

  Note that dates in one year can be weeks of previous
  or next year, overlap is up to 3 days.

  e.g. 2014/12/29 is Monday in week  1 of 2015
       2012/1/1   is Sunday in week 52 of 2011
*/
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

window.addEventListener('load', () => {
    const weekNumberElement = document.getElementById('week-number');
    const today = new Date();
    const weekNumber = getWeekNumber(today);
    weekNumberElement.textContent = weekNumber;
});
