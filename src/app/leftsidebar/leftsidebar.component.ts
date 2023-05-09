import { Component } from '@angular/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css'],
})
export class LeftsidebarComponent {
  component : string
  modal : boolean
  constructor(){
    this.modal = false
    this.component = 'renter'
  }
  showModal(){
    this.modal = !this.modal
  }
  changeModal() {
    this.component = 'car'
  }
}
