import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-example',
  templateUrl: './if-example.component.html',
  styleUrls: ['./if-example.component.css']
})
export class IfExampleComponent implements OnInit {
  myVariable = true;
  constructor() { }

  ngOnInit() {
  }
  toggleShow(): void {
    this.myVariable = !this.myVariable;
  }
}
