import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/contactservice/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  success = false;

  form = {
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    time: '',
    city: '',
    state: '',
    pincode: '',
    message: '',
  };

  constructor(private contactService: ContactService) {}

 submit(form: NgForm) {
  if (form.invalid) {
    alert('Please fill all required fields');
    return;
  }

  this.contactService.sendData(form.value).subscribe({
    next: () => {
      this.success = true;
      form.resetForm();
      alert('Message sent successfully!');
    },
    error: () => {
      alert('Submission failed');
    }
  });
}

  


}