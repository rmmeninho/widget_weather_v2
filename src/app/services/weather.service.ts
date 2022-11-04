import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  user_location: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio Http: ');
  }

  getUserLocalization = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (args) => {
          this.user_location = [args.coords.longitude, args.coords.latitude];
          resolve(this.user_location);
        },
        (err) => {
          console.log(err);
          reject();
        }
      );
    });
  }


  getWeather = (): Observable<any> =>{
    let toret = '../../assets/json/tiempo_vigo.json';
    //let toret = 'https://jsonplaceholder.typicode.com/posts';
    console.log(toret);
    return this.http.get(toret);
  }


}
