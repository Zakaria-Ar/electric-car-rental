import { Component, Input } from '@angular/core';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css'],
})
export class RightsidebarComponent {
  @Input() carData! : Car
}
