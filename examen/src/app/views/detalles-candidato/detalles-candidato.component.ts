import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detalles-candidato',
  templateUrl: './detalles-candidato.component.html',
  styleUrls: ['./detalles-candidato.component.scss'],
})
export class DetallesCandidatoComponent {
  @Input() candidato: any;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }


}
