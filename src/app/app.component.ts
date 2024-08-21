import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Modules/home/home.component";
import { AdminDashboardComponent } from "./Modules/admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projdashboard';
  showHome: boolean = false;
  adshowHome: boolean = false;

  constructor(
    private router: Router,
  ){
    // on route change to '/login', set the variable showHome to false  
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          const user = localStorage.getItem('user');
          if (event.url == '/' && (user == null || user == undefined) ) {
            this.showHome = false;
          } else {
            this.showHome = true;
          }
        }
      });
  }
}
