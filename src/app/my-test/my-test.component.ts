import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck,ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class MyTestComponent implements DoCheck,OnChanges,OnInit {

  @Input() arr;
  constructor(private cd:ChangeDetectorRef) {

    this.cd.detach();
   }

  ngDoCheck() {
//this.cd.detectChanges();
  }


ngOnChanges(){
this.cd.detectChanges();
}


ngOnInit()
{
this.arr.push(7);

}


AddVal(){this.cd.detectChanges();}
}
