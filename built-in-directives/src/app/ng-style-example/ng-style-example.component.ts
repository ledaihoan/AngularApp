import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {
  color = 'red';
  fontSize = '14px';
  constructor() { }

  ngOnInit() {
  }

  applyStyle(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize + 'px';
  }
}
