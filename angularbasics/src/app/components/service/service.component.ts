import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-service',
  imports: [CategoryComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  constructor(private userService:UserService)
  {

  }

  registerUser()
  {
    this.userService.addUser()
  }

}
