import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {
  id!:number;
  participant: Participant = new Participant();
  constructor(private participantService: ParticipantService,
    private activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.getParticipant();
  }

  getParticipant(){
    this.id =this.activatedRoute.snapshot.params['id'];
    this.participantService.getParticipant(this.id).subscribe(data=>{
      this.participant=data;
      console.log(this.participant);
    },err=>console.log(err));
  }

  onSubmit(value:any){
    this.participant=value;
    this.participantService.updateParticipant(this.participant,this.id).subscribe(data=>{
      this.goToParticipants();
    },err=>console.log(err));
  }
  goToParticipants(){
    this._router.navigate(['participants'])
  }

}
