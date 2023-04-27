import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  cars : Car[] = []
  @Output() carEvent = new EventEmitter<Car>()

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(
      (data : Car[])=>{
        data.map(obj=>{this.cars.push(obj)})
      }
    )
  }
  getCarFromTheChild(car:Car){
    this.carEvent.emit(car)
  }
}
