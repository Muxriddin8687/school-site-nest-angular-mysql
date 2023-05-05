import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, find, map, pluck, tap } from 'rxjs';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  route = inject(ActivatedRoute);
  getDataService = inject(GetDataService);

  id = this.route.snapshot.paramMap.get('id');
  newsData: any;

  ngOnInit(): void {
    this.getDataService
        .news()
        .pipe(
          map(news => news.filter(
            (item: any) => item.id == this.id
          ))
        )
        .subscribe(res => this.newsData = res);   
  }
}
