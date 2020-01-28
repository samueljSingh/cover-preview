import { Component } from '@angular/core';
import { CoverPreviewConfig } from 'projects/cover-preview/src/public-api';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public config: CoverPreviewConfig;

  constructor(private domSanitizer: DomSanitizer){
    this.config = {
      phoneURL: 'assets/honor_7x.jpg',
      coverURL: 'assets/cover-min.jpg',
    };
  }
  

}
