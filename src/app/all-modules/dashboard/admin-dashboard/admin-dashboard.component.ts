import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AllModulesService } from "../../all-modules.service";
import { GraphicComponent } from "../../components/graphics/graphic.component";
import { TableComponent } from "../../components/tables/table.component";
import { TargetComponent } from "../../components/target/target.component";
import { Survey } from "../../core/model/Survey";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})

export class AdminDashboardComponent implements OnInit {

  public survey: Survey[] = [];
  public surveyObj: Survey;
  public status: boolean = false;
  @ViewChild(GraphicComponent) graphic: GraphicComponent;
  @ViewChild(TargetComponent) target: TargetComponent;
  @ViewChild(TableComponent) table: TableComponent;

  public addSurveyForm: FormGroup;

  constructor(private services: AllModulesService, private formBuilder: FormBuilder) {
  }


  addSurvey() {

    if(!this.addSurveyForm.valid) {
      alert('The Forms is not complet!');
    } else {
      this.services.add(this.surveyObj).subscribe((data) => {
        if (data) {
          this.graphic.loadData();
          this.target.ngOnInit();
          this.table.loadData();
          this.addSurveyForm.reset();
        }
      })
    }

    this.surveyObj= {
      email: this.addSurveyForm.value.Email,
      music: this.addSurveyForm.value.Music
    };

  }

  ngOnInit() {
    this.addSurveyForm = this.formBuilder.group({
      Email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Music: ["", [Validators.required]]
    });

    this.services.get().subscribe((resp: Survey[]) => {
      this.survey = resp;
    });
  }
}
