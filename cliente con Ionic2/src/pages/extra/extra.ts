import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from 'ionic-native';

declare var google;
/*
  Generated class for the Extra page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html'
})
export class ExtraPage {

  @ViewChild('map') mapElement: ElementRef;
 map: any;

 constructor(public navCtrl: NavController) {
   this.loadMap();
 }


 loadMap(){

   Geolocation.getCurrentPosition().then((position) => {

     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

     let mapOptions = {
       center: latLng,
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }

     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   }, (err) => {
     console.log(err);
   });

 }

 addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Estas Aca!</h4>";

  this.addInfoWindow(marker, content);

}

addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}
}
