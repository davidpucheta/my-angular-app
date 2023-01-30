import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private http: HttpClient,
  ) { }


  loadData(): Observable<any>{
    return this.http.get<any>('https://randomuser.me/api/')
    .pipe(
      map(data => data.results[0]),
      map(rawUSer => { return {
        name: rawUSer.name.first + " " + rawUSer.name.last,
        emailAddress: rawUSer.email
      }})
    );
  }
}
