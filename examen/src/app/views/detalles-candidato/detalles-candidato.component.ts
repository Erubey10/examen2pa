import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CandidatoController } from 'src/app/controllers/CandidatoController';


@Component({
  selector: 'app-detalles-candidato',
  templateUrl: './detalles-candidato.component.html',
  styleUrls: ['./detalles-candidato.component.scss'],
})
export class DetallesCandidatoComponent implements OnInit{
  @Input() candidato: any;
  

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log('Candidato:', this.candidato);
  }

  dismiss() {
    this.modalController.dismiss();
  }


}
