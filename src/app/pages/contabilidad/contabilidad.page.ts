import { Component, OnInit , ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.page.html',
  styleUrls: ['./contabilidad.page.scss'],
})
export class ContabilidadPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  balance: any    = [];


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
  
      this.balance= [];
      this.load_balance();
    }
  
 
  
  
    async load_balance(){  
        
      return new Promise(resolve => {
            let body = {
                aksi: 'load_balance',

              }
              this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
                for(let datas of res.result){ 
                      this.balance.push(datas);
                }
                resolve(true);
               });
          });
      }

      // loadData(event) {

      //   setTimeout(() => {
      //     console.log('Done');
      //     event.target.complete();    
      //     // App logic to determine if all data is loaded
      //     // and disable the infinite scroll
          
      //     if (this.load_balance().length == 1000) {
      //       event.target.disabled = true;
      //     }
      //   }, 500);
      // }
    
      toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
      }

}
