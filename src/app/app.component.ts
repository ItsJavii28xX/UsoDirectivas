import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  people = [
    { name: 'Paul' },
    { name: 'John' },
    { name: 'Lucy' },
    { name: 'Nicholas' }
  ];

  
  showList = true;
  customStyle = false;

  toggleShowList() {
    this.showList = !this.showList;
  }

  toggleCustomStyle() {
    this.customStyle = !this.customStyle;
  }
}
