import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf32_workshop';

  tasks: { description: string, priority: string, dueDate: Date, isComplete: boolean }[] = [];

  addToOutstanding(event: any) {
    console.log(JSON.stringify(event.value));
    this.tasks.push(event.value);
  }
}
