import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Survey } from "./core/model/Survey";
import { SurveyStadistics } from "./core/model/SurveyStadistics";

@Injectable({
  providedIn: "root",
})
export class AllModulesService {
  // Api Methods for All modules

  public apiurl;

  // Headers Setup
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {
  }

  // Handling Errors
  private handleError(error: any) {
    return throwError(error);
  }

  // Get Method Api
  get(): Observable<Survey[]> {
    this.apiurl = environment.URL+`/survey`;

    return this.http
      .get<Survey[]>(this.apiurl, this.httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getStadistics(): Observable<SurveyStadistics[]> {
    this.apiurl = environment.URL + `/stadistics`;

    return this.http
      .get<SurveyStadistics[]>(this.apiurl, this.httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }



  // Post Method Api
  add(user: Survey): Observable<boolean> {
    this.apiurl = environment.URL+`/survey`;

    return this.http
      .post<boolean>(this.apiurl, JSON.stringify(user), this.httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }
}
