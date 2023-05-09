export interface Renter {
  renterId: number;
  renterName: string;
  renterEmail: string;
  renterPhone: string;
  renterCity: City;
  renterAdress : string
}
export interface RenterForPost {
  renterId: number;
  renterName: string;
  renterEmail: string;
  renterPhone: string;
  renterCity: string;
  renterAdress : string
}
interface City {
  city:string,
  coordinates:Coordinate
}
interface Coordinate{
  latitude:number,
  longitude:number
}
