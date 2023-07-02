import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  id!: number;
  project: Project= new Project();
  constructor(private projectService: ProjectService,
              private activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.projectService.geProject(this.id).subscribe(data => {
      this.project = data;
    }, err => console.log(err));
  }
  onSubmit(data: any) {

    this.project=data;
    this.projectService.updateProject(this.project,this.id).subscribe(data => {
      this.goToProjects();
    },err=> console.log(err));
  }
  goToProjects(){
    this._router.navigate(['/projects'])
  }

}
