import { Component, OnInit } from '@angular/core';
import { UsuarioController } from 'src/app/controllers/UsuarioController';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  correo = '';
  contrasena = '';

  constructor(private usuarioController: UsuarioController,private navCtrl: NavController) {
  }

  ngOnInit() {
    this.usuarioController.agregarUsuario('Jorge Carlin', 'jorge@carlin.com', '123456');
  }

  login() {
    const usuario = this.usuarioController.login(this.correo, this.contrasena);
    if (usuario) {
      localStorage.setItem('idUsuario', usuario.id.toString());
      this.navCtrl.navigateForward('/iniciopage');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

