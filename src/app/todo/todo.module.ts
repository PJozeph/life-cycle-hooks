import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { TodoRoutingModule } from './todo-routing.module';
import { ChildrenComponent } from './components/children/children.component';
import { TodoService } from './todo.service';
import { FooComponent } from './components/foo/foo.component';


@NgModule({
  declarations: [
    PageComponent,
    ChildrenComponent,
    FooComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
