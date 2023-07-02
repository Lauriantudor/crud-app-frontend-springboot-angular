import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {
  trainers!:Trainer[];
  constructor(private trainerService:TrainerService, private _router:Router) { }

  ngOnInit(): void {
    this.getTrainers();
  }

  getTrainers(){
    this.trainerService.getTrainers().subscribe(data => {
      this.trainers = data;
   
    },err => console.log(err));
  }

  goToAdd() {
    this._router.navigate(['/create-trainer']);
  }
  goToUpdate(id:number) {
    this._router.navigate(['/update-trainer', id]);
  }
  goToView(id:number) {
    this._router.navigate(['/view-trainer', id]);
  }
  deleteTrainer(id:number) {
    this.trainerService.deleteTrainer(id).subscribe(data=>{
      this.getTrainers();
    }, err =>console.log(err));
  }

}
