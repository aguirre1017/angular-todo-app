import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TodoApp }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TodoApp ],
  bootstrap:    [ TodoApp ]
})

export class AppModule { }