import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SquarePipe } from '../../pipes/square.pipe';
import { MarksPipe } from '../../pipes/marks.pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule,SquarePipe,MarksPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  student={id:101,name:"Nisha"}
  curdate=new Date();

}
