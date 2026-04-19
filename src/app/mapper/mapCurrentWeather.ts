import {CurrentWeather} from "../models/current-weather.model";

export function mapCurrentWeather (raw: any): CurrentWeather {
    return {
        temperature: raw.temp_c,
        feelsLike: raw.feels_like,
        humidity: raw.humidity,
        windSpeed: raw.wind_kph,
        windDirection: raw.wind_dir,
        condition: {
            description: raw.condition.text,
            icon: raw.condition.icon,
        }
    };
}