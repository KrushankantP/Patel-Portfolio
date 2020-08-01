import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {IExperience} from "../../Modal/IExperience";

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: IExperience[]
  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.fetchExperience()
  }

  fetchExperience(): void{
    this._profileService.getExperience().subscribe(res=>{
        this.experience = res;
      });
  }
}
