import {ForecastWeatherHour} from "../models/forecast-weather-hour.model";

export function mapHourForecast(hourData: any): ForecastWeatherHour {
  return {
    time: hourData.time,
    temperature: hourData.temp_c,
    condition: {
      description: hourData.condition.text,
      icon: hourData.condition.icon,
    }
  };
}