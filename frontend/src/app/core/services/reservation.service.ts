
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ReservationRequest, ReservationResponse } from '../models/reservation.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {

  private base = `${environment.apiBaseUrl}/api/v1/reservations`;

  constructor(private http: HttpClient) {}

  create(req: ReservationRequest): Observable<ReservationResponse> {
    return this.http.post<ReservationResponse>(this.base, req);
  }

  cancel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }


  listMine(userId: number): Observable<ReservationResponse[]> {
    return this.http.get<ReservationResponse[]>(`${this.base}/user/${userId}`);
  }


  listAll(): Observable<ReservationResponse[]> {
    return this.http.get<ReservationResponse[]>(this.base);
  }

  getById(id: number): Observable<ReservationResponse> {
    return this.http.get<ReservationResponse>(`${this.base}/${id}`);
  }


  listByUserId(userId: number): Observable<ReservationResponse[]> {
    return this.http.get<ReservationResponse[]>(`${this.base}/user/${userId}`);
  }


  listByEmail(email: string): Observable<ReservationResponse[]> {
    return this.http.get<ReservationResponse[]>(`${this.base}/user/email/${email}`);
  }

}
