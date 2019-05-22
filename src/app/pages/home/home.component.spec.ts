import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ListComponent} from '../../components/emoji/list/list.component';
import {SearchPipe} from '../../pipes/search.pipe';
import {ClipboardModule} from 'ngx-clipboard';
import {ClipboardComponent} from '../../components/clipboard/clipboard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EMOJI_URL, EmojiService} from '../../services/emoji.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
        HomeComponent,
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
