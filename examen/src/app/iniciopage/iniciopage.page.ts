import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'; // Importa ModalController
import { DetallesCandidatoComponent } from '../detalles-candidato/detalles-candidato.component'; // Asegúrate de tener este componente

@Component({
  selector: 'app-iniciopage',
  templateUrl: './iniciopage.page.html',
  styleUrls: ['./iniciopage.page.scss'],
})
export class IniciopagePage implements OnInit {
  candidatos = [
    {
      nombre: 'Forrest Gump',
      imagen: '/assets/icon/img/frank.jpg',
      cargo: 'Candidato a la Alcaldía',
      detalles: [
        { tema: 'Educación', propuesta: 'Mejorar la infraestructura y calidad de educación.' },
        { tema: 'Salud', propuesta: 'Aumentar el presupuesto en salud pública.' },
      ]
    },
    {
      nombre: 'Emilio Prime',
      imagen: '/assets/icon/img/guimel.jpg',
      cargo: 'Candidato a la Alcaldía',
      detalles: [
        { tema: 'Educación', propuesta: 'Mejorar la infraestructura y calidad de educación.' },
        { tema: 'Salud', propuesta: 'Aumentar el presupuesto en salud pública.' },
      ]
    },
  ];

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  resultados() {
    this.navCtrl.navigateForward('/resultados');
  }

  async verDetalles(candidato:any) {
    const modal = await this.modalController.create({
      component: DetallesCandidatoComponent,
      componentProps: { candidato: candidato }
    });
    return await modal.present();
  }

}






