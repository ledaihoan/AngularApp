import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-custom-validator',
  templateUrl: './demo-form-sku-custom-validator.component.html',
  styleUrls: ['./demo-form-sku-custom-validator.component.css']
})
export class DemoFormSkuCustomValidatorComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, function(control: AbstractControl) {
        if (!control.value.match(/^123/)) {
          return {invalidSku: true};
        }
        return null;
      }])]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('Your submitted value: ', form);
  }


}
