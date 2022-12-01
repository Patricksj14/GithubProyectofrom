import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder,private loginProd:AutenticacionService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['cangri',[Validators.required]],
      password:['666',Validators.required]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }

    if(!this.loginProd.ingresarAplicativo(this.myForm.value)){
      alert("Correo o contraseña invalido");
    } else {}

    this.router.navigate(["/dashboard"])
  }

  public get f():any{
    return this.myForm.controls;
  }

}
