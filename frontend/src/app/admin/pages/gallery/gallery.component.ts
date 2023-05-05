import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  http = inject(HttpClient);
  api = environment.api + 'gallery';
  imgUrl = './assets/images/gallery/';

  imageList: any;


  load() {
    this.http
        .get(this.api)
        .subscribe( res => this.imageList = res);
  }

  onFileChange(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
        .post(`${this.api}`, formData)
        .subscribe(res => {
          this.load();
        });
  }


  deleteImage(name: String) {
    this.http
        .delete(this.api + '/' + name)
        .subscribe(() => this.load());
  }


  ngOnInit(): void {
    this.load();
  }
}
