import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  @Input() cars : Car[] = []
  @Output() carEvent = new EventEmitter<Car>()

  constructor(private carService: CarService) {}
  getCarFromTheChild(car:Car){
    this.carEvent.emit(car)
  }
}
