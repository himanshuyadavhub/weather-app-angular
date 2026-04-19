export interface ForecastWeatherDay {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition:{
    description: string;
    icon: string;
  };
}