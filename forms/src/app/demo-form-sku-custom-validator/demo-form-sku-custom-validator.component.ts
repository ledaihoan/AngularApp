import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


export function CustomSkuValidator(control: AbstractControl): { [s: string]: boolean } | null{
  if (!control.value.match(/^123/)) {
    return { invalidSku: true };
  }
  return null;
}
@Component({
  selector: 'app-demo-form-sku-custom-validator',
  templateUrl: './demo-form-sku-custom-validator.component.html',
  styleUrls: ['./demo-form-sku-custom-validator.component.css']
})
export class DemoFormSkuCustomValidatorComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, CustomSkuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe((value: string) => {
      console.log('Sku value changed to ' + value);
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('Your submitted value: ', form);
  }


}
