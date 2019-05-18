import {Inject, Injectable, InjectionToken} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const EMOJI_URL = new InjectionToken('url');
@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  // public allEmojis: object = {};

  constructor(
    private httpClient: HttpClient,
    @Inject(EMOJI_URL) private url: string,
  ) {
    // this.setLocalStorage();
  }

  public getHttpData(): Observable<any> {
    return this.httpClient.get<object>(this.url);
  }

  // private setLocalStorage(): Observable<any> {
  //   if (JSON.parse(localStorage.getItem('allEmojis')) == null) {
  //     this.getHttpData().subscribe((data) => {
  //       this.allEmojis = data;
  //       localStorage.setItem('allEmojis', JSON.stringify(data));
  //     });
  //   } else {
  //     this.allEmojis = JSON.parse(localStorage.getItem('allEmojis'));
  //   }
  // }
}
