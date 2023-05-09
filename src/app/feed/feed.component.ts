import { Component } from '@angular/core';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent{
  selectedCar! : Car
  searchedCars! : Car[]
  getCar(car:Car){
    this.selectedCar=car
  }
  getCarsByBrand(cars:Car[]){
    this.searchedCars = cars
  }
}
