import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  	  this.tasks = db.list('/tasks/Bicycle');

  }

   updateBecha(key, becha) {
    this.tasks.update(key, {Becha: becha});
    this.showAlert();
      }

   updateFixie(key, fixie) {
    this.tasks.update(key, {Fixie: fixie});

      }

    updateKids(key, kids) {
    this.tasks.update(key, {Kids: kids});
    
      }

   updateMountain(key, mountain) {
    this.tasks.update(key, {Mountain: mountain});
    
      }

    updateName(key, name) {
    this.tasks.update(key, {Name: name});
    
      }

    updateRoad(key, road) {
    this.tasks.update(key, {Road: road});
    
      }

   updateStatus(key, status) {
    this.tasks.update(key, {Status: status});
    
      }



 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Information has been updated.',
      buttons: ['OK']
    });
    alert.present();
  }

}
