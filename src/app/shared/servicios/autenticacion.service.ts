import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar:boolean = false;

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'cangri' && obj.password == '666'
      return this.ingresar
  }

  public habilitarlogeo(){
    return this.ingresar;
  }


}
