import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';
import { UserService } from './user.service';
import { UserDemoComponent } from './user-demo/user-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceServiceDemoComponent,
    UserDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [UserService, { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com/posts/1' }]
})
export class AppModule { }
