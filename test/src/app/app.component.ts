import { Component } from '@angular/core';
import { BtnComponent } from "./btn/btn.component";
import { Btn3Component } from "./btn-3/btn-3.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,BtnComponent, Btn3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
