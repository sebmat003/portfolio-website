import {Component, HostListener, OnInit} from '@angular/core';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  galleryImages;
  galleryDesign;
  galleryOptions;
  innerWidth;

  constructor() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Fade,
        preview: false,
        thumbnailsArrows: true,
        imageArrows: true,
        imagePercent: 100,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100px',
        height: '100px',
        imagePercent: 80,
        thumbnailsColumns: 3,
        // thumbnailsPercent: 100,
        // thumbnailsMargin: 40,
        // thumbnailMargin: 40
      },
      // max-width 400
      {
        breakpoint: 400,

      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/mapy1.jpg',
        medium: 'assets/images/mapy1.jpg',
        big: 'assets/images/mapy1.jpg'
      },
      {
        small: 'assets/images/mapy2.jpg',
        medium: 'assets/images/mapy2.jpg',
        big: 'assets/images/mapy2.jpg'
      },
      {
        small: 'assets/images/mapy3.jpg',
        medium: 'assets/images/mapy3.jpg',
        big: 'assets/images/mapy3.jpg'
      },
      {
        small: 'assets/images/mapy4.PNG',
        medium: 'assets/images/mapy4.PNG',
        big: 'assets/images/mapy4.PNG'
      },
      {
        small: 'assets/images/mapy5.PNG',
        medium: 'assets/images/mapy5.PNG',
        big: 'assets/images/map5.PNG'
      }
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
