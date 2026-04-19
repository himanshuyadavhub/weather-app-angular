import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather-api';
import { WeatherResponse } from '../models/weather-response.model';

@Component({
  selector: 'app-weather-dashboard',
  imports: [],
  templateUrl: './weather-dashboard.html',
  styleUrls: ['./weather-dashboard.css'],
  standalone: true
})
export class WeatherDashboard {

  city: string = 'Noida';
  weatherData: WeatherResponse | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    if (!this.city.trim()) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.weatherData  = null;

    this.weatherService.getWeatherByCity(this.city, 3).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log("current",this.weatherData?.currentWeather);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'City not found. Please try again.';
        this.isLoading = false;
      }
    });
  }
}