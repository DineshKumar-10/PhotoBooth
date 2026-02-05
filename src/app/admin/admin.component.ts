import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { CommonModule } from '@angular/common';

import { Booking } from '../models/booking';

@Component({
  selector: 'app-admin-dashboard',
  standalone:true,
    imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getAllBookings().subscribe({
      next: data => this.bookings = data,
      error: err => console.error(err)
    });
  }

approve(id: number) {
  this.bookingService.approveBooking(id).subscribe(() => {
    this.loadBookings();
  });
}

reject(id: number) {
  this.bookingService.rejectBooking(id).subscribe(() => {
    this.loadBookings();
  });
}






}
