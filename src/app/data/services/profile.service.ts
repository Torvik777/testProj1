import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly http = inject(HttpClient)
  private readonly baseApiUrl = 'https://icherniakov.ru/yt-course';

  constructor() {
  }
  
  getTestAcounts():Observable<Profile[]> {
   return this.http.get<Profile[]>(this.baseApiUrl + '/account/test_accounts') 
  }
}
