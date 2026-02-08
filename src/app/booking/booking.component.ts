// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.css']
// })
// export class BookingComponent implements OnInit {

//   bookingForm!: FormGroup;
//   totalPrice = 0;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.bookingForm = this.fb.group({
//       eventType: ['', Validators.required],
//       boothType: ['', Validators.required],
//       eventDate: ['', Validators.required],
//       startTime: ['', Validators.required],
//       duration: [2, Validators.required],
//       packageName: ['', Validators.required],
//       customerName: ['', Validators.required],
//       phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
//       email: [''],
//       location: ['', Validators.required]
//     });

//     this.bookingForm.valueChanges.subscribe(() => {
//       this.calculatePrice();
//     });
//   }

//   calculatePrice() {
//     let price = 0;
//     const f = this.bookingForm.value;

//     if (f.boothType === 'DSLR') price += 5000;
//     if (f.boothType === 'Mirror') price += 7000;
//     if (f.boothType === 'Combo') price += 11000;

//     if (f.packageName === 'Premium') price += 3000;
//     if (f.packageName === 'Custom') price += 5000;

//     price *= (f.duration / 2);
//     this.totalPrice = price;
//   }

//   // submitBooking() {
//   //   if (this.bookingForm.invalid) return;

//   //   const bookingData = {
//   //     ...this.bookingForm.value,
//   //     totalPrice: this.totalPrice
//   //   };

//   //   console.log('BOOKING DATA', bookingData);
//   //   alert('Booking request sent!');
//   // }
  


  
 

// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  totalPrice = 0;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      eventType: ['', Validators.required],
      boothType: ['', Validators.required],
      eventDate: ['', Validators.required],
      startTime: ['', Validators.required],
      duration: [2, Validators.required],
      packageName: ['', Validators.required],
      customerName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: [''],
      location: ['', Validators.required]
    });

    this.bookingForm.valueChanges.subscribe(() => {
      this.calculatePrice();
    });
  }

  calculatePrice() {
    let price = 0;
    const f = this.bookingForm.value;

    if (f.boothType === 'DSLR') price += 7000;
    if (f.boothType === 'Mirror') price += 7000;
    if (f.boothType === 'Combo') price += 11000;

    if (f.packageName === 'basic') price += 8000;
    if (f.packageName === 'Premium') price += 11000;
    if (f.packageName === 'Custom') price += 5000;

    price *= (f.duration / 2);
    this.totalPrice = price;
  }

  submitBooking() {
    if (this.bookingForm.invalid) return;

    const bookingData = {
      ...this.bookingForm.value,
      totalPrice: this.totalPrice
    };

    this.http.post(
  'https://booking-backend-1-id0e.onrender.com/api/bookings',
  bookingData
)
.subscribe({
      next: () => {
        alert('Booking successful');
        this.bookingForm.reset();
        this.totalPrice = 0;
      },
      error: () => alert('Booking failed')
    });
  }
}
