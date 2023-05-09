import { Renter } from './renter.model';

export interface Car {
  carId: number;
  carBrand: string;
  carModel: string;
  yearOfManufac: string;
  pricePerDay: number;
  distanceDriven: number;
  maxSpeed: number;
  carColor: string;
  renter: Renter;
}

export interface CarForPost {
  carId: number;
  carBrand: string;
  carColor: string;
  carModel: string;
  distanceDriven: number;
  maxSpeed: number;
  pricePerDay: number;
  yearOfManufac: string;
  renter: RenterId;
}
interface RenterId{
  renterId : number
}
