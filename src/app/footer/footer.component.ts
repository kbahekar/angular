import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
footerLinks = [
    {
      title: 'About Visa',
      links: [
        { label: 'Leading by Example', url: '#' },
        { label: 'What We Do', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Visa Partnerships and Events', url: '#' },
        { label: 'Visa Uplifts Small Businesses', url: '#' }
      ]
    },
    {
      title: 'Our Values',
      links: [
        { label: 'Corporate Responsibility', url: '#' },
        { label: 'Social Impact', url: '#' },
        { label: 'Inclusion', url: '#' },
        { label: 'Visa Foundation', url: '#' }
      ]
    },
    {
      title: 'News + Media',
      links: [
        { label: 'Newsroom', url: '#' },
        { label: 'Visa Perspectives', url: '#' },
        { label: 'Investor Relations', url: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Support Center', url: '#' },
        { label: 'Lost or Stolen Visa', url: '#' },
        { label: 'Gift Card Balance', url: '#' },
        { label: 'Visa Rules + Policy', url: '#' },
        { label: 'Contact Us', url: '#' }
      ]
    },
    {
      title: 'Legal + Privacy',
      links: [
        { label: 'Legal', url: '#' },
        { label: 'Privacy Notice', url: '#' },
        { label: 'Cookie Preferences', url: '#' },
        { label: 'Your Privacy Rights', url: '#' },
        { label: 'Accessibility', url: '#' },
        { label: 'Political Engagement', url: '#' }
      ]
    }
  ];

  countries = ['United States', 'United Kingdom', 'Canada'];
}