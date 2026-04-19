import { WeatherResponse } from '../models/weather-response.model';
import { mapLocation } from './mapLocation';
import { mapCurrentWeather } from './mapCurrentWeather';
import { mapDayForecast } from './mapDayForecast';
import { mapHourForecast } from "./mapHourForecast";

export function mapWeatherResponse(res: any): WeatherResponse {
    const now= Date.now();
    return {
        location: mapLocation(res.location),
        currentWeather: mapCurrentWeather(res.current),
        forecastDaily: res.forecast.forecastday.map(mapDayForecast),
        forecastHourly: res.forecast.forecastday
            .flatMap((day: any) => day.hour)
            .filter((hour: any) => new Date(hour.time).getTime() >= now)
            .slice(0, 24)
            .map(mapHourForecast)
    };
}