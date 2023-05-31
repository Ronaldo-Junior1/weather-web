import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  constructor(private weatherService: WeatherService) {}

  ngOnInit(){

  }
  cityName: string = "";

  searchCity(){
    if (this.cityName) {
      this.weatherService.getWeatherByCityName(this.cityName).subscribe(
        (data) => {
          const cityName = data.name;
          const temperature = data.main.temp;
          
          console.log("Cidade: " + cityName);
          console.log("Temperatura: " + temperature);
        },
        (error) => {
          console.log("Erro ao obter dados da API:", error);
        }
      );
    } else {
      console.log("Digite o nome da cidade antes de pesquisar.");
    }
  }
}
