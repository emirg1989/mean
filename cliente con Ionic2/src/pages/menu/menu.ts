import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { PublicationsPage } from '../publications/publications';
import { PublicationsBySeccionPage } from '../publicationsbyseccion/publicationsbyseccion';
import { CreatePublicationsPage } from '../create-publications/create-publications';

/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {}
  newPublication(){
      this.navCtrl.push(CreatePublicationsPage);
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Publicaciones',
      buttons: [
        {
          text: 'Ingenieria',
          handler: () => {
            this.navCtrl.push(PublicationsBySeccionPage,{
                seccion: "Ingenieria",
              });
          }
        },{
          text: 'Medicina',
          handler: () => {
            this.navCtrl.push(PublicationsBySeccionPage,{
                seccion: "Medicina",
              });
          }
        },{
          text: 'Arquitectura',
          handler: () => {
            this.navCtrl.push(PublicationsBySeccionPage,{
                seccion: "Arquitectura",
              });
          }
        },{
          text: 'Diseño Grafico',
          handler: () => {
            this.navCtrl.push(PublicationsBySeccionPage,{
                seccion: "Diseño Grafico",
              });
          }
        },{
          text: 'Abogacia',
          handler: () => {
            this.navCtrl.push(PublicationsBySeccionPage,{
                seccion: "Abogacia",
              });
          }
        },{
          text: 'Ciencias Economicas y Politicas',
          handler: () => {
            this.navCtrl.push(PublicationsBySeccionPage,{
                seccion: "Ciencias Economicas y Politicas",
              });
          }
        },{
            text: 'Todos',
            handler: () => {
              this.navCtrl.push(PublicationsPage);
            }
          },{
          text:'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
}
