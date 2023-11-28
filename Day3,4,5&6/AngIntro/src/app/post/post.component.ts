import { Component,OnInit ,Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,ContentChild,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorModel } from '../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnChanges {
  title:string="List of Posts";
  @ContentChild(AuthorsAddressComponent) authAddress?:AuthorsAddressComponent;
  @Input() fromParent:string='';
  @Input() fromParent2:number=0;
  @Input() authors:AuthorModel={id:0,name:''};
  ChildMessage:string='Hello parent';
  outputChildMessage:string='From Child Component, Hi parent';
  @Output() messageEvent=new EventEmitter<string>();
  constructor() {
   // console.log('Hello from child constructor');
  };
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
  }
  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }
  /*ngOnInit(): void {
     console.log('Hello from child ngoninit');
  }
  ngAfterContentInit(): void {
   console.log('after content init'+this.authAddress?.address)
  }
  ngAfterContentChecked(): void {
    console.log('aftercontent checked')
  }
  ngDoCheck(): void {
    //console.log(this.authors);
  }*/
}
