import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmojiService } from '../../services/emoji.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list: object = {};

  constructor(
    private emoji: EmojiService,
    private activatedRoute: ActivatedRoute
  ) {
    if (JSON.parse(localStorage.getItem('allEmojis')) == null) {
      emoji.getHttpData().subscribe((data) => {
        this.list = data;
        localStorage.setItem('allEmojis', JSON.stringify(data));
      });
    } else {
      this.list = JSON.parse(localStorage.getItem('allEmojis'));
    }
  }

  ngOnInit() {
    console.log(this.activatedRoute);
  }
}
