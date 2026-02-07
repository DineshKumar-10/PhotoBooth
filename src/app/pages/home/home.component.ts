import { Component } from '@angular/core';

interface PackageTier {
  name: string;
  price: string;
  duration: string;
  features: string[];
  highlight?: boolean;
}

interface Highlight {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly trustStats = [
    { label: 'Events covered', value: '350+' },
    { label: '5-star reviews', value: '120+' },
    { label: 'On-time delivery', value: '100%' },
    { label: 'Average response time', value: '<2 hrs' }
  ];

  readonly brandLogos = ['Lulu Events', 'Sangeeth Co.', 'Aditya Retail', 'Knot & Co.'];

  readonly serviceHighlights: Highlight[] = [
    {
      title: 'Premium 4K capture',
      description: 'Studio lighting + pro-grade camera for crisp, share-ready moments.'
    },
    {
      title: 'Instant sharing',
      description: 'QR code downloads, WhatsApp sharing, and custom branded galleries.'
    },
    {
      title: 'On-site concierge',
      description: 'Uniformed attendants manage lines, props, and guest experience.'
    },
    {
      title: 'Brand-ready overlays',
      description: 'Custom frames, logos, and event themes tailored for every client.'
    }
  ];

  readonly eventTypes = [
    'Luxury weddings',
    'Corporate activations',
    'College festivals',
    'Retail store launches',
    'Influencer meetups',
    'Private celebrations'
  ];

  readonly packages: PackageTier[] = [
    {
      name: 'Signature',
      price: '₹18,000',
      duration: '3 hours',
      features: [
        'Unlimited prints',
        'Classic backdrop + props',
        'Online gallery within 24 hours',
        'Dedicated attendant'
      ]
    },
    {
      name: 'Elite',
      price: '₹28,000',
      duration: '4 hours',
      highlight: true,
      features: [
        'Luxury backdrop + premium props',
        'Instant social sharing kiosk',
        'Custom photo template',
        'Guestbook station + prints'
      ]
    },
    {
      name: 'Luxury',
      price: '₹38,000',
      duration: '5 hours',
      features: [
        '360° booth upgrade',
        'On-site event manager',
        'Live slideshow screen',
        'After-event highlight reel'
      ]
    }
  ];

  readonly processSteps: ProcessStep[] = [
    {
      title: 'Book your date',
      description: 'Share your event details and receive a custom quote in minutes.'
    },
    {
      title: 'We design your theme',
      description: 'Choose props, frames, and branding to match your celebration.'
    },
    {
      title: 'We deliver the magic',
      description: 'Our team arrives early, sets up fast, and manages the booth.'
    },
    {
      title: 'Relive the memories',
      description: 'Guests get instant prints while you receive a full gallery.'
    }
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Priya Nair',
      role: 'Wedding Planner',
      quote: 'Flawless setup, gorgeous prints, and the team handled every guest line.'
    },
    {
      name: 'Rohit Mehra',
      role: 'Brand Activation Lead',
      quote: 'Our campaign leads doubled with their branded overlays and QR sharing.'
    },
    {
      name: 'Nithya S.',
      role: 'Bride',
      quote: 'They made our reception unforgettable. The guestbook is priceless.'
    }
  ];

  readonly faqs = [
    {
      question: 'How much space do you need?',
      answer: 'We recommend a 10x10 ft space with a power outlet. We handle setup.'
    },
    {
      question: 'Can we customize the prints?',
      answer: 'Yes. We design frames, themes, and branding based on your event.'
    },
    {
      question: 'How soon do we get the gallery?',
      answer: 'Within 24 hours. Same-day delivery available for corporate events.'
    }
  ];

  readonly complianceNotes = [
    'GDPR-ready consent prompts for corporate events',
    'Secure cloud backups for every gallery',
    'Power redundancy and on-site tech support'
  ];
}
