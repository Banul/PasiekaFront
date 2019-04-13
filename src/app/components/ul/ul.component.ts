import { Component, OnInit, Input } from '@angular/core';
import { Ul } from '../models/ul';

@Component({
  selector: 'app-ul',
  templateUrl: './ul.component.html',
  styleUrls: ['./ul.component.css']
})
export class UlComponent implements OnInit {
  @Input() ulData: Ul

  constructor() { }

  ngOnInit() {
  }

}
