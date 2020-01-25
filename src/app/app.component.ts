import { Component, OnInit, Input } from '@angular/core';
declare var fabric: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public canvasID: string;
  private canvas: any;

  @Input()
  set coverURL(URL) {
    if (URL) {
      fabric.Image.fromURL(URL, function (oImg) {
        this.canvas.add(oImg);
      });
    }
  }

  constructor() {
    this.canvasID = 'conver-preview-canvas-' + new Date().getTime();
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas(this.canvasID);
    console.log(this.canvas);
  }
  title = 'cover-preview';

}
