import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmojiService } from '../../../services/emoji.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list: object = {};

  constructor(
    private emojiService: EmojiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(route => {
      this.emojiService.getData(route.id).subscribe(data => {
        this.list = data;
      });
    });
  }
}
