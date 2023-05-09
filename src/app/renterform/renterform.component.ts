import { Component, EventEmitter, Output } from '@angular/core';
import { RenterService } from '../services/renter.service';
import { RenterForPost } from '../model/renter.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-renterform',
  templateUrl: './renterform.component.html',
  styleUrls: ['./renterform.component.css']
})
export class RenterformComponent {
  @Output() modalEvent = new EventEmitter<boolean>()
  @Output() modalType = new EventEmitter<string>()
  errorMsg ! : string
  constructor(private renterService : RenterService ){
  }

  close() {
    this.modalEvent.emit(false)
  }
  next(data : NgForm | unknown) {
    let d = data as RenterForPost
    d.renterCity = d.renterCity.toUpperCase()
    try{
      this.renterService.addRenter(data)
      this.modalType.emit('car')
    }catch(err){
      console.log("Can't insert given renter !");
    }
  }

}
