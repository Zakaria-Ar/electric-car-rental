import { Component } from '@angular/core';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent {
  accessType:string = 'signup'
  public toggleAccess(){
    if(this.accessType == 'signup') this.accessType = 'login'
    else if(this.accessType == 'login') this.accessType = 'signup'
  }
}
