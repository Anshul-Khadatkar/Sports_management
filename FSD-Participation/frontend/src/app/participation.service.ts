import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ParticipationService {
  private baseUrl: string = `${environment.apiUrl}/data`;
  constructor(private http: HttpClient) {}

  // Get participation data
  getParticipation(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  // Update participation data
  updateParticipation(p_id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${p_id}`, data);
  }
}
