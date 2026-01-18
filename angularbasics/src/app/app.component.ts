import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angularbasics';
  constructor(private loginService:LoginService)
  {

  }

  toggleLogin()
  {
    this.loginService.toggleLogin()
  }

  isAuthenticated()
  {
    return this.loginService.isAuthenticated()
  }
  
}
