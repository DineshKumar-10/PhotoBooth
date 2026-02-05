import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  booking: any = {
    duration: 2,
    totalPrice: 0
  };

  calculatePrice() {
    let price = 0;

    if (this.booking.boothType === 'DSLR Photo Booth') price += 5000;
    if (this.booking.boothType === 'Mirror Photo Booth') price += 7000;
    if (this.booking.boothType === 'Combo') price += 11000;

    if (this.booking.packageName === 'Premium') price += 3000;
    if (this.booking.packageName === 'Custom') price += 5000;

    price = price * (this.booking.duration / 2);

    this.booking.totalPrice = price;
  }

  submitBooking() {
    console.log(this.booking);
    alert('Booking request submitted!');
  }
}
