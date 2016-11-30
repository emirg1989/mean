import { Component } from '@angular/core';
import { ContactComponent } from './contact.component';


@Component({
    selector: 'body-app',
    template: `
    <div class="bodyDiv">
    <main class="name-container">
    <div class = "divTitle">
    <div class="animated bounceInDown">
    <hr>
      <h1>{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
    <hr>
    </div>
    </div>
		</main>
    </div>
    `,
    styleUrls: ['app/css/BodyStyle.css']
})
export class BodyComponent {
  title= "Emir Leonel Ganimi";
  subTitle="Desarrollador de Software";

}
