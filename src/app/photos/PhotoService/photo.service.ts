import { IPhoto } from '../../photo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class PhotoService{

    private url: string = "http://jsonplaceholder.typicode.com/photos";

    constructor(private http : HttpClient){

    }

    getPhotos(): Observable<IPhoto[]> {
        return this.http.get<IPhoto[]>(this.url);
    }

    getPhoto(id : number) : Observable<IPhoto> {
        return this.getPhotos().pipe(
            map( (photos: IPhoto[]) => photos.find(p => p.id === id))
        );
    }

    uploadNewPhoto(photo: IPhoto) {
      fetch(this.url, {
        method: 'POST',
        body: JSON.stringify({
          albumId: +photo.albumId,
          title: photo.title,
          url: photo.url,
          thumbnailUrl: photo.thumbnailUrl
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    deletePhoto(photo: IPhoto){
      var photoToDelete: string = this.url;
      photoToDelete += "/" + photo.id;

      fetch(photoToDelete, {
        method: 'DELETE',
      }).then((response) => console.log(response));
    }

    updatePhoto(photo: IPhoto) {
      var photoToUpdate = this.url;
      photoToUpdate += "/" + photo.id;

      fetch(photoToUpdate, {
        method: 'PUT',
        body: JSON.stringify({
          id: photo.id,
          title: photo.title,
          albumId: photo.albumId
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
}
