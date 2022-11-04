import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  today: any;
  listData: any;
  temperature: any;
  city: string = "";

  constructor(private weatherService: WeatherService) {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    this.getDate();
    this.QueryManagement();
  }

  getDate = (): void =>{
    console.log('El componente se ha inizializado');
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  QueryManagement = () => {
    this.weatherService.getUserLocalization().
      then(
        () => this.weatherService.getWeather().subscribe(
                datos => {
                  this.listData = datos.data[0];
                  this.temperature = this.listData['temp'];
                  this.city = this.listData['city_name'];
                }
              )
      );
  }

}
