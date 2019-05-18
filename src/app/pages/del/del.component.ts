import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this);
  }
}
