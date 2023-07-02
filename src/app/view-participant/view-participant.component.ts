import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';
import { Project } from '../project';

@Component({
  selector: 'app-view-participant',
  templateUrl: './view-participant.component.html',
  styleUrls: ['./view-participant.component.css']
})
export class ViewParticipantComponent implements OnInit {
  id!:number;
  participant!:Participant;
  projects!:Project[];
  constructor(private participantService: ParticipantService,
    private _router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParticipant();
  }
  getParticipant(){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.participantService.getParticipant(this.id).subscribe(data =>{
      this.participant=data;
      this.projects= this.participant.participantsProjects;
    },err => console.log(err));
  }
  goToProject(id:number){
    this._router.navigate(['/view-project',id]);
  }
}
