import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenterService {
  apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-type', 'application/json');
  constructor(private http: HttpClient) {}
  addRenter(data: any){
    let API_URL = `${this.apiUrl}/api/v1/renters`;
    this.http.post<any>(API_URL,data).subscribe(
      ()=>{console.log("inserted ")},
      (err:HttpErrorResponse)=>{ throw new Error("error : " + err.message)}
    )
  }
  // getAllCars() {
  //   return this.http.get<Renter[]>(`${this.apiUrl}/api/v1/cars`);
  // }
  // getCarsByBrand(brand: string): Observable<Renter[]> {
  //   if(brand){
  //     console.log(`${this.apiUrl}/api/v1/cars/${brand}`);
  //     return this.http.get<Renter[]>(`${this.apiUrl}/api/v1/cars/${brand}`);
  //   }
  //   console.log(`${this.apiUrl}/api/v1/cars${brand}`);
  //   return this.http.get<Renter[]>(`${this.apiUrl}/api/v1/cars${brand}`);
  // }
  // getCarsByCity(city: string) {
  //   return this.http.get(`${this.apiUrl}/api/v1/cars/city/${city}`)
  // }
  // getCarsByPrice(priceMin: number | null, priceMax: number | null){
  //   let url: string = `${this.apiUrl}/api/v1/cars/price?priceMax=${
  //     priceMax == null ? '' : priceMax
  //   }&priceMin=${priceMin == null ? '' : priceMin}`;
  //   return this.http.get(url)
  // }
}
// {
//   renterName: "anouar",
//   renterEmail: "o@gmail.com",
//   renterPhone: "06135473",
//   renterCity: "AGADIR",
//   renterAdress : "ikhan"
// }
