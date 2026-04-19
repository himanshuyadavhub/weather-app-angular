import { ForecastWeatherDay } from "../models/forecast-weather-day.model";

export function mapDayForecast(data: any): ForecastWeatherDay {
    return {
        date: data.date,
        maxTemp: data.day.maxtemp_c,
        minTemp: data.day.mintemp_c,
        condition: {
            description: data.day.condition.text,
            icon: data.day.condition.icon,
        }
    };
}