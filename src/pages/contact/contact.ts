import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

tasks: FirebaseListObservable<any[]>;
stalls: FirebaseListObservable<any[]>;
bndrrules: FirebaseListObservable<any[]>;
bikestalls: FirebaseListObservable<any[]>;
parkingarea: FirebaseListObservable<any[]>;
bikeroutes: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

      this.tasks = db.list('/tasks/Bicycle'); //x
      this.stalls = db.list('/tasks/Stall'); //done
      this.bndrrules = db.list('/tasks/Rules'); //done
      this.bikestalls = db.list('/tasks/Bicycle'); //done
      this.parkingarea = db.list('/tasks/Parking'); //done
      this.bikeroutes = db.list('/tasks/Bicycle'); //x

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Changes Made!',
      buttons: ['OK']
    });
    alert.present();
  }

  addAds(){
    let prompt = this.alertCtrl.create({
      title: 'Send a feedback to us!',
      message: "Tell us on what to improve on the app",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail/Name'
        },
        {
          name: 'feedback',
          placeholder: 'Feedback',
          type: 'text'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.tasks.push({
              feedback:data.feedback,
              email:data.email
            });
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }

  addStalls(){
    let prompt = this.alertCtrl.create({
      title: 'Add a Stall',
      message: "Please enter the following:",
      inputs: [
        {
          name: 'idz',
          placeholder: 'ID'
        },
        {
          name: 'Name',
          placeholder: 'Name',
        },
        {
          name: 'Type',
          placeholder: 'Type'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.stalls.push({
              id:data.idz,
              Name:data.Name,
              Type:data.Type
            });
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }

  addRules(){
    let prompt = this.alertCtrl.create({
      title: 'Send a feedback to us!',
      message: "Tell us on what to improve on the app",
      inputs: [
        {
          name: 'rules',
          placeholder: 'Rules'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.bndrrules.push({
              rules:data.Rules
            });
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }

  addBikeStalls(){
    let prompt = this.alertCtrl.create({
      title: 'Send a feedback to us!',
      message: "Tell us on what to improve on the app",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'status',
          placeholder: 'Status',
          type: 'text'
        },
        {
          name: 'becha',
          placeholder: 'Becha Amount',
          type: 'number'
        },
        {
          name: 'fixie',
          placeholder: 'Fixie Amount',
          type: 'number'
        },
        {
          name: 'kids',
          placeholder: 'Kids Amount',
          type: 'number'
        },
        {
          name: 'mountain',
          placeholder: 'Mountain Amount',
          type: 'number'
        },
        {
          name: 'road',
          placeholder: 'Road Amount',
          type: 'number'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.bikestalls.push({
              Name:data.name,
              Status:data.status,
              Becha:data.becha,
              Fixie:data.fixie,
              Kids:data.kids,
              Mountain:data.mountain,
              Road:data.road
            });
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }

  addParkingArea(){
    let prompt = this.alertCtrl.create({
      title: 'Send a feedback to us!',
      message: "Tell us on what to improve on the app",
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
        {
          name: 'status',
          placeholder: 'status',
        },
        {
          name: 'amount',
          placeholder: 'amount',
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.parkingarea.push({
              name:data.name,
              status:data.status,
              amount:data.amount,
            });
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }

  addBikeRoutes(){
    let prompt = this.alertCtrl.create({
      title: 'Send a feedback to us!',
      message: "Tell us on what to improve on the app",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail/Name'
        },
        {
          name: 'feedback',
          placeholder: 'Feedback',
          type: 'text'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.tasks.push({
              feedback:data.feedback,
              email:data.email
            });
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }


}
