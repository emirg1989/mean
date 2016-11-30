import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/Rx';
import {Camera} from 'ionic-native';

/*
  Generated class for the CreatePublications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-publications',
  templateUrl: 'create-publications.html',

})
export class CreatePublicationsPage {
  public Titulo;
  public Descripcion;
  public Vendedor;
  public Telefono;
  public Seccion;
  public Precio;
  public base64Image: string;

  constructor(private http: Http,private nat: NavController, public toastCtrl: ToastController) {
     this.http = http;
  }

  add() {
       let body = JSON.stringify({ Titulo: this.Titulo,Descripcion: this.Descripcion,Vendedor:this.Vendedor,Telefono: this.Telefono,Seccion: this.Seccion,Precio: this.Precio, Imagen: this.base64Image});
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       this.http
         .post('http://localhost:3000/publicacion', body, options)
         .map(res => res.json())
         .subscribe(
             data => {
               console.log(data);
               this.nat.pop(CreatePublicationsPage);
               let toast = this.toastCtrl.create({
                 message: 'Publicacion Realizada',
                 duration:3000
               });
               toast.present();
             },
             err => {
               console.log("ERROR!: ", err);
             }
         );
   }
   takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
 }
