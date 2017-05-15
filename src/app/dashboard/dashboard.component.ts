import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Job } from '../job'
import { JobService } from '../job.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs: Job[];
  detailUrl: string;
  keyword: string;
  private baseUrl = 'http://galab.alwaysdata.net/jobsCH/rest/api2.php/jobs?transform=true&order=id,desc';
  private jobsUrl: string;


  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    //private router: Router,
    //private location: Location
  ) { }

  getJobs(url): void {
    this.jobService
      .getJobs(url)
      .then(jobs => this.jobs = jobs);
  }

  changeUrl(params) {
    if (params.hasOwnProperty('keyword')) {
      this.jobsUrl = this.baseUrl + '&filter[]=title,cs,' + params['keyword'];
    } else {
      this.jobsUrl = this.baseUrl;
    }

    // insert pagination:
    this.jobsUrl = this.jobsUrl + '&page=' + params['page'] + ',50';

    this.getJobs(this.jobsUrl);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.changeUrl(params);
      console.log(params)
    });

     /*this.router.events.subscribe(path => {
       console.log(path);
     }); */


    this.detailUrl = 'https://www.job-room.ch/pages/job/jobResult.xhtml#';

  }

}
