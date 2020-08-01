//Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NgxSpinnerModule} from "ngx-spinner";
//Component
import { ProfileComponent } from './profile.component'
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {IntroComponent} from "./intro/intro.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {EducationComponent} from "./education/education.component";
import { CertificationComponent } from './certification/certification.component';
import {SkillsComponent} from "./skills/skills.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    CertificationComponent,
    SkillsComponent
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class ProfileModule { }
