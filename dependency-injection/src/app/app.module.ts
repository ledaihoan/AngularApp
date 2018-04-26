import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PriceService } from './price.service';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceServiceDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
