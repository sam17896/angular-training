import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username == 'demo@ibex.co' && this.password == 'password') {
      localStorage.setItem('login', JSON.stringify(true))
      this.router.navigate(['/']);
    }
  }

}
