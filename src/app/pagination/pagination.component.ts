import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pageName: string;
  pageNumber: number;
  //pageKeyword: string;



  constructor(
    private router: Router,
    //private route: ActivatedRoute

  ) {
    router.events.subscribe( event => {
      if(event instanceof NavigationEnd) {
        let url = event.urlAfterRedirects.split('/');
        console.log(url);
        this.pageName = url[1];
        switch(this.pageName) {
          case 'search':
            this.pageNumber = Number(url[3]);
            this.pageName += '/' + url[2];
            //this.pageKeyword = url[2];
            break;
          case 'dashboard':
            this.pageNumber = Number(url[2]);
            //this.pageKeyword = '';
            break;
          default:
            this.pageNumber = 0;
            //this.pageKeyword = '';
        }
      }
    })
  }




  ngOnInit() {
    //console.log(this.route.pageKeyword);
  }

}
