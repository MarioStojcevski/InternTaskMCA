import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './photo-list/gallery.component';
import { PhotoDetailsComponent } from './photo-details/photo.details.component';
import { PhotoNewComponent } from './photo-new/photo-new.component';
import { PhotoRemoveComponent } from './photo-remove/photo-remove.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { PhotoService } from './PhotoService/photo.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoNewComponent,
    PhotoRemoveComponent,
    GalleryComponent,
    PhotoEditComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'photos', component: GalleryComponent },
      { path: 'photos/upload', component: PhotoNewComponent },
      { path: 'photos/:id', component: PhotoDetailsComponent },
      { path: 'photos/delete/:id', component: PhotoRemoveComponent },
      { path: 'photos/edit/:id', component: PhotoEditComponent },
    ])
  ],
  providers: [
    PhotoService
  ]
})
export class PhotoModule {}
