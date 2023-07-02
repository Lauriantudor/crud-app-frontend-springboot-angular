import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-add-trainers-of-project',
  templateUrl: './add-trainers-of-project.component.html',
  styleUrls: ['./add-trainers-of-project.component.css']
})
export class AddTrainersOfProjectComponent implements OnInit {
id!: number;
project!: Project;
trainers!:Trainer[];
  constructor(private projectService: ProjectService, 
    private _router: Router, private activatedRoute: ActivatedRoute,
    private trainerService: TrainerService
    ) { }
    
  ngOnInit(): void {
    this.getTrainers();
    this.getProject();
  }
  goBack(){
    this._router.navigate(['trainersFor',this.id])
  }
  getProject(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.projectService.geProject(this.id).subscribe(data=>{
      this.project = data;
      console.log(this.project);
    },err=>console.log(err))
  }
  addToProject(trainerId:number) {
    this.trainerService.addTrainerTo(trainerId,this.id,this.project).subscribe(data=>{
      this.goBack();
    },err =>console.log(err))
  }

  getTrainers(){
    this.trainerService.getTrainers().subscribe(data =>{
      this.trainers = data;
    },err =>console.log(err))
  }
}
