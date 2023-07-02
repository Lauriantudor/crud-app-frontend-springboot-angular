import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent implements OnInit {
  id!: number;
  trainer: Trainer= new Trainer();
  constructor(private trainerService: TrainerService,
              private activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this.getTrainer();
  }
  getTrainer(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.trainerService.getTrainer(this.id).subscribe(data => {
      this.trainer = data
    },err => console.log(err));
  }
  onSubmit(data: any){
    this.trainer=data;
    this.trainerService.updateTrainer(this.trainer,this.id).subscribe(data => {
      this.goToTrainers();
    },err => console.log(err));
  }

  goToTrainers(){
    this._router.navigate(['/trainers'])
  }

}
