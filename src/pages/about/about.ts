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
    this.showAlert();
      }

    updateKids(key, kids) {
    this.tasks.update(key, {Kids: kids});
    this.showAlert();
      }

   updateMountain(key, mountain) {
    this.tasks.update(key, {Mountain: mountain});
    this.showAlert();
      }

    updateName(key, name) {
    this.tasks.update(key, {Name: name});
    this.showAlert();
      }

    updateRoad(key, road) {
    this.tasks.update(key, {Road: road});
    this.showAlert();
      }

   updateStatus(key, status) {
    this.tasks.update(key, {Status: status});
    this.showAlert();
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
