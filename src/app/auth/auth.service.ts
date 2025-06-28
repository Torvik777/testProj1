import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, from, take, tap } from 'rxjs';
import { TokenResponse } from './auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  private readonly baseApiUrl = 'https://icherniakov.ru/yt-course/auth';

  private token: string | null = null;
  private refreshToken: string | null = null;


  constructor() { 
    // тут вчився управління потоками
    // from([1, 2, 3, 4, 5, 6, 7, 8, 9]).pipe(
    //   map((val: number) => { return val * 2 }),
    //   tap((val) => {
    //     console.log(`${val} - tapval`);
    //   }),
    //   take(2)
    // ).subscribe((val)=>{
    //   console.log(val);
    // })

  }

  get isAuth() {
    return !!this.token;
  }



  login(playload: { username: string, password: string }) {
    const formData: FormData = new FormData();
    formData.append('username', playload.username);
    formData.append('password', playload.password);
    return this.http.post<TokenResponse>(`${this.baseApiUrl}/token`, formData).pipe(
      tap((val) => {
        this.token = val.access_token;
        this.refreshToken = val.refresh_token;
      })
    );
  }

  
}
