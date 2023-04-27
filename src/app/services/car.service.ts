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
  //add a Car
  // addCar(data: Car): Observable<Car> {
  //   let API_URL = `${this.apiUrl}/create-task`;
  //   return this.http.post(API_URL, data).pipe(catchError(this.error));
  // }
  getAllCars() {
    return this.http.get<Car[]>(`${this.apiUrl}/api/v1/cars`);
  }
  getCarsByBrand(brand: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/api/v1/cars/${brand}`);
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
