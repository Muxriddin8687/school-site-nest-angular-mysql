import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { MessageService } from '../../services/message.service';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sanitizer = inject(DomSanitizer);
  getDataService = inject(GetDataService);
  sendMessageService = inject(MessageService);

  contact: any;
  show: boolean = false;


  setIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.contact[0]['map']
    );
  }

  ngOnInit(): void {
    this.getDataService.contact().subscribe(res => {
      this.contact = res;
    });
  }


  sendMessage(form: NgForm) {
    if (form.valid)
      this.sendMessageService
        .sendMessage(form.value)
        .subscribe((res: any) => {
          if (res[0].affectedRows > 0) {
            this.show = true;
            form.reset();
          } else {
            console.log('Serverda xatolik yuz berdi!');
          }
        });
  }
}
