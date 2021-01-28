import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  nombres: string = "";
  apellidos: string = "";
  correo: string = "";
  fecha_nacimiento: string = "";
  cedula: string = "";
  usuario: string = "";
  clave: string = "";
  confirmar_clave: string = "";

  disabledButton;


  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvs: AccessProviders
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
      this.disabledButton = false;
  }

  async tryRegistrar(){
    if(this.nombres==""){
      this.presentToast("Nombre es requerido.");
    }else if(this.apellidos==""){
      this.presentToast("Apellido es requerido.");
    }else if(this.correo==""){
      this.presentToast("Correo es requerido.");
    }else if(this.fecha_nacimiento==""){
      this.presentToast("Fecha de nacimiento es requerido.");
    }else if(this.cedula==""){
      this.presentToast("Cédua es requerido.");
    }else if(this.usuario==""){
      this.presentToast("Usuario es requerido.");
    }else if(this.clave==""){
      this.presentToast("Clave es requerido.");
    }else if(this.confirmar_clave!=this.clave){
      this.presentToast("Las clave son diferentes.");
    }else{
        this.disabledButton = true;
        const loader = await this.loadingCtrl.create({
          message: 'Espere por favor.',
        });
        loader.present();
        
        return new Promise(resolve => {
          let body = {
            aksi: 'proseso_registro',
            nombres: this.nombres,
            apellidos: this.apellidos,
            correo: this.correo,
            fecha_nacimiento: this.fecha_nacimiento,
            cedula: this.cedula,
            usuario: this.usuario,
            clave: this.clave
          }
          this.accsPrvs.postData(body, 'api.php').subscribe((res:any) =>{
            if(res.success==true){
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast(res.msg);
              this.router.navigate(['/login']);
            }else{
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast(res.msg);
            }
          },(err)=>{
            loader.dismiss();
            this.disabledButton = false;
            this.presentAlert('Timeout');
          });
        });
    }
  }
  
  async presentToast(a){
    const toast = await this.toastCtrl.create({
        message: a,
        duration: 1500,
        position: 'top'
    });
    toast.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Close',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
           
          }
        }, {
          text: 'Intente de Nuevo.',
          handler: () => {
            this.tryRegistrar();
          }
        }
      ]
    });

    await alert.present();
  }




}

