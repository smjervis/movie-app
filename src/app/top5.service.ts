import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Top5Service {

  constructor(public _http: HttpClient) { }

  getList(): Observable<any> {
    return this._http.get("http://www.mocky.io/v2/5dc3c053300000540034757b");
  }
}
