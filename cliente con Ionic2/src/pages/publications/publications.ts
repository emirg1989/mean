import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublicationsService } from '../../providers/publications-service';

/*
  Generated class for the Publications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html',
  providers: [PublicationsService]
})
export class PublicationsPage {

  public foundPublications;

  constructor(private publicationsService: PublicationsService) {

    this.publicationsService.getRepos().subscribe(
           data => {
               this.foundPublications = data.json();
           },
           err => console.error(err),
           () => console.log('getRepos completed')
       );
  }

}
