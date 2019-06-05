import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  constructor() { }
  onLogin() {
    this._userIsAuthenticated = true;
  }
  onLogout() {
    this._userIsAuthenticated = false;
  }

}
