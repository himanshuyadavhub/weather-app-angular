import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { mapWeatherResponse } from '../mapper/mapWeatherResponse';



@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private readonly baseUrl = 'https://api.weatherapi.com/v1/forecast.json';
    private readonly apiKey = '158e11f5e29c4124b1b172532252708';

    constructor(private http: HttpClient) { }

    getWeatherByCity(city: string, days: number = 3): Observable<any> {
        console.log("Fetching weather for city:", city);
        const url = `${this.baseUrl}?key=${this.apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`;
        return this.http.get<any>(url).pipe(
            map(mapWeatherResponse)
        );
    }
}