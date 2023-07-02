import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerService } from '../trainer.service';
import { Project } from '../project';

@Component({
  selector: 'app-view-trainer',
  templateUrl: './view-trainer.component.html',
  styleUrls: ['./view-trainer.component.css']
})
export class ViewTrainerComponent implements OnInit {
  id!: number;
  trainer!:Trainer;
  projects!:Project[];
  constructor(private trainerService: TrainerService,
    private _router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTrainer();
  }
  getTrainer(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.trainerService.getTrainer(this.id).subscribe(data=>{
      this.trainer = data;
      this.projects = this.trainer.assignedProjects;
      console.log(this.trainer);
    }, err =>console.log(err))
  }
  goToProject(id:number){
    this._router.navigate(['/view-project',id]);
  }
}
