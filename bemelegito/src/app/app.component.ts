import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Contributor } from './model/contributor';
import { ContributorService } from './service/contributor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bemelegito';



  eventSubscription = fromEvent(window, "scroll").subscribe(e => {
    const isBottom = document.body.offsetHeight - window.scrollY - 500 < 500;
    if (isBottom) {
      this.page++;
      this.contributorService.loadPage(this.page);

    }

  });

  page: number = 1;
  $list: Observable<Contributor[]> = this.contributorService.$list;

  constructor(private contributorService: ContributorService,
  ) { }

  ngOnInit() {
    this.contributorService.getAll(this.page).subscribe(() => { });
  }
}
