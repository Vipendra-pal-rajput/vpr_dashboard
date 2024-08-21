import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    localStorage.removeItem('user');
  }
  login() {
    if (this.authService.login(this.username, this.password)) {
      if(this.username == 'user'){
        this.router.navigate(['/product-list']);
      }
      else{
        this.router.navigate(['/admin-dashboard']);
      }
    } else {
      alert('Invalid credentials');
    }
  }
}
