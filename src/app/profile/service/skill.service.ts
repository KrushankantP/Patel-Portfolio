import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private plUrl= 'api/programmingLanguages';
  private fetUrl= 'api/frontEndTech';
  private betUrl= 'api/backEndTech';
  private deUrl= 'api/deploymentEnv';
  private sUrl= 'api/storage';
  private tUrl= 'api/tools';
  private pnUrl= 'api/platforms';

  constructor(private _http: HttpClient) { }

  getProgrammingLanguage(): Observable<any>{
    return this._http.get<any>(this.plUrl)
  }

  getFrontEndTech(): Observable<any>{
    return this._http.get<any>(this.fetUrl)
      .pipe(
        tap(data=> console.log('front end',data))
      )
  }

  getBackEndTech(): Observable<any>{
    return this._http.get<any>(this.betUrl)
  }
  getDeploymentEnv(): Observable<any>{
    return this._http.get<any>(this.deUrl)
  }
  getStorage(): Observable<any>{
    return this._http.get<any>(this.sUrl)
  }
  getTools(): Observable<any>{
    return this._http.get<any>(this.tUrl)
  }
  getPlatformsNetworking(): Observable<any>{
    return this._http.get<any>(this.pnUrl)
  }

}
