import { Component, Input, OnInit } from '@angular/core';
import { AllModulesService } from '../../all-modules.service';
import { SurveyStadistics } from '../../core/model/SurveyStadistics';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  public surveyStadistics: SurveyStadistics[]=[];

  constructor(private services: AllModulesService) { }

public loadData(){
  this.services.getStadistics().subscribe((resp: SurveyStadistics[]) => {
    this.surveyStadistics = resp;
  });
}


  ngOnInit() {
    this.loadData();
  }
}
