import {Component, OnInit} from '@angular/core';
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
  galleryOptionsTwo;

  constructor() {
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
        imageArrows: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,

      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/mapy1.PNG',
        medium: 'assets/images/mapy1.PNG',
        big: 'assets/images/mapy1.PNG'
      },
      {
        small: 'assets/images/mapy2.PNG',
        medium: 'assets/images/mapy2.PNG',
        big: 'assets/images/mapy2.PNG'
      },
      {
        small: 'assets/images/mapy3.PNG',
        medium: 'assets/images/mapy3.PNG',
        big: 'assets/images/mapy3.PNG'
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
      }
    ];


  }

}
