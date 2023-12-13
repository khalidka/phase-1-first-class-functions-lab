// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const driversArray = ["Antonia", "Nuru", "Amari", "Mo"];
const result = returnFirstTwoDrivers(driversArray);
console.log(result);

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const lastTwoDriversArray = ["Antonia", "Nuru", "Amari", "Mo"];
const lastTwoDriversResult = returnLastTwoDrivers(lastTwoDriversArray);
console.log(lastTwoDriversResult);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selectingDrivers) {
  return selectingDrivers(drivers);
};
const firstTwoDrivers = selectDifferentDrivers(
  driversArray,
  returnFirstTwoDrivers
);
console.log(firstTwoDrivers);
const lastTwoDrivers = selectDifferentDrivers(
  driversArray,
  returnLastTwoDrivers
);
console.log(lastTwoDrivers);
