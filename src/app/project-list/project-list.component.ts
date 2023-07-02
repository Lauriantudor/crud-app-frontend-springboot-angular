import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
projects!: Project[];
  constructor(private projectService: ProjectService, private _router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects(){
    this.projectService.getProjects().subscribe(data=>{
      this.projects = data;
     
    })
  }
  goToAdd(){
    this._router.navigate(['/create-project']);
  }
  goToUpdate(id:number){
    this._router.navigate(['/update-project',id]);
  }
  goToView(id:number){
    this._router.navigate(['/view-project',id]);
   
  }
  deleteProject(id:number){
    this.projectService.deleteProject(id).subscribe(data=>{
      this.getProjects();
    },err=>{
      alert("Acest proiect este asignat la cel putin un trainer sau participant") 
      console.log(err)
      
    });
  }
}
