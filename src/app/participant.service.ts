import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from './participant';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private baseUrl="http://localhost:8080/participants";
  constructor(private _httpClient: HttpClient) { }

  getParticipants(): Observable<Participant[]> {
    return this._httpClient.get<Participant[]>(`${this.baseUrl}`)
  }
  getParticipant(id: number): Observable<Participant> {
    return this._httpClient.get<Participant>(`${this.baseUrl}/${id}`)
  }
  updateParticipant(participant: Participant, id: number): Observable<Object> {
    return this._httpClient.put(`${this.baseUrl}/${id}`,participant)
  }
  createParticipant(participant: Participant): Observable<Object>{
    return this._httpClient.post<Object>(`${this.baseUrl}`,participant)
  }
  deleteParticipant(id:number):Observable<any>{
    return this._httpClient.delete<any>(`${this.baseUrl}/${id}`)
  }
  addParticipantTo(participantId:number, projectId:number, project:Project):Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${participantId}/assigned/${projectId}`,project)
  }
  removeParticipantFrom(participantId:number, projectId:number, project:Project):Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${participantId}/remove/${projectId}`,project)
  }

}
