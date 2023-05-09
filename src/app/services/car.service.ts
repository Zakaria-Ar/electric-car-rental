import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Car } from '../model/car.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-type', 'application/json');
  constructor(private http: HttpClient) {}
  addCar(data: any){
    let API_URL = `${this.apiUrl}/api/v1/cars`;
    this.http.post<any>(API_URL,data).subscribe(
      ()=>{console.log("inserted ")},
      (err:HttpErrorResponse)=>{ throw new Error("error : " + err.message)}
    )
  }
  maxId(){
    return this.http.get<number>(`${this.apiUrl}/api/v1/renters/lastid`);
  }
  getAllCars() {
    return this.http.get<Car[]>(`${this.apiUrl}/api/v1/cars`);
  }
  getCarsByBrand(brand: string): Observable<Car[]> {
    if(brand){
      console.log(`${this.apiUrl}/api/v1/cars/${brand}`);
      return this.http.get<Car[]>(`${this.apiUrl}/api/v1/cars/${brand}`);
    }
    console.log(`${this.apiUrl}/api/v1/cars${brand}`);
    return this.http.get<Car[]>(`${this.apiUrl}/api/v1/cars${brand}`);
  }
  getCarsByCity(city: string) {
    return this.http.get(`${this.apiUrl}/api/v1/cars/city/${city}`)
  }
  getCarsByPrice(priceMin: number | null, priceMax: number | null){
    let url: string = `${this.apiUrl}/api/v1/cars/price?priceMax=${
      priceMax == null ? '' : priceMax
    }&priceMin=${priceMin == null ? '' : priceMin}`;
    return this.http.get(url)
  }
}
