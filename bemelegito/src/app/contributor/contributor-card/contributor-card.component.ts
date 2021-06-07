import { Component, Input, OnInit } from '@angular/core';
import { Contributor } from 'src/app/model/contributor';

@Component({
  selector: 'app-contributor-card',
  templateUrl: './contributor-card.component.html',
  styleUrls: ['./contributor-card.component.scss']
})
export class ContributorCardComponent implements OnInit {

  @Input() contributor: Contributor = new Contributor();

  constructor() { }

  ngOnInit(): void {
  }



}
