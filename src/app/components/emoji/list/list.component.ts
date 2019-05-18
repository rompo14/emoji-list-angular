import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  public list: object = {};
  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.firstChild.data);
  }
}
