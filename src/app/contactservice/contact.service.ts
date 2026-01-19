import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private apiUrl = 'https://script.google.com/macros/s/AKfycbzTNOL_WEI6CdPIAoJpm5j6IttXG28Ka8O6Y-CVRgfoURjJ7KUw5VtR9nUmFHKhF-J3/exec';

  constructor(private http: HttpClient) {}

   
sendData(data: any) {
  const body = new URLSearchParams();
  body.set('name', data.name);
  body.set('phone', data.phone);
  body.set('email', data.email);
  body.set('message', data.message);
  body.set('city', data.city);
  body.set('state', data.state);
  body.set('pincode', data.pincode)

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
