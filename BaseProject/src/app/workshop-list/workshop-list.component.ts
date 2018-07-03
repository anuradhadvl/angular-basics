import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {

  public workshops : [{
    id: 1,
    name: 'Angular Connect',
    date: '9/03/2034',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'someimage.jpg',
    location:{
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
    
  },
  {
    id: 2,
    name: 'ng-nl',
    date: '4/15/2037',
    time: '9:00 am',
    price: 950.00,
    imageUrl: '/app/assets/images/ng-nl.png',
    online: 'http://NLConvetion.com',
  },
  {
    id: 3,
      name: 'ng-conf 2037',
      date: '5/4/2037',
      time: '9:00 am',
      price: 759.00,
      imageUrl: '/app/assets/images/ng-conf.png',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      }
    },
    {
      id: 4,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8:00 am',
      price: 800.00,
      imageUrl: '/app/assets/images/basic-shield.png',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      }
    },
      {
        id: 5,
        name: 'ng-vegas',
        date: '2/10/2037',
        time: '9:00 am',
        price: 400.00,
        imageUrl: '/app/assets/images/ng-vegas.png',
        location: {
          address: 'The Excalibur',
          city: 'Las Vegas',
          country: 'USA'
        }
  }]

  constructor() { 
   
   }

  ngOnInit() {
    

  }

}
