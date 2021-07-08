import { Component, Input, OnInit } from '@angular/core';
import { AllModulesService } from '../../all-modules.service';
import { Survey } from '../../core/model/Survey';
import { SurveyStadistics } from '../../core/model/SurveyStadistics';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html'
})
export class TargetComponent implements OnInit {
  public surveyStadistics: SurveyStadistics[] = [];
  public universe: number = 0;

  constructor(private services: AllModulesService) { }

  ngOnInit() {
    this.services.getStadistics().subscribe((resp: SurveyStadistics[]) => {
      this.surveyStadistics = resp;
      this.universe = this.surveyStadistics[0].universe;
    });
  }
}
