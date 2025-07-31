import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MynavComponent } from './components/mynav/mynav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MynavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myp';
}
