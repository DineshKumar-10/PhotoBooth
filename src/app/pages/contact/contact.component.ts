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

    const body = new URLSearchParams();

    Object.keys(form.value).forEach((key) => {
      body.append(key, form.value[key]);
    });

    fetch(
      'https://script.google.com/macros/s/AKfycbx6-NH2AUTyBtB8WTAULdFY2xGyXNNjcrPJAkOSh_8j064j93uscG2BZKR0gXN0aZYB/exec',
      {
        method: 'POST',
        body,
      }
    )
      .then(() => (this.success = true))
      .catch(() => alert('Submission failed'));
    form.reset();
    alert('Message sent successfully!');
  }
}
