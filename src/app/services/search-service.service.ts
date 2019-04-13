import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    constructor(private http:HttpClient) {}

    getUle() {
        return this.http.get(environment.myEndpoint + '/ul');
    }

}
