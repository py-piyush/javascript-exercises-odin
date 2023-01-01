const convertToCelsius = function(fah_temp) {
  return Math.round((fah_temp - 32)*(5/9)*10)/10;
};

const convertToFahrenheit = function(cel_temp) {
  return Math.round((cel_temp*9/5 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
