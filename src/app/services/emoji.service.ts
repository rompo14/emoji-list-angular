import {Inject, Injectable, InjectionToken} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators';

export const EMOJI_URL = new InjectionToken('url');
export interface Emoji {
  all: object;
  fav: object;
  del: object;
}

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private data = {
    all: JSON.parse(localStorage.getItem('emojis')),
    fav: {},
    del: {}
  };

  constructor(
    private httpClient: HttpClient,
    @Inject(EMOJI_URL) private url: string,
  ) {
  }

  public getHttpData(): Observable<any> {
    return this.httpClient.get<object>(this.url);
  }

  public getData(route): Observable<any> {
    switch (route) {
      case 'all':
        const httpData = this.getHttpData();
        httpData.subscribe((data) => {
          if (this.data.all == null) {
            localStorage.setItem('emojis', JSON.stringify(data));
            this.data.all = data;
          }
        });
        return of(this.data.all).pipe(
          switchMap(() => httpData)
        );
      case 'fav':
        return of(this.data.fav);
      case 'del':
        return of(this.data.del);
    }
  }
}
