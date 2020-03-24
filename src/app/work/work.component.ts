import {Component, HostListener, OnInit} from '@angular/core';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  galleryDesign;
  innerWidth;

  images: GalleryItem[];

  constructor() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }

  ngOnInit() {
    this.images = [
      new ImageItem({src: 'assets/images/mapy1.jpg', thumb: 'assets/images/mapy1.jpg'}),
      new ImageItem({src: 'assets/images/mapy2.jpg', thumb: 'assets/images/mapy2.jpg'}),
      new ImageItem({src: 'assets/images/mapy3.jpg', thumb: 'assets/images/mapy3.jpg'}),
      new ImageItem({src: 'assets/images/mapy4.jpg', thumb: 'assets/images/mapy4.jpg'}),
      new ImageItem({src: 'assets/images/mapy5.jpg', thumb: 'assets/images/mapy5.jpg'}),
    ];

    this.galleryDesign = [
      {
        small: 'assets/images/sheldon.jpg',
        medium: 'assets/images/sheldon.jpg',
        big: 'assets/images/sheldon.jpg'
      },
      {
        small: 'assets/images/kid-with-rose.jpg',
        medium: 'assets/images/kid-with-rose.jpg',
        big: 'assets/images/kid-with-rose.jpg'
      },
      {
        small: 'assets/images/brosmoke.jpg',
        medium: 'assets/images/brosmoke.jpg',
        big: 'assets/images/brosmoke.jpg'
      },
      {
        small: 'assets/images/brosmoke-cartoon.jpg',
        medium: 'assets/images/brosmoke-cartoon.jpg',
        big: 'assets/images/brosmoke-cartoon.jpg'
      },
      {
        small: 'assets/images/logos.jpg',
        medium: 'assets/images/logos.jpg',
        big: 'assets/images/logos.jpg'
      },
      {
        small: 'assets/images/snowman.jpg',
        medium: 'assets/images/snowman.jpg',
        big: 'assets/images/snowman.jpg'
      }
    ];


  }

}
