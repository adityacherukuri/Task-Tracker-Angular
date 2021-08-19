import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;

  @Output() toggleEmitter: EventEmitter<Task[]> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<Task[]> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggle(task) {
    this.toggleEmitter.emit(task);
  }

  onDelete(task) {
    this.deleteEmitter.emit(task);
  }
}
