import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'; // Importa ModalController
import { DetallesCandidatoComponent } from '../detalles-candidato/detalles-candidato.component'; // Asegúrate de tener este componente
import { UsuarioController } from 'src/app/controllers/UsuarioController';
import { CandidatoController } from 'src/app/controllers/CandidatoController';
import Candidato from 'src/app/models/Candidato';

@Component({
  selector: 'app-iniciopage',
  templateUrl: './iniciopage.page.html',
  styleUrls: ['./iniciopage.page.scss'],
})
export class IniciopagePage implements OnInit {
  candidatos = this.candidatoController.obtenerCandidatos();

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private candidatoController: CandidatoController,
    private usuarioController: UsuarioController
  ) { }

  ngOnInit() {
    console.log('Iniciando...');
  }

  resultados() {
    console.log('Viendo resultados...');
    this.navCtrl.navigateForward('/resultados');
  }

  async verDetalles(candidato: any) {
    const modal = await this.modalController.create({
      component: DetallesCandidatoComponent,
      componentProps: { candidato: candidato }
    });
    return await modal.present();
  }

  votar(candidato: Candidato) {

    if (confirm('¿Estás seguro de votar por ' + candidato.nombre + '?')) {
      this.usuarioController.marcarVoto(Number(localStorage.getItem('idUsuario')), candidato.nombre)
        .subscribe(response => {
          console.log(response);
          if (response !== undefined) {
            alert('Voto registrado');
            this.navCtrl.navigateForward('/resultados');
          } else {
            alert('Usted ya habia votado');
          }
        });
    }
  }

  salir() {
    console.log('Saliendo...');
    this.navCtrl.navigateBack('/home');
    localStorage.removeItem('idUsuario');
  }

}






