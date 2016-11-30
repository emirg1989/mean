import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { BodyComponent }  from './body.component';
import { ContactComponent } from './contact.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, BodyComponent, ContactComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
