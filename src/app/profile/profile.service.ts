import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {IEducation} from "../Modal/IEducation";
import {ICertification} from "../Modal/ICertification";
import {tap} from "rxjs/operators";
import {IExperience} from "../Modal/IExperience";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private educationUrl ='api/education';
  private certificationUrl='api/certifications';
  private expUrl='api/experience';

  constructor(private _http: HttpClient) {

  }

  //Education Service
  getEducations() :Observable <IEducation[]>{
    return this._http.get<IEducation[]>(this.educationUrl)
  }

  //Certification Service
  getCertifications() :Observable<ICertification[]>{
    return this._http.get<ICertification[]>(this.certificationUrl)
      .pipe(
        tap(res => console.log('fetched heroes', res))
      )}

  getExperience() :Observable<IExperience[]>{
    return this._http.get<IExperience[]>(this.expUrl)
  }

}


