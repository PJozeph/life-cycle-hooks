import {
    AfterContentChecked,
    AfterContentInit,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-children',
    templateUrl: './children.component.html',
    styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked {
    @Input() name: string | undefined = undefined;

    constructor() {
        console.log('ChildrenComponent constructor name', this.name);
    }
    ngAfterContentChecked(): void {
      console.log('ChildrenComponent ngAfterContentChecked name', this.name);
    }
    ngAfterContentInit(): void {
        console.log('ChildrenComponent ngAfterContentInit name', this.name)
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ChildrenComponent ngOnChanges name', this.name);
    }

    ngOnInit(): void {
        console.log('ChildrenComponent ngOnInit name', this.name);
    }
}
