import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { ReportComponent } from './modules/report/report.component';
import { OpcionesComponent } from './modules/opciones/opciones.component';
import { DocumentComponent } from './modules/document/document.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent,
    OpcionesComponent,
    DocumentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
