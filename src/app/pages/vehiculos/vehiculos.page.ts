import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  vehiculos: any    = [];
  start: number = 0;
  limit: number = 13; //limite de datos 

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvs: AccessProviders,
    private storage: Storage,
    public  navCtrl: NavController 
  ) { }

  ngOnInit() {
  }


  ionViewDidEnter(){
    this.start = 0;
      this.vehiculos= [];
      this.load_vehiculos();
    }
  
  
    async doRefresh(event) {
      const loader = await this.loadingCtrl.create({
        message: 'Espere por favor.',
      });
      setTimeout(() => {
        event.target.complete();
      }, 500);
  
      loader.present();
      this.ionViewDidEnter();
      event.target.complete();
  
      loader.dismiss();
    }
  
  
    async load_vehiculos(){  
        
      return new Promise(resolve => {
            let body = {
                aksi: 'load_vehiculos',
                start: this.start,
                limit: this.limit
              }
              this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
                for(let datas of res.result){ 
                      this.vehiculos.push(datas);
                }
                resolve(true);
               });
          });
      }

}
