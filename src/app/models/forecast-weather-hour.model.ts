export interface ForecastWeatherHour {
  time: string;
  temperature: number;
  condition:{
    description: string;
    icon: string;
  };
}