import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ClipboardModule} from 'ngx-clipboard';

import {EmojiService, EMOJI_URL} from './services/emoji.service';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {ListComponent} from './components/emoji/list/list.component';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './pages/home/home.component';
import {FavComponent} from './pages/fav/fav.component';
import {DelComponent} from './pages/del/del.component';
import {TitleComponent} from './components/title/title.component';
import {KeysPipe} from './pipes/keys.pipe';
import {SearchPipe} from './pipes/search.pipe';
import {ClipboardComponent} from './components/clipboard/clipboard.component';

export const routes: Route[] = [
  {path: 'fav', component: FavComponent, data: {id: 'fav', title: 'Любимые'}},
  {path: 'del', component: DelComponent, data: {id: 'del', title: 'Удаленные'}},
  {path: '', component: HomeComponent, data: {id: 'all', title: 'Все'}}
];

@NgModule({
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
