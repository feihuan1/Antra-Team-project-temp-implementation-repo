import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserinfoComponent } from "./userinfo/userinfo.component";

@Component({
  selector: 'app-root',
  imports: [UserinfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecom';
}
