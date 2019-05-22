import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TitleComponent} from './components/title/title.component';
import {NavComponent} from './components/nav/nav.component';
import {KeysPipe} from './pipes/keys.pipe';
import {SearchPipe} from './pipes/search.pipe';
import {FavComponent} from './pages/fav/fav.component';
import {HomeComponent} from './pages/home/home.component';
import {DelComponent} from './pages/del/del.component';
import {ListComponent} from './components/emoji/list/list.component';
import {SearchComponent} from './components/search/search.component';
import {ClipboardComponent} from './components/clipboard/clipboard.component';
import {routes} from './app.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {BrowserModule} from '@angular/platform-browser';
import {EMOJI_URL, EmojiService} from './services/emoji.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        ListComponent,
        SearchComponent,
        HomeComponent,
        FavComponent,
        DelComponent,
        TitleComponent,
        KeysPipe,
        SearchPipe,
        ClipboardComponent
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ClipboardModule
      ],
      providers: [
        EmojiService,
        {provide: EMOJI_URL, useValue: 'https://api.github.com/emojis'}
      ],
    }).compileComponents();
  }));

  it('should create app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComp = fixture.debugElement.componentInstance;
    expect(appComp).toBeTruthy();
  });
});
