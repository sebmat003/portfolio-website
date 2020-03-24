import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import { GalleryModule } from '@ngx-gallery/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    GalleryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
