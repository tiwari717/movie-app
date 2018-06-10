import { ChangeDetectorRef, OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {
  }

}
