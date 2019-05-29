import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Mahattan Mansion',
    'In the heart of NY',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Manhattan_Skyline_night.jpg/800px-Manhattan_Skyline_night.jpg',
    149.99),
    new Place('p1', 'Mahattan Mansion',
    'In the heart of NY',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Manhattan_Skyline_night.jpg/800px-Manhattan_Skyline_night.jpg',
    149.99),
    new Place('p2', 'Cali Beach Place',
    'On the beach in Cali',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Manhattan_Skyline_night.jpg/800px-Manhattan_Skyline_night.jpg',
    189.99),
    new Place('p3', 'San Antonio Ranch',
    'Ranch in the Desert',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Manhattan_Skyline_night.jpg/800px-Manhattan_Skyline_night.jpg',
    99.99)

  ];
  get places() {
    return [...this._places];
  }
  constructor() { }
}
