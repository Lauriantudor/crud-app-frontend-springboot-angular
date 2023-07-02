import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from './trainer';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private baseUrl= "http://localhost:8080/trainers"
  constructor(private _httpClient: HttpClient) { }

  getTrainers(): Observable<Trainer[]> {
    return this._httpClient.get<Trainer[]>(`${this.baseUrl}`)
  }
  getTrainer(id:number): Observable<Trainer> {
    return this._httpClient.get<Trainer>(`${this.baseUrl}/${id}`)
  }
  updateTrainer(trainer:Trainer,id:number): Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${id}`,trainer)
  }
  createTrainer(trainer:Trainer): Observable<Object>{
    return this._httpClient.post<Object>(`${this.baseUrl}`,trainer)
  }

  deleteTrainer(id:number):Observable<any>{
    return this._httpClient.delete<any>(`${this.baseUrl}/${id}`)
  }
  addTrainerTo(trainerId:number, projectId:number, project:Project):Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${trainerId}/assigned/${projectId}`,project);
  } 
  removeTrainerFrom(trainerId:number, projectId:number, project:Project):Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${trainerId}/remove/${projectId}`,project);
  }


 

}
