import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { ReportComponent } from './modules/report/report.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
