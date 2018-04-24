import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormSkuCustomValidatorComponent } from './demo-form-sku-custom-validator/demo-form-sku-custom-validator.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormSkuCustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
