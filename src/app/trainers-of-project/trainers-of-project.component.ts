import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainers-of-project',
  templateUrl: './trainers-of-project.component.html',
  styleUrls: ['./trainers-of-project.component.css']
})
export class TrainersOfProjectComponent implements OnInit {
  id!: number;
  project!: Project;
  trainers!:Trainer[];
  constructor(private projectService: ProjectService, 
    private _router: Router, private trainersService: TrainerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProject();
    this.getTrainers();
  
  }
  getTrainers() {
    this.id =this.activatedRoute.snapshot.params['id'];
    this.projectService.getTrainersFromProject(this.id).subscribe(data=>{
      this.trainers = data;
      console.log(this.trainers);
    }, err =>console.log(err))

  }
  getProject(){
    this.id =this.activatedRoute.snapshot.params['id'];
    this.projectService.geProject(this.id).subscribe(data=>{
      this.project = data;
      console.log(this.project);
    }, err =>console.log(err))
  }
  goToView(id:number){
    this._router.navigate(['view-trainer', id]);
  }
  goToAdd(id:number){
    this._router.navigate(['addTrainersTo',id])
  }
  goBack(){
    this._router.navigate(['/view-project', this.id]);
  }
  deleteTrainer(id:number){
    this.trainersService.removeTrainerFrom(id,this.id,this.project).subscribe(data=>{
      this.getTrainers();
    }, err=>console.log(err));
  }
}
