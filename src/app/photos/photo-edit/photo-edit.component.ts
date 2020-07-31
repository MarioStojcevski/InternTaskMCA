import { PhotoService } from 'src/app/photos/PhotoService/photo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../../photo'

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {

  title: string = "Edit this photo";
  photo: IPhoto;
  errMsg: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PhotoService
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param){
      const id = +param;
      this.getF(id);
    }
  }

  getF(id: number) {
    this.service.getPhoto(id).subscribe({
      next: (photo) => (this.photo = photo),
      error: (err) => (this.errMsg = err)
    });
  }

  onBack(){
    this.router.navigate(['/photos']);
  }

  onSave(){
    this.service.updatePhoto(this.photo);
    console.log("The picture has been edited!");
    this.router.navigate(['/photos']);
  }

}
