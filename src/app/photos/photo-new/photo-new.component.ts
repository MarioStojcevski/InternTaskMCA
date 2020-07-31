import { IPhoto } from 'src/app/photo';
import { PhotoService } from './../PhotoService/photo.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './photo-new.component.html',
  styleUrls: ['./photo-new.component.css']
})
export class PhotoNewComponent{

  title: string = "Upload New Photo";
  errMsg: string = "";
  photo : IPhoto;


  constructor(
    private service : PhotoService,
    private router: Router) { }

  onBack(): void {
    this.router.navigate(['/photos']);
  }

  upload(photoDetails){
    this.service.uploadNewPhoto(photoDetails);
    console.log("The new picture has been uploaded!");
    this.router.navigate(['/photos']);
  }

}
