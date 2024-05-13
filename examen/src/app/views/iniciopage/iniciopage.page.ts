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
  candidatos?: any[];

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private candidatoController: CandidatoController,
    private usuarioController: UsuarioController
  ) { }

  ngOnInit() {
    this.obtenerCandidatos();
    console.log('Iniciando...');
  }
  obtenerCandidatos() {
    this.candidatoController.obtenerCandidatos().subscribe(
      candidatos => {
        this.candidatos = candidatos;
      },
      error => {
        console.error('Error al obtener candidatos:', error);
      }
    );
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






