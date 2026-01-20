import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private apiUrl = 'https://script.google.com/macros/s/AKfycbwYmknVSeHp4W4T-NFzTkEpI1ol4Is3wVSuYghc09rulglkuUdLtJHNArTfwTuHQstV/exec';

  
  constructor(private http: HttpClient) {}

   
sendData(data: any) {
  const body = new URLSearchParams();
  body.set('name', data.name);
  body.set('phone', data.phone);
  body.set('email', data.email);
  body.set('eventType',data.eventType);
  body.set('date',data.date);
  body.set('time',data.time);
  body.set('city', data.city);
  body.set('state', data.state);
  body.set('pincode', data.pincode);
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
