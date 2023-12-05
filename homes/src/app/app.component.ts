import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { Housinglocation } from './interfaces/housinglocation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HousingLocationComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocation: Housinglocation = {
    id: 0,
    name: 'Ubaias',
    city: 'Recife',
    state: 'Pernambuco',
    photo: '${this.baseUrl}/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false
  }
}
