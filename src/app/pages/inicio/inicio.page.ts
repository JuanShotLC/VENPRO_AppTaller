import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    datastorage: any;
    nombre: string;

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
    this.storage.get('almacelar_xxx').then((res)=>{
      console.log(res);
      this.datastorage = res;
      this.nombre = this.datastorage.nombres;

    });
  }
  async procesoLogout(){
      this.storage.clear();
      this.navCtrl.navigateRoot(['/intro']);
      const toast = await this.toastCtrl.create({
        message: 'Logaot exitoso.',
        duration: 1500
    });
    toast.present();

  }
  
  goToTaller(){
    this.router.navigate(['/taller'])
  }
  goToPresubuestos(){
    this.router.navigate(['/presupuestos'])
  }
  goToFacturas(){
    this.router.navigate(['/facturas'])
  }
  goToInventario(){
    this.router.navigate(['/inventario'])
  }
  goToContabilidad(){
    this.router.navigate(['/contabilidad'])
  }
  goToVehiculos(){
    this.router.navigate(['/vehiculos'])
  }
  goToUsuarios(){
    this.router.navigate(['/usuarios'])
  }
  goToClientes(){
    this.router.navigate(['/clientes'])
  }
  goToPerfil(){
    this.router.navigate(['/perfil'])
  }

}
