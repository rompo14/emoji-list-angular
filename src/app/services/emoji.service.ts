import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export const EMOJI_URL = new InjectionToken('url');

export interface Emoji {
  name: string;
  value: string;
  status: string;
}

export interface Emojis extends Array<Emoji> {
}

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private readonly data: Emojis = [];
  public filter: string;

  constructor(
    private httpClient: HttpClient,
    @Inject(EMOJI_URL) private url: string,
  ) {
    if (JSON.parse(localStorage.getItem('emojisData')) == null) {
      this.getHttpData().subscribe(data => {
        for (const prop in data) {
          if (data.hasOwnProperty(prop)) {
            this.data.push({
              name: prop,
              value: data[prop],
              status: 'all'
            });
          }
        }
        localStorage.setItem('emojisData', JSON.stringify(this.data));
      });
    } else {
      this.data = JSON.parse(localStorage.getItem('emojisData'));
    }
  }

  public getHttpData(): Observable<any> {
    return this.httpClient.get<object>(this.url);
  }

  public getData(route): Observable<any> {
    switch (route) {
      case 'all':
        return of(this.data.filter(item => {
          return item.status !== 'del';
        }));
      case 'fav':
        return of(this.data.filter(item => {
          return item.status === 'fav';
        }));
      case 'del':
        return of(this.data.filter(item => {
          return item.status === 'del';
        }));
    }
  }

  public toggleFav(item) {
    item.status = item.status === 'all' ? 'fav' : 'all';
    localStorage.setItem('emojisData', JSON.stringify(this.data));
  }

  public del(item) {
    item.status = 'del';
    localStorage.setItem('emojisData', JSON.stringify(this.data));
  }

  public restore(item) {
    item.status = 'all';
    localStorage.setItem('emojisData', JSON.stringify(this.data));
  }
}
