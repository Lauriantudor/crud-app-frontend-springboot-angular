import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';
import { error } from 'console';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  id!: number;
  project!: Project;
  trainer!: Trainer;

  trainers!:Trainer[];
  constructor(private projectService:ProjectService, private _router:Router,
              private activatedRoute: ActivatedRoute, private trainerService:TrainerService) { }

  ngOnInit(): void {
    
      this.getProject();
  }

  getProject(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.projectService.geProject(this.id).subscribe(data => {
      this.project = data;
      
      console.log(this.project);
    }, err => console.log(err));
  }

  goToTrainesOf(id:number){
    this._router.navigate(['/trainersFor', id]);
  }
  goToParticipantsOf(id:number){
    this._router.navigate(['/participantsFor', id]);
  }
}
