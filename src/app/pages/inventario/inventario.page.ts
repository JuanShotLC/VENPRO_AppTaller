import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  productos: any    = [];
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
    this.productos= [];
    this.load_productos();
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


  async load_productos(){  
      
    return new Promise(resolve => {
          let body = {
              aksi: 'load_productos',
              start: this.start,
              limit: this.limit
            }
            this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
              for(let datas of res.result){ 
                    this.productos.push(datas);
              }
              resolve(true);
             });
        });
    }



}
