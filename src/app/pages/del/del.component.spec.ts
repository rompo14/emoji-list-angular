import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DelComponent} from './del.component';
import {SearchPipe} from '../../pipes/search.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {EMOJI_URL, EmojiService} from '../../services/emoji.service';
import {Observable, of} from 'rxjs';
import {ListComponent} from '../../components/emoji/list/list.component';
import {ClipboardComponent} from '../../components/clipboard/clipboard.component';
import {ClipboardModule} from 'ngx-clipboard';

describe('DelComponent', () => {
  let component: DelComponent;
  let fixture: ComponentFixture<DelComponent>;

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
        DelComponent,
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
    fixture = TestBed.createComponent(DelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
