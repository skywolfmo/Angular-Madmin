import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit(): void {

  }

  clickMenu() {
    this.sideNavService.toggle();
  }
}
