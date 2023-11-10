import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log('FooComponent ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('FooComponent ngOnInit');
  }

}
