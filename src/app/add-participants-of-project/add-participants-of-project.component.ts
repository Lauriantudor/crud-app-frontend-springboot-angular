import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Participant } from '../participant';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-add-participants-of-project',
  templateUrl: './add-participants-of-project.component.html',
  styleUrls: ['./add-participants-of-project.component.css']
})
export class AddParticipantsOfProjectComponent implements OnInit {
  id!:number;
  project!:Project;
  participants!:Participant[];
  constructor(private projectService: ProjectService, 
    private _router: Router, private activatedRoute: ActivatedRoute,
    private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.getProject();
    this.getParticipants();
  }
  goBack(){
    this._router.navigate(['participantsFor',this.id])
  }
  getProject(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.projectService.geProject(this.id).subscribe(data=>{
      this.project = data;
      console.log(this.project);
    },err=>console.log(err))
  }

  addToProject(participantId: number){
    this.participantService.addParticipantTo(participantId,this.id,this.project).subscribe(data=>{
      this.goBack();
    },err=>console.log(err));
  }
  getParticipants(){
    this.participantService.getParticipants().subscribe(data=>{
      this.participants=data;
    },err=>console.log(err));
  }
}
