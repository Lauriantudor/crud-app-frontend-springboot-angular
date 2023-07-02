import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { Router } from '@angular/router';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-create-paricipant',
  templateUrl: './create-paricipant.component.html',
  styleUrls: ['./create-paricipant.component.css']
})
export class CreateParicipantComponent implements OnInit {
  
  participant: Participant = new Participant();
  constructor(private participantService: ParticipantService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    this.participant=value;
    this.participantService.createParticipant(this.participant).subscribe(data => {
      this.goToParticipants();
    }, err => console.log(err));
  }

  goToParticipants(){
    this._router.navigate(['participants'])
  }
}
