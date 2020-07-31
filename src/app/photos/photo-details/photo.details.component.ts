import { IPhoto } from '../../photo';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from './../PhotoService/photo.service';

@Component({
  templateUrl: './photo.details.component.html',
})

export class PhotoDetailsComponent implements OnInit{

  pagetitle : string = "Imitary";
  currentPhoto : IPhoto;
  errorMsg : string;
  imageWidth: number = 300;
  imageMargin: number = 2;


  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service : PhotoService 
  ){}

  ngOnInit() : void {
    console.log("Hello World!");
    const param = this.route.snapshot.paramMap.get('id');
    if (param){
      const id = +param;
      this.getPhoto(id);
    }
  }

  getPhoto(id: number){
    this.service.getPhoto(id).subscribe({
      next: photo => this.currentPhoto = photo,
      error: err => this.errorMsg = err
    })
  }

  onBack(): void {
    this.router.navigate(['/photos']);
  }

  deletePhoto(){
    this.service.deletePhoto(this.currentPhoto);
    this.router.navigate(['/photos']);
  }
}
