import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:8080/api/bookings';

  constructor(private http: HttpClient) {}

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  approveBooking(id: number) {
  return this.http.put(
    `http://localhost:8080/api/bookings/${id}/approve`,
    {}
  );
}

rejectBooking(id: number) {
  return this.http.put(
    `http://localhost:8080/api/bookings/${id}/reject`,
    {}
  );
}

}
