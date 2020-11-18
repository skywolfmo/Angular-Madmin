import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  urlFragments: string[] = [];
  @ViewChild('sidenav') public sidenav: MatSidenav;


  constructor(private sideNavService: SidenavService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        console.log(event);
        let tree: UrlTree = this.router.parseUrl(event.url);
        let segmentGroup: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        this.urlFragments = [];

        if (segmentGroup && segmentGroup.segments) {
          let segments: UrlSegment[] = segmentGroup.segments;
          segments.forEach(s => {
            this.urlFragments.push(s.path);
          });
        }
        // returns 'team'
        console.log(this.urlFragments)
        // returns {id: 33}

      }



    })
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.sideNavService.sideNavToggleSubject.subscribe((value) => {
      if (value === "toggle") {
        this.sidenav.toggle();
      }
    });
  }


}
