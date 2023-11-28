import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authors-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors-address.component.html',
  styleUrl: './authors-address.component.css'
})
export class AuthorsAddressComponent implements OnInit {
  @Input() address:string='';
  constructor() {}
  ngOnInit(): void {
    
  }
}
