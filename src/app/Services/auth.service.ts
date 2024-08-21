import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username: string, password: string): boolean {
    // Example user validation
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
      return true;
    } else if (username === 'user' && password === 'user') {
      localStorage.setItem('user', JSON.stringify({ username, role: 'user' }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  // isAdmin(): boolean {
  //   const user = this.getUser();
  //   return user?.role === 'admin';
  // }

  isAdmin(): boolean {
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    return parsedUser.username === 'admin';
  }

}
