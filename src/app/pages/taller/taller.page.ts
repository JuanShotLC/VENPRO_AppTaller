import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TallerPage implements OnInit {
    casos: any    = [];
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
    this.casos= [];
    this.loadCasos();
  }

  async doRefresh(event){
    const loader = await this.loadingCtrl.create({
      message: 'Espere por favor.',
    });
    loader.present();
    this.ionViewDidEnter();
    event.target.complete();

    loader.dismiss();
  }

  // loadData(){
  //   this.start += this.limit;
  //   setTimeout(()=>{
  //       this.loadCasos().then(()=>{
  //         event.target.complete();
  //       });
  //   }, 500);

  // }

  async loadCasos(){  
      
    return new Promise(resolve => {
          let body = {
              aksi: 'load_casos',
              start: this.start,
              limit: this.limit
            }
            this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
              for(let datas of res.result){ 
                    this.casos.push(datas);
              }
              resolve(true);
             });
        });
    }

  async delData(a){
    return new Promise(resolve => {
      let body = {
          aksi: 'del_caso',
          id: a
        }
        this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
          if(res.success==true){           
            this.presentToast('Eliminacion exitosa.');
            this.ionViewDidEnter();
          }else{

          }

         });
    });
  }

  async updateData(){
    return new Promise(resolve => {
      let body = {
          aksi: 'update_casos',
          start: this.start,
          limit: this.limit
        }
        this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
          for(let datas of res.result){ 
                this.casos.push(datas);
          }
          resolve(true);
         });
    });
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
        message: a,
        duration: 1500
    });
    toast.present();
  }

  goToAddVehiculo(){
    this.router.navigate(['/addvehiculo'])
  }
  goToAddComputador(){
    this.router.navigate(['/addcomputador'])
  }

}
