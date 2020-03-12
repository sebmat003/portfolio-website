import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let doc = document.documentElement.scrollTop;
    if (doc > 300 && doc < 1400 ) {
      document.getElementById('angular').classList.add('width-2');
      document.getElementById('html').classList.add('width-3');
      document.getElementById('css').classList.add('width-3');
      document.getElementById('typescript').classList.add('width-3');
      document.getElementById('photoshop').classList.add('width-4');
      document.getElementById('illustrator').classList.add('width-3');
    } else {
      document.getElementById('angular').classList.remove('width-2');
      document.getElementById('html').classList.remove('width-3');
      document.getElementById('css').classList.remove('width-3');
      document.getElementById('typescript').classList.remove('width-3');
      document.getElementById('photoshop').classList.remove('width-4');
      document.getElementById('illustrator').classList.remove('width-3');
    }
  }

}
