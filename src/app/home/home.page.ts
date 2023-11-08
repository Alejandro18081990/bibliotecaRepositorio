import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string;
  constructor(private alertController: AlertController) {
    this.usuario = "";
  }

  async alertBienvenida() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: 'Bienvenido', 
      buttons: ['OK'],
    });
    await alert.present();
  }
}
