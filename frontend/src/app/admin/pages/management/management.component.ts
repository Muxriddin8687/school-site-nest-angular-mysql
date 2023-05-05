import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  http = inject(HttpClient);
  api = environment.api + 'team';
  teamList: any;


  load() {
    this.http.get(this.api).subscribe(res => this.teamList = res);
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
