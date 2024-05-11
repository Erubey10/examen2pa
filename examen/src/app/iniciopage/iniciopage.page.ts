import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-iniciopage',
  templateUrl: './iniciopage.page.html',
  styleUrls: ['./iniciopage.page.scss'],
})
export class IniciopagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

verDetalles() {
  // Lógica para ver detalles del candidato
}

resultados() {
  // Redirige a otra página
  this.navCtrl.navigateForward('/resultados'); // Cambia 'nueva-pagina' por la ruta de la página a la que quieres ir
}
  ngOnInit() {
  }

}







