import { Component, OnInit } from '@angular/core';
import {SkillService} from "../service/skill.service";
import {IFrontendTech} from "../../Modal/IFrontend-tech";
import {IBackendTech} from "../../Modal/IBackend-tech";
import {IProgrammingLanguage} from "../../Modal/IProgramming-language";
import {IDeploymentEnv} from "../../Modal/IDeployment-env";
import {IStorage} from "../../Modal/IStorage";
import {ITools} from "../../Modal/ITools";

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  frontend:IFrontendTech[];
  backend:IBackendTech[]
  programingLanguages:IProgrammingLanguage[];
  deploymentEnv:IDeploymentEnv[];
  storage: IStorage[];
  Tools:ITools[];

  constructor(private _skillService: SkillService ) { }

  ngOnInit() {
  this.fetchedFrontend();
  this.fetchedBackend();
  this.fetchedProgramingLanguage();
  this.fetchedStorage();
  this.fetchDeploymentEnv();
  this.fetchTools();
  }

  fetchedFrontend(): void{
    this._skillService.getFrontEndTech().subscribe(res=>{
      this.frontend =res
      console.log('component', res)
    })
  }
  fetchedBackend(): void{
    this._skillService.getBackEndTech().subscribe(res=>{
      this.backend = res;
    })
  }
  fetchedProgramingLanguage(): void{
    this._skillService.getProgrammingLanguage().subscribe(res=>{
      this.programingLanguages = res;
    })
  }
  fetchedStorage(): void{
    this._skillService.getStorage().subscribe(res=>{
      this.storage = res;
    })
  }
  fetchDeploymentEnv(): void{
    this._skillService.getDeploymentEnv().subscribe(res=>{
      this.deploymentEnv =res;
    })
  }
  fetchTools(): void{
    this._skillService.getTools().subscribe(res=>{
      this.Tools =res;
    })
  }

}
