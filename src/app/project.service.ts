import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { Trainer } from './trainer';
import { Participant } from './participant';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl="http://localhost:8080/projects";
  constructor(private _httpClient: HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this._httpClient.get<Project[]>(`${this.baseUrl}`)
  }
  geProject(id:number): Observable<Project>{
    return this._httpClient.get<Project>(`${this.baseUrl}/${id}`)    
    
  }
  getTrainersFromProject(id:number): Observable<Trainer[]>{
    return this._httpClient.get<Trainer[]>(`${this.baseUrl}/projectTrainer/${id}`)
  }
  getParticipantsFromProject(id:number): Observable<Participant[]>{
    return this._httpClient.get<Participant[]>(`${this.baseUrl}/projectParticipant/${id}`)
  }

  updateProject(project:Project, id:number): Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${id}`,project)
  }

  createProject(project: Project): Observable<Object>{
    return this._httpClient.post<Object>(`${this.baseUrl}`,project)
  }

  deleteProject(id: number): Observable<any>{
    return this._httpClient.delete<any>(`${this.baseUrl}/${id}`)
  }
}
