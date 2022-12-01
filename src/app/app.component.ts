import { Component } from '@angular/core';
import { AutenticacionService } from './shared/servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';



  constructor(private loginProd:AutenticacionService){

  }


  public visualizarMenu():boolean{
    return this.loginProd.habilitarlogeo();
  }
}

