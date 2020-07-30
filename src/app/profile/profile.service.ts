import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {IEducation} from "../Modal/IEducation";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private educationUrl ='api/education';

  constructor(private _http: HttpClient) {
  }

  //Education Service
  getEducations(): Observable <IEducation[]>{
    return this._http.get<IEducation[]>(this.educationUrl)
  }

}


