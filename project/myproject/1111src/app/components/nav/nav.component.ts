import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

constructor(public s:MyServiceService){

}
disConnected(){
  this.s.isThereUser=false
}
}
