import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contributor } from '../model/contributor';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContributorService extends BaseService<Contributor> {

  //https://api.github.com/repos/angular/angular/contributors?per_page=100
  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.entity = `repos/angular/angular/contributors?per_page=100`;
  }
}
