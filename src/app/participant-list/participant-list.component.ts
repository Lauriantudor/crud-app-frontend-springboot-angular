import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { Router } from '@angular/router';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participants!: Participant[];
  constructor(private participantService: ParticipantService, private _router: Router) { }

  ngOnInit(): void {
    this.getParticipants();
  }
  getParticipants(){
    this.participantService.getParticipants().subscribe(data=>{
      this.participants = data;
    },err=>console.log(err));
  }
  goToAdd(){
    this._router.navigate(['/create-participant']);
  }

  goToUpdate(id:number){
    this._router.navigate(['/update-participant',id]);
  }
  goToView(id:number){
    this._router.navigate(['/view-participant',id]);
  }
  deleteParticipant(id:number){
    this.participantService.deleteParticipant(id).subscribe(data =>{
      this.getParticipants();
    }, err =>console.log(err));
  }
}
