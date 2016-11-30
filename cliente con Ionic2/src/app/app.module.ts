import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { PublicationsPage } from '../pages/publications/publications';
import { PublicationsBySeccionPage } from '../pages/publicationsbyseccion/publicationsbyseccion';
import { CreatePublicationsPage } from '../pages/create-publications/create-publications';
import { ExtraPage } from '../pages/extra/extra';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MenuPage,
    PublicationsPage,
    PublicationsBySeccionPage,
    CreatePublicationsPage,
    ExtraPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MenuPage,
    PublicationsPage,
    PublicationsBySeccionPage,
    CreatePublicationsPage,
    ExtraPage
  ],
  providers: []
})
export class AppModule {}
