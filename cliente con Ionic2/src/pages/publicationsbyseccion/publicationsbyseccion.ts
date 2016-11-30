import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { PublicationsService } from '../../providers/publications-service';

/*
  Generated class for the Publicationsbyseccion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-publicationsbyseccion',
  templateUrl: 'publicationsbyseccion.html',
    providers: [PublicationsService]
})
export class PublicationsBySeccionPage {

  public foundPublications;

  constructor(private navParams: NavParams, private publicationsService: PublicationsService) {
      let seccion = navParams.get("seccion");

      this.publicationsService.getReposBySeccion(seccion).subscribe(
             data => {
                 this.foundPublications = data.json();
             },
             err => console.error(err),
             () => console.log('getRepos completed')
         );

  }
}
