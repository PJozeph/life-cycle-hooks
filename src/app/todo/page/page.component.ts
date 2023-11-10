import { AfterContentChecked, AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit, AfterViewChecked {
    constructor() {}
    public isVisible = true;


  ngOnInit(): void {
    console.log('PageComponent ngOnInit');
  }


  ngAfterViewChecked(): void {
    console.log('PageComponent ngAfterViewChecked');
  }

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

}
