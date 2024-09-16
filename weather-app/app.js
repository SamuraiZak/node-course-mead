const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

let location = process.argv[2];
console.log(process.argv);
console.log(process.argv[2]);
if (!location) {
  return console.log("please input a proper string");
}

geocode(location, (error, data) => {
  if (error) {
    return console.log(error);
  }

  let location = data.location;

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(
      `The weather in ${location} is currently ${forecastData.condition}, with a temperature of ${forecastData.temp_c}C, but it feels like it is ${forecastData.feelslike_c}C. (Last updated at ${forecastData.last_updated})`
    );
  });
});
