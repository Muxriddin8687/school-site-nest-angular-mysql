import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  http = inject(HttpClient);
  api = environment.api + 'news';
  newsList: any;


  load() {
    this.http.get(this.api).subscribe(res => this.newsList = res);
  }


  delete(id: number, imageName: string) {
    this.http.delete(this.api + '/' + id + '?imageName=' + imageName).subscribe((res) => {
      this.load();
    });
  }


  save(form: NgForm) {
    this.http.post(this.api, form.value).subscribe((res) => {
      this.load();
      form.reset();
    });
  }



  ngOnInit(): void {
    this.load();
  }
}
