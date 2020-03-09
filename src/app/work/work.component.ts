import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  images = [
    {
      img: '../../../assests/images/mapy1.jpg', thumb: '../../../assests/images/mapy1.jpg', description: 'Mapy'
    },
    {
      img: '../../../assests/images/mapy1.jpg', thumb: '../../../assests/images/mapy1.jpg', description: 'Mapy'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
