import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent {
  @Input() carData! : Car
  @Output() carIdEvent = new EventEmitter<Car>()
  onClick(){
    this.carIdEvent.emit(this.carData)
  }
}
