import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  getDataService = inject(GetDataService);

  galleryList$: any = this.getDataService.gallery();
}
