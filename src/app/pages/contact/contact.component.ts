import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContactService } from 'src/app/contactservice/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  success = false;

  form = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

 
  submit(form: any) {
    this.contactService.sendData(form.value).subscribe({
      next: (res: string) => {
        alert('Message sent successfully!');
        form.reset();
      },
      error: (err: HttpErrorResponse) => {   // ✅ FIX
        console.error(err);
        alert('Something went wrong');
      }
    });
  }
  

  
}
