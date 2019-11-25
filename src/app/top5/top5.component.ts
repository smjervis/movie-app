import { Component, OnInit } from '@angular/core';
import { Top5Service } from "../top5.service"


@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css'],
  providers: [Top5Service]
})
export class Top5Component implements OnInit {

  public topList: Array<any>

  constructor(private _top5Service: Top5Service) {
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this._top5Service.getList().subscribe(data => {
      this.topList = data.movies;
    })
  }
}
