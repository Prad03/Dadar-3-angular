import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  darkTheme=true
  changeTheme()
  {
    this.darkTheme=!this.darkTheme;
  }

  margin="20px"
  // changeMargin('40px')
  changeMargin(margin:string)
  {
    this.margin=margin
  }

  boxStyles(){
    return {
      'background-color':'plum',
      'border':'2px solid black',
      'margin':this.margin
    }
  }

  loggedIn=false
  changeLogin()
  {
    this.loggedIn=!this.loggedIn
  }

  colors=['blue','green','red']

  students=[
     {id:101,name:"Nisha Bhosale",course:"FSD Java"},
     {id:102,name:"Ankita Sharma",course:"Data Science"},
     {id:103,name:"Anisha Gupta",course:"Software testing"}
  ]

}
