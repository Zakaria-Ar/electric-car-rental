import { Component, EventEmitter, Output } from '@angular/core';
import { CarService } from '../services/car.service';
import { NgForm } from '@angular/forms';
import { Car, CarForPost } from '../model/car.model';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent {
  @Output() modalEvent = new EventEmitter<boolean>()
  constructor(private carService : CarService ){
  }
  close() {
    this.modalEvent.emit(false)
  }
  add(data : NgForm | unknown) {
    let d = data as CarForPost

    d.renter = {
      renterId : 0
    }
    this.carService.maxId().subscribe(
      (data)=>{
        d.renter.renterId = data
        this.carService.addCar(d)
      }
    )
    this.close()
    location.reload()
  }
}
