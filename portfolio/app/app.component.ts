import { Component } from '@angular/core';
import { BodyComponent } from './body.component';


@Component({
    selector: 'my-app',
    template: `
      <nav>
        <div class="emirDiv">
          <a class="aEmir" routerLink="/index">{{ logo }}</a>
        </div>
        <div class="menuDiv">
          <a class="aMenu" routerLink="/index">Home</a>
          <a class="aMenu" routerLink="/inde2">Portfolio</a>
          <a class="aMenu" routerLink="/index3">About</a>
          <a class="aMenu" routerLink="/contact">Contact</a>
        </div>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['app/css/AppStyle.css']
})

export class AppComponent {
  logo="<Emir/>";
}
