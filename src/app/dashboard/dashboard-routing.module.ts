import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ReportComponent } from './modules/report/report.component';
import { OpcionesComponent } from './modules/opciones/opciones.component';
import { DocumentComponent } from './modules/document/document.component';

const routes : Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "report",
    component: ReportComponent
  },
  {
    path: "opcion",
    component: OpcionesComponent
  },
  {
    path: "documento",
    component: DocumentComponent
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }
