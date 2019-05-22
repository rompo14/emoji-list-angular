import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {EmojiService} from '../../services/emoji.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  constructor(
    private emojiService: EmojiService
  ) {
  }

  ngOnInit() {
  }
}
