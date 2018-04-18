import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  templateUrl: './switch-example.component.html',
  styleUrls: ['./switch-example.component.css']
})
export class SwitchExampleComponent implements OnInit {
  x: number;
  constructor() {
    this.x = 0;
  }

  ngOnInit() {
  }

  toggleCase(): void {
    this.x = Math.ceil(Math.random() * 4);
  }
}
