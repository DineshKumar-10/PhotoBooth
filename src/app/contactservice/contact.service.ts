import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private apiUrl = 'https://script.google.com/macros/s/AKfycbz_y6jv6eI56CeDD-tf0kVL6RXLK_h59HCY757ipfUzHsJ1QfQoe0YqIKMSDsI-vUDi/exec';

  constructor(private http: HttpClient) {}

   
sendData(data: any) {
  const body = new URLSearchParams();
  body.set('name', data.name);
  body.set('phone', data.phone);
  body.set('email', data.email);
  body.set('message', data.message);

  return this.http.post(
    this.apiUrl,
    body.toString(),
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'text'   // 🔥 THIS IS THE FIX
    }
  );
}



}
