import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/photo';
import { PhotoService } from 'src/app/photos/PhotoService/photo.service';

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos: IPhoto[];
  errorMessage: string;
  imageMargin: number = 10;
  imageWidth: number = 250;

  constructor(private photoService : PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe({
      next: photos => this.photos = photos,
      error: err => this.errorMessage = err
    });

  }

  addPhoto(): void {

  }

  deletePhoto(): void {
  }

  editPhoto(): void {
  }

}
