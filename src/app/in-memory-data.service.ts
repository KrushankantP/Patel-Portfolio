import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const education=[
      {
        edu_Id: 'edu_1',
        degree_Title: 'Master of Science',
        degree_Name:'Management Information System.',
        complete_year:'May, 2020',
        univ_Name:'University of Houston Clear lake',
        point_1:'',
        point_2:'',
        point_3:'',
        location:'Houston, Tx',
      },
      {
        edu_Id:'edu_2',
        degree_Title:'Master Degree',
        degree_Name:'Computer Applications.',
        complete_year:'June, 2016',
        univ_Name:'Gujarat Technological University',
        point_1:'',
        point_2:'',
        point_3:'',
        location:'Gujarat, India',
      },
      {
        edu_Id:'edu_3',
        degree_Title:'Bachelor Degree',
        degree_Name:'Computer Applications.',
        complete_year:'Feb, 2014',
        univ_Name:'Veer Narmad South Gujarat University',
        point_1:'',
        point_2:'',
        point_3:'',
        location:'Gujarat, India',
      },
    ];

    const certifications = [
      {
        cert_Id: 'cert1',
        cert_Image:'assets/images/microsoft.png' ,
        cert_Title:'70-486: Microsoft: Developing ASP.NET MVC Web Application',
        cert_Issue_Date:'september 2019',
        cert_URL:'',
      },
      {
        cert_Id: 'cert2',
        cert_Image:'assets/images/Oracle.png' ,
        cert_Title:'1Z0-144: Oracle Database 11g: Program with PL/SQL',
        cert_Issue_Date:'May 2020',
        cert_URL:'',
      },

    ];

    return { education, certifications }
  }


}
