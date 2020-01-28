import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
declare var fabric: any;
@Component({
  selector: 'lib-cover-preview',
  templateUrl: './cover-preview.component.html',
  styleUrls: ['./cover-preview.component.css']
})
export class CoverPreviewComponent implements OnInit {

  private upperCanvas: any;
  private loweCanvas: any;
  public layers: Array<any>;

  @Input()
  public config: CoverPreviewConfig;

  constructor() {
    this.layers = [];
  }

  ngOnInit(): void {
    this.upperCanvas = new fabric.Canvas('cover-preview-upper-canvas', {
      width: 400,
      height: 500,
      containerClass: 'cover-preview-upper-canvas'
    });
    this.loweCanvas = new fabric.Canvas('cover-preview-lower-canvas', {
      width: 400,
      height: 500,
      containerClass: 'cover-preview-lower-canvas'
    });
  }

  ngAfterViewInit() {
    
  }

  onUploadCover(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    
    fileReader.onloadend = (x) => {
      this.addCover(fileReader.result);
    }
    fileReader.readAsDataURL(file);
  }

  addCover(imageData) {
    
    fabric.Image.fromURL(imageData, (phoneImage) => {
      phoneImage.scaleToHeight(500);
      phoneImage.scaleToWidth(400);
      phoneImage.set({
        opacity: 0.7
      });
      this.upperCanvas.add(phoneImage);
     
    });
  }

  applyCover() {
    let cover = this.upperCanvas.getActiveObject();
    this.loweCanvas.add(cover);
    this.upperCanvas.clear();
  }

}

export class CoverPreviewConfig {
  phoneURL: string;
  coverURL: string;
}
