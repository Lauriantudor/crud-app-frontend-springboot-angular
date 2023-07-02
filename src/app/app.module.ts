import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { CreateTrainerComponent } from './create-trainer/create-trainer.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { TrainersOfProjectComponent } from './trainers-of-project/trainers-of-project.component';
import { AddTrainersOfProjectComponent } from './add-trainers-of-project/add-trainers-of-project.component';
import { AddParticipantsOfProjectComponent } from './add-participants-of-project/add-participants-of-project.component';
import { CreateParicipantComponent } from './create-paricipant/create-paricipant.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ViewParticipantComponent } from './view-participant/view-participant.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ParticipantsOfProjectComponent } from './participants-of-project/participants-of-project.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    ViewProjectComponent,
    TrainerListComponent,
    CreateTrainerComponent,
    UpdateTrainerComponent,
    ViewTrainerComponent,
    TrainersOfProjectComponent,
    AddTrainersOfProjectComponent,
    AddParticipantsOfProjectComponent,
    CreateParicipantComponent,
    ParticipantListComponent,
    ViewParticipantComponent,
    UpdateParticipantComponent,
    ParticipantsOfProjectComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
