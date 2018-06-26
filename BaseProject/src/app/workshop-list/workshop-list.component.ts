import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {
  name: string;
  date = new Date(2018, 6, 27,10,0);
  time : string;
  price : string;
  location : string;


  constructor() { }

  ngOnInit() {
    this.name  = "Angular Connect";
    this.price = "599.99";
    this.time = "10:00"
    this.location = "1057 DT London, England";

  }

}
