import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBack {

  private urlfilm = 'http://localhost:3000/film';
  private urluser = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }


  getAllFilms(): Observable<any> {
    return this.http.get(`${this.urlfilm}`);
  }

  addFilm(film: any): Observable<any> {
    return this.http.post(`${this.urlfilm}`, film);
  }


  disableUser(uid: string): Observable<any> {
    return this.http.post(`${this.urluser}/${uid}/disable`, {});
  }


  enableUser(uid: string): Observable<any> {
    return this.http.post(`${this.urluser}/${uid}/enable`, {});
  }




}
