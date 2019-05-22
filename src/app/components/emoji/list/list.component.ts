import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Emojis, EmojiService} from '../../../services/emoji.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  public list: Emojis = [];
  public rt: string;

  constructor(
    private emojiService: EmojiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(route => {
      this.rt = route.id;
      this.emojiService.getData(route.id).subscribe(data => {
        this.list = data;
      });
    });
  }

  public hideOnRoute(item) {
    if (item.status !== 'fav') {
      return item.status === this.rt;
    }
    return true;
  }
}
