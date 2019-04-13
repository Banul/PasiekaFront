import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchService } from '../../services/search-service.service';
import { UlListComponent } from '../ul-list/ul-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private ule;

  constructor(private searchService: SearchService) { }

  getUle() {
    this.searchService.getUle().subscribe(
      data => {this.ule = data}
    )
  }

  ngOnInit() {
    this.getUle();
  }

}
