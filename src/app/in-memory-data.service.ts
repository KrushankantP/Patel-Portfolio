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

    const programmingLanguages=[
     { PL_Id: 'PL1', PL_Name: 'JavaScript', PL_Image: '' },
     { PL_Id: 'PL2', PL_Name: 'TypeScript', PL_Image: '' },
     { PL_Id: 'PL3', PL_Name: 'C#', PL_Image: '' },
     { PL_Id: 'PL3', PL_Name: 'C#', PL_Image: '' }
   ];

    const frontEndTech=[
      { FET_Id: 'FET1', FET_Name: 'HTML5', FET_Image:'' },
      { FET_Id: 'FET2', FET_Name: 'CSS3', FET_Image:'' },
      { FET_Id: 'FET3', FET_Name: 'Angular 6+', FET_Image: '' },
      { FET_Id: 'FET4', FET_Name: 'JSON', FET_Image: '' },
      { FET_Id: 'FET5', FET_Name: 'AJAX', FET_Image: '' },
      { FET_Id: 'FET6', FET_Name: 'Bootstrap', FET_Image: '' },
      { FET_Id: 'FET7', FET_Name: 'JSF', FET_Image: '' },
    ];

    const backEndTech=[
      { BET_Id: 'BET1', BET_Name: 'ASP.NET MVC5', BET_Image:'' },
      { BET_Id: 'BET2', BET_Name: 'ASP.NET Core', BET_Image:'' },
      { BET_Id: 'BET3', BET_Name: 'Razor Pages', BET_Image: '' },
      { BET_Id: 'BET4', BET_Name: 'ADO.NET', BET_Image: '' },
      { BET_Id: 'BET5', BET_Name: 'Entity Framework Core', BET_Image: '' },
      { BET_Id: 'BET6', BET_Name: 'LINQ', BET_Image: '' },
      { BET_Id: 'BET7', BET_Name: 'Repository Pattern', BET_Image: '' }
    ];

    const deploymentEnv=[
      {DE_Id:'DE1' ,DE_Name: 'IIS', DE_Image: ''},
      {DE_Id:'DE2' ,DE_Name: 'Apache', DE_Image: ''},
      {DE_Id:'DE3' ,DE_Name: 'FireBase', DE_Image: ''},
      {DE_Id:'DE4' ,DE_Name: 'GlassFish Server', DE_Image: ''}
      ];

    const storage=[
      {S_Id: 'S1', S_Name: 'SQLSever', S_Image: ''},
      {S_Id: 'S2', S_Name: 'MySQL', S_Image: ''},
      {S_Id: 'S3', S_Name: 'Oracle', S_Image: ''},
      {S_Id: 'S4', S_Name: 'PLSQL', S_Image: ''},
      {S_Id: 'S5', S_Name: 'NoSQL', S_Image: ''},
    ];

    const tools=[
      {T_Id: 'T1', T_Name: 'Visual Stdio', T_Image:''},
      {T_Id: 'T2', T_Name: 'Visual Studio Code', T_Image:''},
      {T_Id: 'T3', T_Name: 'Webstrom', T_Image:''},
      {T_Id: 'T4', T_Name: 'GitHub', T_Image:''},
      {T_Id: 'T5', T_Name: 'SourceTree', T_Image:''},
      {T_Id: 'T6', T_Name: 'JIRA', T_Image:''},
      {T_Id: 'T7', T_Name: 'UIPath', T_Image:''},
      {T_Id: 'T8', T_Name: 'PowerBI', T_Image:''},

    ]

    const platforms=[
      {PN_Id: 'PN1', PN_Name: 'Windows', PN_Image: ''},
      {PN_Id: 'PN2', PN_Name: 'Mac', PN_Image: ''},
      {PN_Id: 'PN3', PN_Name: 'UNIX', PN_Image: ''},
      {PN_Id: 'PN4', PN_Name: 'HTTP', PN_Image: ''},
    ]

    return {
      education,
      certifications,
      programmingLanguages,
      frontEndTech,
      backEndTech,
      deploymentEnv,
      storage,
      tools,
      platforms
    }
  }

}
