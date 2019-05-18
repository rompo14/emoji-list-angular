import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EmojiService, EMOJI_URL } from './services/emoji.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/emoji/list/list.component';
import { ItemComponent } from './components/emoji/item/item.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { FavComponent } from './pages/fav/fav.component';
import { DelComponent } from './pages/del/del.component';
import { TitleComponent } from './components/title/title.component';
import { KeysPipe } from './pipes/keys.pipe';

export const routes: Route[] = [
  { path: 'fav', component: FavComponent, data: { title: 'Любимые' } },
  { path: 'del', component: DelComponent, data: { title: 'Удаленные' } },
  { path: '', component: HomeComponent, data: { title: 'Все' } }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    ItemComponent,
    SearchComponent,
    HomeComponent,
    FavComponent,
    DelComponent,
    TitleComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    EmojiService,
    { provide: EMOJI_URL, useValue: 'https://api.github.com/emojis' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
