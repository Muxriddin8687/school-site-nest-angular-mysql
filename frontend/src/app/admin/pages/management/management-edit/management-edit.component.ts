import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-management-edit',
  templateUrl: './management-edit.component.html',
  styleUrls: ['./management-edit.component.scss']
})
export class ManagementEditComponent {
  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  api = environment.api + 'team';
  imagePath = './assets/images/team/';


  // member propertys
  fullname: String = '';
  position: String = '';
  text: String = '';
  image: String = '';


  load() {
    if (this.id != '0')
      this.http.get(this.api + '/' + this.id).subscribe((res: any) => {
        if(res.legth != 0) {
          this.fullname = res[0]['fullname'];
          this.position = res[0]['position'];
          this.text = res[0]['text'];
          this.image = res[0]['image'];
        } else {
          this.router.navigateByUrl("/admin/management");
        }
      });
    else
      this.router.navigateByUrl("/admin/management");
  }


  // image upload for member
  onFileChange(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
      .post(`${this.api}/upload/${this.id}`, formData)
      .subscribe(res => {
        this.load();
      });
  }


  update(form: NgForm) {
    this.http.patch(this.api + '/' + this.id, form.value).subscribe((res) => {
      this.router.navigateByUrl("/admin/management");
    });
  }


  ngOnInit(): void {
    this.load();
  }
}
