import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';
import { catchError, filter, from, interval, map, merge, mergeAll, mergeMap, Observable, of, retry, take } from 'rxjs';
import { RecipesComponent } from "../recipes/recipes.component";
import { QuotesComponent } from "../quotes/quotes.component";

@Component({
  selector: 'app-obervables',
  imports: [CommonModule, RecipesComponent, QuotesComponent],
  templateUrl: './obervables.component.html',
  styleUrl: './obervables.component.css'
})
export class ObervablesComponent {

  data:any[]=[];

 observable= new Observable((observer)=>{
     observer.next(23);
     observer.next(74);
     observer.next(12);
   
     observer.error(new Error("Something went wrong"))
     observer.next(10);
     observer.next(9);
     observer.complete()
     
  })

  getData1()
  {
    this.observable.subscribe({
      next:(value)=>{
        this.data.push(value)
      },
      error:(err)=>{
        console.log(err.message)
      },
      complete:()=>{
        alert("Data received successfully")
      }
    })
  }

  getData2(){
    
    from([34,67,10,345,68])
    .subscribe({
      next:(value)=>this.data.push(value)
    })
  }

  getData3()
  {
    of([54,34,56],"Hello",34,"sdddd")
    .subscribe({
      next:(value)=>this.data.push(value)
    })
  }

  subscribe:any;
  getData4()
  {
   this.subscribe= interval(1000)
    .subscribe({
      next:(value)=>this.data.push(value)
    })
  }

  stop()
  {
    this.subscribe.unsubscribe();
  }

  getData5()
  {
    of(5,3,7)
    .pipe(
      take(1)
    )
    .subscribe({
      next:(value)=>this.data.push(value)
    })

  }

  getData6(){
    of(12,56,78,12)
    .pipe(
      map(n=>n*n),
      filter(n=>n>200)
    )
    .subscribe({
      next:(value)=>this.data.push(value)
    })
  }


  getData7()
  {
    of(12,34,78,90)
    .pipe(
      mergeMap(n=>of(n)),
     
    )
    .subscribe(
      {
        next:(value)=>console.log(value)
      }
    )
  }

  getData8()
  {
      interval(1000)
      .pipe(
        map(n=>{
          if(n==3)
          {
            throw new Error("Soemthing went wrong")
          }
          return n
        }),
        retry(3),
        catchError((error)=>{
          console.log(error.message);
          return of(34,78,90)
        })

      ).subscribe({
        next:(value)=>this.data.push(value)
      })
  }






}
