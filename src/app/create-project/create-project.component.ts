import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
project: Project= new Project();
  constructor(private projectService: ProjectService, private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(value: any){
    this.project = value;
    this.projectService.createProject(this.project).subscribe(data => {
     this.goToProjects();
    }, err => console.log(err));
    
  }

  goToProjects(){
    this._router.navigate(['/projects'])
  }
}
