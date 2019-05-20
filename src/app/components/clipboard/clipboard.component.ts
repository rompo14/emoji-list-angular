import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {
  @Input()
  public text;

  constructor() {
  }

  ngOnInit() {
  }

}
