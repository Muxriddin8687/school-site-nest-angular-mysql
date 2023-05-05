import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent {
  getDataService = inject(GetDataService);

  news: Array<any> = [];
  index = 0;

  ngOnInit(): void {
    this.getDataService
        .news()
        .forEach(i => i.forEach(item => {
          if(this.index < 4)
            this.news.push(item);

          this.index++;
        }));
  }
}
