import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  public title;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = route.root.firstChild.snapshot.data.title;
      }
    });
  }

  ngOnInit() {
  }

}
