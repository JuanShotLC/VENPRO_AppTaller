import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.page.html',
  styleUrls: ['./presupuestos.page.scss'],
})
export class PresupuestosPage implements OnInit {

  presupuestos: any    = [];
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
    this.presupuestos= [];
    this.load_presupestos();
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


  async load_presupestos(){  
      
    return new Promise(resolve => {
          let body = {
              aksi: 'load_presupuestos',
              start: this.start,
              limit: this.limit
            }
            this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
              for(let datas of res.result){ 
                    this.presupuestos.push(datas);
              }
              resolve(true);
             });
        });
    }


}
