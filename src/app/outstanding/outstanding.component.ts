import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.css']
})
export class OutstandingComponent {
  
  @Input()
  outstandingTasks: { 
      description: string, 
      priority: string, 
      dueDate: Date,
      isComplete: boolean}[] = []; 
}
