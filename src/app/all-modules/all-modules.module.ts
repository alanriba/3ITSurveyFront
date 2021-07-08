import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';

// Api Interaction
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'

// Perfect Scrollbar
import {
  PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { AllModulesService } from './all-modules.service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {};

@NgModule({
  declarations: [
    AllModulesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    AllModulesRoutingModule,

  ],
  providers: [
    AllModulesService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ]
})
export class AllModulesModule { }
