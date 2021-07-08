import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MorrisJsModule } from 'angular-morris-js';
import { HeaderComponent } from '../components/header/header.component';
import { TargetComponent } from '../components/target/target.component';
import { GraphicComponent } from '../components/graphics/graphic.component';
import { TableComponent } from '../components/tables/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, AdminDashboardComponent, HeaderComponent, TargetComponent, GraphicComponent, TableComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MorrisJsModule,
    FormsModule, ReactiveFormsModule

  ]
})
export class DashboardModule { }
