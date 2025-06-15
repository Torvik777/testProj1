import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly http = inject(HttpClient)
  private readonly baseAspiUrl = 'https://icherniakov.ru';

  constructor() {
  }
  
  getTestAcounts():Observable<Profile[]> {
   return this.http.get<Profile[]>(this.baseAspiUrl + '/yt-course/account/test_accounts') 
  }
}
