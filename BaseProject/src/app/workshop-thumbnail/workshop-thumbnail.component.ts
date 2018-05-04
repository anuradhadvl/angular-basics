import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'workshop-thumbnail',
  templateUrl: './workshop-thumbnail.component.html',
  styleUrls: ['./workshop-thumbnail.component.css']
})
export class WorkshopThumbnailComponent implements OnInit {

  @Input() workshop: any;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClickMe(){
    this.eventClick.emit(this.workshop.name);
  }

}
