import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';


@NgModule({
  declarations: [
    AppComponent,
    IfExampleComponent,
    SwitchExampleComponent,
    NgStyleExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
