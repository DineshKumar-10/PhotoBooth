import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {

//   private apiUrl = 'https://booking-backend-1-id0e.onrender.com/';

//   constructor(private http: HttpClient) {}

//   getAllBookings(): Observable<Booking[]> {
//     return this.http.get<Booking[]>(this.apiUrl);
//   }

//   approveBooking(id: number) {
//   return this.http.put(
//     `https://booking-backend-1-id0e.onrender.com//${id}/approve`,
//     {}
//   );
// }

// rejectBooking(id: number) {
//   return this.http.put(
//     `https://booking-backend-1-id0e.onrender.com//${id}/reject`,
//     {}
//   );
// }

// }



@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'https://booking-backend-1-id0e.onrender.com/api/bookings';

  constructor(private http: HttpClient) {}

  createBooking(data: Booking) {
    return this.http.post(this.apiUrl, data);
  }

  getAllBookings() {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  approveBooking(id: number) {
    return this.http.put(`${this.apiUrl}/${id}/approve`, {});
  }

  rejectBooking(id: number) {
    return this.http.put(`${this.apiUrl}/${id}/reject`, {});
  }
}
