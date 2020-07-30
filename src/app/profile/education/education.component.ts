import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {IEducation} from "../../Modal/IEducation";

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationData:IEducation[]
  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.fetchEducations();
  }

  fetchEducations(): void{
    this._profileService.getEducations()
      .subscribe(edu_data=>{
        this.educationData = edu_data;
      })
  }
}
