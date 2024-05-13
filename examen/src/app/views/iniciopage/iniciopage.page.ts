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
    console.log(candidato)
    const modal = await this.modalController.create({
      component: DetallesCandidatoComponent,
      componentProps: { candidato: candidato }
    });
    return await modal.present();
  }

  votar(candidato: Candidato) {
    const usuario = this.usuarioController.obtenerUsuarioPorId(Number(localStorage.getItem('idUsuario')));
    if (usuario && !usuario.voto) {
      if (confirm('¿Estás seguro de votar por ' + candidato.nombre + '?')) {
        this.candidatoController.votarPorCandidato(candidato.id);
        this.usuarioController.marcarVoto(usuario.id);
        alert('Voto registrado');
        this.navCtrl.navigateForward('/resultados');
      }
    } else {
      alert('Ya votaste');
    }
  }

  salir() {
    console.log('Saliendo...');
    this.navCtrl.navigateBack('/home');
    localStorage.removeItem('idUsuario');
  }

}






