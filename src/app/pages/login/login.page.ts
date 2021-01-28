import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  cedula: string = "";
  clave: string = "";

  disabledButton;

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
    this.disabledButton = false;
  }

  async tryLogin(){
    if(this.cedula==""){
      this.presentToast("Cédula es requerido.");
    }else if(this.clave==""){
      this.presentToast("Clave es requerido.");
    }else{

        this.disabledButton = true;
        const loader = await this.loadingCtrl.create({
          message: 'Espere por favor.',
        });
        loader.present();
        
        return new Promise(resolve => {
          let body = {
            aksi: 'proseso_login',
            cedula: this.cedula,
            clave: this.clave
          }
          this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
            if(res.success==true){
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast('Ingreso exitoso.');
              this.storage.set('almacelar_xxx', res.result); // almacena variables de login
              this.navCtrl.navigateRoot(['/inicio']);
            }else{
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast('Usuario o clave incorrecta');
            }
          },(err)=>{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Timeout');
          });
        });
    }
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
        message: a,
        duration: 1500
    });
    toast.present();
  }

  openRegistro(){
    this.router.navigate(['/registro']);
  }
}
