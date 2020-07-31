import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {ICertification} from "../../Modal/ICertification";

@Component({
  selector: 'certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  certificationData: ICertification[]

  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this.fetchCertification();
  }

  fetchCertification():void{
    this._profileService.getCertifications()
      .subscribe(certData=>{
        this.certificationData=certData
      })
  }
}
