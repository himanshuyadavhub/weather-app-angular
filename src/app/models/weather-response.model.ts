import { Location } from "./location.model";
import { CurrentWeather } from "./current-weather.model";
import {ForecastWeatherDay} from "./forecast-weather-day.model";
import {ForecastWeatherHour} from "./forecast-weather-hour.model";

export interface WeatherResponse {
  location: Location;
  currentWeather: CurrentWeather;
  forecastDaily: ForecastWeatherDay[];
  forecastHourly: ForecastWeatherHour[];
}