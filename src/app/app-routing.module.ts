import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';

import { AppComponent } from './app.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { CreateTrainerComponent } from './create-trainer/create-trainer.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { TrainersOfProjectComponent } from './trainers-of-project/trainers-of-project.component';
import { AddTrainersOfProjectComponent } from './add-trainers-of-project/add-trainers-of-project.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { AddParticipantsOfProjectComponent } from './add-participants-of-project/add-participants-of-project.component';
import { ParticipantsOfProjectComponent } from './participants-of-project/participants-of-project.component';
import { ViewParticipantComponent } from './view-participant/view-participant.component';
import { CreateParicipantComponent } from './create-paricipant/create-paricipant.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component:ProjectListComponent},
  {path: 'trainers', component:TrainerListComponent},
  {path: 'participants', component:ParticipantListComponent},


  {path: 'create-project', component:CreateProjectComponent},
  {path: 'create-trainer',component:CreateTrainerComponent},
  {path: 'create-participant',component:CreateParicipantComponent},

  {path: 'update-project/:id', component:UpdateProjectComponent},  
  {path: 'update-trainer/:id', component:UpdateTrainerComponent},
  {path: 'update-participant/:id', component:UpdateParticipantComponent},

  {path: 'view-project/:id', component:ViewProjectComponent},
  {path: 'view-trainer/:id', component:ViewTrainerComponent},
  {path: 'view-participant/:id', component:ViewParticipantComponent},

  {path: 'trainersFor/:id', component:TrainersOfProjectComponent},
  {path: 'participantsFor/:id', component:ParticipantsOfProjectComponent},

  {path:'addTrainersTo/:id', component:AddTrainersOfProjectComponent},
  {path:'addParticipantsTo/:id', component:AddParticipantsOfProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
