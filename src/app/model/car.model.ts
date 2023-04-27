import { Renter } from './renter.model';

export interface Car {
  carId: number;
  carBrand: string;
  carModel: string;
  yearOfManufac: Date;
  pricePerDay: number;
  distanceDriven: number;
  maxSpeed: number;
  carColor: string;
  renter: Renter;
}
