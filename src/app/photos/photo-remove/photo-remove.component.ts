import { PhotoService } from '../PhotoService/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '../../photo';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './photo-remove.component.html',
  styleUrls: ['./photo-remove.component.css']
})
export class PhotoRemoveComponent implements OnInit {

  title: string = "Photo Details";
  errorMsg = "";
  photo: IPhoto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PhotoService
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getFun(id);
    }
  }

  getFun(id: number) {
    this.service.getPhoto(id).subscribe({
      next: (photo) => (this.photo = photo),
      error: (err) => (this.errorMsg = err),
    });
  }

  onBack() {
    this.router.navigate(['/photos']);
  }

  onDelete(){
    this.service.deletePhoto(this.photo);
    console.log("This picture has been removed!");
    this.router.navigate(['/photos']);
  }

}
