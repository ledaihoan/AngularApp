import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-builder',
  templateUrl: './demo-form-sku-builder.component.html',
  styleUrls: ['./demo-form-sku-builder.component.css']
})
export class DemoFormSkuBuilderComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('Your submitted value: ', form);
  }
}
