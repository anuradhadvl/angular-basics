import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { WorkshopListComponent } from '../workshop-list/workshop-list.component';

@Component({
  selector: 'add-workshop',
  templateUrl: './add-workshop.component.html',
  styleUrls: ['./add-workshop.component.css']
})
export class AddWorkshopComponent implements OnInit {

  @Input() newItem : Object;
  constructor() { }

  ngOnInit() {
  }
  addWorkshop(f,e){
   
   alert("button clicked");
  }
}
