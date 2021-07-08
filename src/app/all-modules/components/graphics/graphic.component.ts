import { Component, Input, OnInit } from "@angular/core";
import { AllModulesService } from "../../all-modules.service";
import { SurveyStadistics } from "../../core/model/SurveyStadistics";

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html'
})
export class GraphicComponent implements OnInit {

  public lineOption: any = [];
  public lineData: any = [];
  public barColors = {
    a: "#ff9b44",
    b: "#fc6075",
  };

  public lineColors = {
    a: "#ff9b44",
    b: "#fc6075",
  };
  public surveyStadistics: SurveyStadistics[] = [];

  public chartBarOptions = {
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
    barColors: ['#01B8AA', '#F2C80F', '#5F6B6D'],
  };

  constructor(private services: AllModulesService) { }


  configureGraphics(): void {
    this.lineOption = {
      xkey: 'x',
      ykeys: ['y', 'z'],
      labels: ["Total Votes", "Total Participants"],
      lineColors: [this.lineColors.a, this.lineColors.b],
    };
  }

  ngOnInit() {
    this.configureGraphics();
    this.loadData();
  }

  public loadData(){
    this.services.getStadistics().subscribe((resp: SurveyStadistics[]) => {
      this.loadGraph(resp);
    });
  }

  public loadGraph(element: SurveyStadistics[]): void {
    let data: any[] = [];
    element.forEach(item => {
      data.push({ x: item.music.toString(), y: item.total, z: item.universe });
    })
    this.lineData = data;
  }
}
