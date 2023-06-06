// The MDN page for Date lists two methods to get the year of a date.
let today = new Date();

today.getYear();
today.getFullYear();

// What is the difference between the two methods and which one should you use?

// They both return the year for this date according to local time but getYear only returns an integer representing the year for the given date according to local time, minus 1900. You can't implement all dates this way so problems arise. getYear is deprecated for getFullYear() which returns the full year.

console.log(today.getYear()); // 123
console.log(today.getFullYear()); // 2023