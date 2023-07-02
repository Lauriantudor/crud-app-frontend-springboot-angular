import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-create-trainer',
  templateUrl: './create-trainer.component.html',
  styleUrls: ['./create-trainer.component.css']
})
export class CreateTrainerComponent implements OnInit {
  trainer: Trainer= new Trainer();
  constructor(private trainerService: TrainerService, private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    this.trainer=value;
    this.trainerService.createTrainer(this.trainer).subscribe(data => {
      this.goToTrainers();
    },err => console.log(err));

  }
  goToTrainers(){
    this._router.navigate(['/trainers']);
  }
}
