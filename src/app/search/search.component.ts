import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  constructor(private carService: CarService) {}
  cars : Car[] = []
  @Output() carSearchEvent = new EventEmitter<Car[]>()

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(
      (data : Car[])=>{
        data.map(obj=>{this.cars.push(obj)})
      }
    )
    this.carSearchEvent.emit(this.cars)
  }

  search(city : any) {
    this.cars = []
    this.carService.getCarsByBrand(city.target.value).subscribe(
      (data : Car[])=>{
        data.map(obj=>{this.cars.push(obj)})
      }
    )
    this.carSearchEvent.emit(this.cars)
  }
}
