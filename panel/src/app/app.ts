import { Component } from '@angular/core'; 
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected logo = "assets/logo.png";
  protected dis = true;
    ngOnInit(): void {
    initFlowbite();
  }
}
