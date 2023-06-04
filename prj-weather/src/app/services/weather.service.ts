import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private API_KEY = 'efcc78a8cc4316b2d8dee2a3f8d7aba6'
  private API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='

  constructor(private http: HttpClient) {  }

    getWeatherByCityName(cityName: string): Observable<any>{
      return this.http.get(`${this.API_URL}${cityName}&appid=${this.API_KEY}&lang=pt_br&units=metric`)
    }
}
