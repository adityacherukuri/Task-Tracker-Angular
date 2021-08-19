import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private tasksSevice: TaskService) {}

  ngOnInit(): void {
    this.tasksSevice.getTasks().subscribe((data) => (this.tasks = data));
    //console.log(this.tasks);
  }

  addTask(task: Task) {
    this.tasksSevice.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  toggleRemainder(task: Task) {
    task.reminder = !task.reminder;
    this.tasksSevice.updateTaskReminder(task).subscribe();
  }

  deleteTask(task: Task) {
    this.tasksSevice
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
