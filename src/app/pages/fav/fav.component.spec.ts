import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FavComponent} from './fav.component';
import {Observable, of} from 'rxjs';
import {SearchPipe} from '../../pipes/search.pipe';
import {ListComponent} from '../../components/emoji/list/list.component';
import {ClipboardComponent} from '../../components/clipboard/clipboard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {EMOJI_URL, EmojiService} from '../../services/emoji.service';
import {ClipboardModule} from 'ngx-clipboard';

describe('FavComponent', () => {
  let component: FavComponent;
  let fixture: ComponentFixture<FavComponent>;

  const fakeActivatedRoute = {
    data: of([
      {id: 'fav', title: 'Любимые'},
      {id: 'del', title: 'Удаленные'},
      {id: 'all', title: 'Все'}
    ])
  };

  const emojiData = {
    getData(): Observable<any[]> {
      return of([]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavComponent,
        ListComponent,
        SearchPipe,
        ClipboardComponent
      ],
      imports: [
        ClipboardModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: EMOJI_URL, useValue: 'https://api.github.com/emojis'},
        {provide: EmojiService, useValue: emojiData},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
