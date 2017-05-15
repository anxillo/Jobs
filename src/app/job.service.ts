import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Job } from './job'

@Injectable()
export class JobService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // private jobsUrl = 'http://galab.alwaysdata.net/jobsCH/rest/api2.php/jobs?transform=true&order=id,desc';  // URL to web api

  constructor(private http: Http) { }

  getJobs(url): Promise<Job[]> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().jobs as Job[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
