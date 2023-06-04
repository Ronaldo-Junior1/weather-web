import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  weatherData: any;
  cityName: string = "";
  constructor(private weatherService: WeatherService) {}

  searchCity() {
    if (this.cityName) {
      this.weatherService.getWeatherByCityName(this.cityName).subscribe(
        (data) => {
          this.weatherData = data;
          console.log(this.weatherData);
        },
        (error) => {
          console.log("Erro ao obter dados da API:", error);
        }
      );
    } else {
      console.log("Digite o nome da cidade antes de pesquisar.");
    }
  }

  roundTemperature(temperature: number): number {
    return Math.round(temperature);
  }
}
