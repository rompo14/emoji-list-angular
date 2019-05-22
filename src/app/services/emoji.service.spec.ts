import {TestBed} from '@angular/core/testing';

import {EmojiService, EMOJI_URL} from './emoji.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EmojiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EmojiService,
      {provide: EMOJI_URL, useValue: 'https://api.github.com/emojis'}
    ],
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: EmojiService = TestBed.get(EmojiService);
    expect(service).toBeTruthy();
  });
});
