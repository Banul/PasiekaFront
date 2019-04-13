import { Component, OnInit } from '@angular/core';
import { Ul } from '../models/ul';

@Component({
  selector: 'app-ul-list',
  templateUrl: './ul-list.component.html',
  styleUrls: ['./ul-list.component.css']
})
export class UlListComponent implements OnInit {

  private ulArray: Array <Ul>; 
  

  constructor() { }

  ngOnInit() {
    this.ulArray = [{
      id: 1
    }]
  }

}
