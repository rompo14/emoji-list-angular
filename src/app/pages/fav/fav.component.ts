import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
