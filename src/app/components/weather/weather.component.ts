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
  image: any;
  description: any;

  constructor(private weatherService: WeatherService) {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    this.getDate();
    this.QueryManagement();
    setInterval(() => {
      this.QueryManagement();
    }, 3600000);
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
                  this.image = '../../assets/icons/'+this.listData['weather']['icon']+'.png';
                  this.description = this.listData['weather']['description'];
                }
              )
      );
  }

}
