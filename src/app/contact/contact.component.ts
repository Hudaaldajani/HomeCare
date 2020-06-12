import { Component} from '@angular/core';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut()
    ]
})
export class ContactComponent{

  lat: number = 25.113108745178607;
  lng: number = 55.17563927017518;

  onChoseLocation(event){
  this.lat = event.coords.lat;
  this.lng = event.coords.lng;
  }

}
