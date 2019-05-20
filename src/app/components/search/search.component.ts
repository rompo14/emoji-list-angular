import {Component, OnInit} from '@angular/core';
import {EmojiService} from '../../services/emoji.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(
    private emojiService: EmojiService
  ) {
  }

  ngOnInit() {
  }
}
