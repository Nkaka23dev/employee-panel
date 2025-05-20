import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss'
})
export class OthersComponent  {

 count: WritableSignal<number> = signal(0);

 increment = () => {
  this.count.update(value => value + 1);
 }

 decrement = () => {
  this.count.update(value => value -1);
 }

 reset = () => {
  this.count.set(0);
 }
 
 name = "Nkakak";
 doubleCount: Signal<number> = computed(() => this.count() * 2);

 ngOnInit(){
  console.log(this.doubleCount);
  console.log(this.name);
 }

}
