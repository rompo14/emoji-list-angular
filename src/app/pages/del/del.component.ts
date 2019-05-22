import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
