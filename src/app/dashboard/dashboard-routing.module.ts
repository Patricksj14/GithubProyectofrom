import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ReportComponent } from './modules/report/report.component';

const routes : Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "report",
    component: ReportComponent
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }
