import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-containt',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './main-containt.component.html',
  styleUrl: './main-containt.component.css'
})
export class MainContaintComponent {
selectedOption: 'Individuals' | 'Businesses' = 'Individuals';

  toggle(option: 'Individuals' | 'Businesses') {
    this.selectedOption = option;
  }
}
