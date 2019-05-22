import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';
import {SearchPipe} from '../../../pipes/search.pipe';
import {ClipboardComponent} from '../../clipboard/clipboard.component';
import {ClipboardModule} from 'ngx-clipboard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EMOJI_URL, EmojiService} from '../../../services/emoji.service';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable, of} from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

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
        ListComponent,
        SearchPipe,
        ClipboardComponent,
      ],
      imports: [
        ClipboardModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        EmojiService,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: EmojiService, useValue: emojiData},
        {provide: EMOJI_URL, useValue: 'https://api.github.com/emojis'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
