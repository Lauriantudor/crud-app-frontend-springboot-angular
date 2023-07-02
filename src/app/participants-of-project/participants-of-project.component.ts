import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-participants-of-project',
  templateUrl: './participants-of-project.component.html',
  styleUrls: ['./participants-of-project.component.css']
})
export class ParticipantsOfProjectComponent implements OnInit {
  id!: number;
  project!: Project;
  participants!: Participant[];
  constructor(private projectService: ProjectService, 
    private _router: Router, private participantService: ParticipantService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParticipants();
    this.getProject();
  }
  getParticipants(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.projectService.getParticipantsFromProject(this.id).subscribe(data => {
      this.participants= data;
    }, err => console.log(err));
  }
  getProject(){
    this.id =this.activatedRoute.snapshot.params['id'];
    this.projectService.geProject(this.id).subscribe(data=>{
      this.project = data;
      console.log(this.project);
    }, err =>console.log(err))
  }
  goToView(id:number){
    this._router.navigate(['view-participant', id]);
  }
  goToAdd(id:number){
    this._router.navigate(['addParticipantsTo',id])
  }
  goBack(){
    this._router.navigate(['/view-project', this.id]);
  }

  deleteParticipant(id:number){
    this.participantService.removeParticipantFrom(id, this.id,this.project).subscribe(data =>{
      this.getParticipants();
    },err=>console.log(err));
  }
}
