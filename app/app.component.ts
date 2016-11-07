import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: 'app/app.component.html',
  providers: [TodoService]
})

export class TodoApp { 
  todoService: TodoService;
  newTodoText = '';

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEdtiting(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if(editedTitle.length === 0) {
      return this.todoService.remove(todo);
    }

    todo.title = editedTitle;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  removeCompleted() {
    this.todoService.removeCompleted();
  }

  toggleCompletion(todo: Todo) {
    this.todoService.toggleCompletion(todo);
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
  }

  addTodo() {
    if(this.newTodoText.trim().length) {
      this.todoService.add(this.newTodoText);
      this.newTodoText = '';
    }
  }
}