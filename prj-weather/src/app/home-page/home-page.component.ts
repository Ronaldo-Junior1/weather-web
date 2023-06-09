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
  errorMessage: string = "";
  weatherIconUrl: string = "";
  constructor(private weatherService: WeatherService) {}

  searchCity() {
    if (this.cityName) {
      this.weatherService.getWeatherByCityName(this.cityName).subscribe(
        (data) => {
          this.weatherData = data;
          console.log(this.weatherData);
          this.errorMessage = "";
        
          const iconCode = this.weatherData.weather[0].icon;
          this.weatherIconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        },
        (error) => {
          console.log("Nome da cidade invalido", error);
          this.errorMessage = "Nome da cidade invalido";
          this.weatherIconUrl="";
        }
      );
    } else {
      console.log("Digite o nome da cidade antes de pesquisar.");
      this.errorMessage = "Digite o nome da cidade antes de pesquisar";
      this.weatherIconUrl="";
    }
  }

  roundTemperature(temperature: number): number {
    return Math.round(temperature);
  }
}
