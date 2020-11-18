import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string[];


  constructor(private sideNavService: SidenavService) {

  }
  ngOnInit(): void {

  }

  clickMenu() {
    this.sideNavService.toggle();
  }

}
